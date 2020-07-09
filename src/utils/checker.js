const SCRIPTS = {
  NONE: 0,
  CONTENT: 1,
  INJECTED: 2,
  BACKGROUND: 3,
};
const SCRIPT_NAMES = {
  0: "NONE",
  1: "CONTENT",
  2: "INJECTED",
  3: "BACKGROUND",
  4: "POPUP",
  5: "OPTIONS",
};
function checkScript() {
  if (chrome === undefined) {
    return SCRIPTS.NONE;
  }
  if (chrome.storage === undefined) {
    return SCRIPTS.INJECTED;
  }
  if (chrome.tabs === undefined) {
    return SCRIPTS.CONTENT;
  }
  const bgWindow = chrome.extension.getBackgroundPage();
  if (window === bgWindow) {
    return SCRIPTS.BACKGROUND;
  }
  return SCRIPTS.NONE;
}

module.exports.checkIsAtContentScript = function checkIsAtContentScript() {
  return checkScript() === SCRIPTS.CONTENT;
}
module.exports.checkIsAtInjectedScript = function checkIsAtInjectedScript() {
  return checkScript() === SCRIPTS.INJECTED;
}

module.exports.checkIsAtBackgroundScript = function checkIsAtInjectedScript() {
  return checkScript() === SCRIPTS.BACKGROUND;
}

module.exports.getCurrentScriptName = function getCurrentScriptName() {
  return SCRIPT_NAMES[checkScript()];
}
