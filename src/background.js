// const emitter = require('chrome-emitter');
const emitter = require('./utils/chrome-emitter');
const { getContent } = require('./utils');

console.log("here is background");

emitter.on('popup-to-background', (msg) => {
  const content = getContent(msg);
  console.log('[background] from popup', content);
});
emitter.on('options-to-background', (msg) => {
  const content = getContent(msg);
  console.log('[background] from options', content);
});
emitter.on('content-to-background', (msg) => {
  const content = getContent(msg);
  console.log('[background] from content', content);
});
emitter.on('injected-to-background', (msg) => {
  const content = getContent(msg);
  console.log('[background] from inserted', content);
});
