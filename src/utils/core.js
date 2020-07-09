const checker = require("./checker");
const log = require("./log");
const {
  CUSTOM_EVENT_NAME,
  SPECIAL_CUSTOM_EVENT_NAME,
  DATA_KEY,
  TIME_KEY,
} = require("./constants");

const { checkIsAtInjectedScript, checkIsAtContentScript } = checker;
const { chrome } = window;

const isAtInjectedScript = checkIsAtInjectedScript();
const isAtContentScript = checkIsAtContentScript();
