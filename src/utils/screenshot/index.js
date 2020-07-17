import emitter from "chrome-emitter";
import * as fixedElementUtils from "./fixedElement";

/**
 * 对页面截图
 * @param {*} times
 */
function screenshot(canvasData, cb, times = 0, originalScrollTop) {
  const {
    size: { pageHeight },
    table: { rows },
    topFixedElements,
    bottomFixedElements,
  } = canvasData;
  // console.log("start screenshot", times, rows);

  if (times === rows) {
    fixedElementUtils.showFixedElements(topFixedElements);
    window.scrollTo(0, originalScrollTop);
    fixedElementUtils.resetStyle(document.body);
    emitter.remove("screenshotSingleScreenComplete");
    mergeImages(canvasData, cb);
    return;
  }
  if (rows !== 1) {
    if (times === 0) {
      // console.log("hide bottom fixed elements", bottomFixedElements);
      fixedElementUtils.hideFixedElements(bottomFixedElements);
    }
    if (rows > 1 && times === 1) {
      // console.log("hide top fixed elements", topFixedElements);
      fixedElementUtils.hideFixedElements(topFixedElements);
    }
    if (times === rows - 1) {
      // console.log("show bottom fixed elements", bottomFixedElements);
      fixedElementUtils.showFixedElements(bottomFixedElements);
    }
  }

  emitter.emit("screenshot");
}

function mergeImages(canvasData, cb) {
  const {
    screenshots,
    size: { pageWidth, pageHeight, fullWidth, fullHeight },
  } = canvasData;

  const canvas = document.createElement("canvas");
  canvas.width = fullWidth;
  canvas.height = fullHeight;
  const ctx = canvas.getContext("2d");

  // 从下往上绘制
  let index = screenshots.length - 1;
  function draw(screenshot) {
    // console.log("start draw", index);
    const tempImage = new Image();
    // console.log(screenshot.data_url);
    tempImage.src = screenshot.url;
    tempImage.onload = () => {
      let y = index * pageHeight;
      // 如果是最后一张
      if (index === screenshots.length - 1) {
        const realHeightOfLastScreenshot = fullHeight % pageHeight;
        // y = pageHeight - realHeightOfLastScreenshot;
        y = fullHeight - pageHeight;
      }
      // console.log("y position", y);
      const h = (pageWidth * tempImage.height) / tempImage.width;
      ctx.drawImage(tempImage, 0, y, pageWidth, h);
      index -= 1;
      if (index === -1) {
        if (cb) {
          cb(canvas, canvasData);
        }
        return;
      }
      draw(screenshots[index]);
    };
  }

  draw(screenshots[index]);
}

export default function main(cb) {
  const scrollWidth = document.body.scrollWidth;
  const scrollHeight = document.body.scrollHeight;
  const visibleWidth = document.documentElement.clientWidth;
  const visibleHeight = document.documentElement.clientHeight;

  // 根据可视区域计算整个网页可以拆分成多少行多少列
  const columns = Math.ceil((scrollWidth * 1.0) / visibleWidth);
  const rows = Math.ceil((scrollHeight * 1.0) / visibleHeight);

  const fixedElements = fixedElementUtils.findFixedElements();
  // console.log("fixed elements", fixedElements);
  const topFixedElements = fixedElementUtils.findTopFixedElements(
    fixedElements,
    visibleHeight
  );
  // console.log("top fixed elements", topFixedElements);
  const bottomFixedElements = fixedElementUtils.findBottomFixedElements(
    fixedElements,
    visibleHeight
  );
  // console.log("bottom fixed elements", bottomFixedElements);
  const canvasData = {
    size: {
      fullWidth: scrollWidth,
      fullHeight: scrollHeight,
      pageWidth: visibleWidth,
      pageHeight: visibleHeight,
    },
    table: { rows: rows, columns: columns },
    screenshots: [],
    topFixedElements,
    bottomFixedElements,
  };

  let times = 0;
  const originalScrollTop = document.documentElement.scrollTop;

  // 完成一屏截图
  emitter.on("screenshotSingleScreenComplete", (url) => {
    canvasData.screenshots.push({
      row: times,
      column: 0,
      url,
    });
    times += 1;
    window.scrollTo(0, times * visibleHeight);
    setTimeout(() => {
      screenshot(canvasData, cb, times, originalScrollTop);
    }, 1200);
  });

  fixedElementUtils.setStyle(document.body, { overflow: "hidden" });

  window.scrollTo(0, times * visibleHeight);
  setTimeout(() => {
    screenshot(canvasData, cb, times, originalScrollTop);
  }, 1200);
};
