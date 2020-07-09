const checker = require("./checker");

const DEBUGGER = true;

const { getCurrentScriptName } = checker;

const currentScriptName = getCurrentScriptName() || "UNKNOWN";

module.exports = function log(...params) {
  if (DEBUGGER === false) {
    return;
  }
  const info = [currentScriptName, ...params];
  console.log(...info);
};
