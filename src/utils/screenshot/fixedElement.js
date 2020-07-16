/**
 * interface FixedElement {
 *   position: { top, bottom }
 *   source: HTMLElement
 * }
 * @return {Array<FixedElement>}
 */
export function findFixedElements() {
  const elements = document.getElementsByTagName("*");
  const fixedElements = Array.from(elements).filter((element) => {
    const styles = getComputedStyle(element);
    return styles.position === "fixed" && styles.display !== "none";
  });
  return fixedElements.map((element) => {
    const { top, bottom } = getComputedStyle(element);
    return {
      position: {
        top,
        bottom,
      },
      source: element,
    };
  });
}
function pxToNum(pxValue) {
  return Number(pxValue.match(/[0-9]+/g)[0]);
}
export function findTopFixedElements(fixedElements, windowHeight) {
  return fixedElements.filter((fixedElement) => {
    const { top: topStr, bottom: bottomStr } = getComputedStyle(
      fixedElement.source
    );
    const top = pxToNum(topStr);
    const bottom = pxToNum(bottomStr);

    console.log("findTopFixedElements", top, bottom, windowHeight);
    if (top < windowHeight / 2 && bottom > windowHeight / 2) {
      return true;
    }
    return false;
  });
}
export function findBottomFixedElements(
  fixedElements,
  windowHeight
) {
  return fixedElements.filter((fixedElement) => {
    const { top: topStr, bottom: bottomStr } = getComputedStyle(
      fixedElement.source
    );

    const top = pxToNum(topStr);
    const bottom = pxToNum(bottomStr);
    if (top > windowHeight / 2 && bottom < windowHeight / 2) {
      return true;
    }
    return false;
  });
};
const MAP = new Map();
export function setStyle(element, styles = {}) {
  console.log("setStyle", element, element.style.cssText, styles);
  MAP.set(element, element.style.cssText);
  Object.keys(styles).forEach((attr) => {
    element.style[attr] = styles[attr];
  });
}
export function resetStyle(element) {
  const originalCssText = MAP.get(element);
  console.log("resetStyle", element, originalCssText);
  if (originalCssText === undefined) {
    return;
  }
  element.style = originalCssText || "";
}

/**
 *
 * @param {Array<FixedElement>} fixedElements
 */
export function hideFixedElements(fixedElements) {
  for (let i = 0; i < fixedElements.length; i += 1) {
    const element = fixedElements[i].source;
    setStyle(element, { display: "none" });
  }
}
export function showFixedElements(fixedElements) {
  console.log("1111 showFixedElements", "reset style", fixedElements);
  for (let i = 0; i < fixedElements.length; i += 1) {
    const element = fixedElements[i].source;
    console.log("222 showFixedElements", "reset style");
    resetStyle(element);
  }
}
