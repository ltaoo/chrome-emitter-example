// const emitter = require('chrome-emitter');
const emitter = require('./utils/chrome-emitter');
const { getContent, loadJs } = require('./utils');

console.log('here is content');

loadJs(chrome.extension.getURL("/injected.js"))
  .then(() => {
    console.log('[content]', 'inserted loaded');
  });

emitter.on('popup-to-content', (msg) => {
  const content = getContent(msg);
  console.log('[content] from popup', content);
});
emitter.on('options-to-content', (msg) => {
  const content = getContent(msg);
  console.log('[content] from options', content);
});
emitter.on('background-to-content', (msg) => {
  const content = getContent(msg);
  console.log('[content] from background', content);
});
emitter.on('inserted-to-content', (msg) => {
  const content = getContent(msg);
  console.log('[content] from inserted', content);
});

emitter.on('popup-to-inserted', (msg) => {
  emitter.emit('popup-to-inserted');
  // const content = getContent(msg);
  // console.log('[content] from inserted', content);
});


