// const emitter = require('chrome-emitter');
const emitter = require("./utils/chrome-emitter");
const { getContent } = require("./utils");
const screenshot = require("./utils/screenshot");

console.log("here is background");

// emitter.response('checkCurrentTabIsActive', () => {
//   return 'value';
// });

// emitter.on('popup-to-background', (msg) => {
//   const content = getContent(msg);
//   console.log('[background] from popup', content);
// });
// emitter.on('options-to-background', (msg) => {
//   const content = getContent(msg);
//   console.log('[background] from options', content);
// });
// emitter.on('content-to-background', (msg) => {
//   const content = getContent(msg);
//   console.log('[background] from content', content);
// });
// emitter.on('injected-to-background', (msg) => {
//   const content = getContent(msg);
//   console.log('[background] from inserted', content);
// });

emitter.on("screenshot", () => {
  chrome.tabs.query(
    {
      active: true,
      currentWindow: true,
    },
    (tabs) => {
      const tab = tabs[0];
      chrome.tabs.captureVisibleTab(null, {}, (url) => {
        // console.log('dispatch screenshot complete');
        emitter.emit("screenshotComplete", url);
      });
    }
  );
});

function screenshotHandler() {}

// emitter.on("startScreenshot", () => {
//   screenshot((canvas, canvasData) => {
//     console.log(canvasData.size, canvasData.table, canvasData.screenshots);
//     const url = canvas.toDataURL();
//     chrome.tabs.create({
//       url,
//       active: true,
//     });
//     // emitter.emit('openNewTab', url);
//     // const { screenshots } = canvasData;
//     // screenshots.map((screenshot) => {
//     //   console.log(screenshot.url);
//     // });
//   });
// });

emitter.on("openNewTab", (url) => {
  chrome.tabs.create({
    url,
    active: true,
  });
});

// setTimeout(() => {
//   console.log('emit event');
//   emitter.emit('background-to-content');
// }, 5000);
