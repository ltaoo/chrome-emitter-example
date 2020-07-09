// const emitter = require('chrome-emitter');
const emitter = require('./utils/chrome-emitter');
const { getContent, loadJs } = require('./utils');
const screenshot = require('./utils/screenshot');

console.log('here is content');

// document.body.onload = () => {
//   findFixedElement().forEach((element) => {
//     const { source, position } = element;
//     source.styles.display = 'none';
//   });
// };

loadJs(chrome.extension.getURL("/injected.js"))
  .then(() => {
    console.log('[content]', 'inserted loaded');
  });

// emitter.on('popup-to-content', (msg) => {
//   const content = getContent(msg);
//   console.log('[content] from popup', content);
// });
// emitter.on('options-to-content', (msg) => {
//   const content = getContent(msg);
//   console.log('[content] from options', content);
// });
// emitter.on('background-to-content', (msg) => {
//   const content = getContent(msg);
//   console.log('[content] from background', content);
// });
// emitter.on('inserted-to-content', (msg) => {
//   const content = getContent(msg);
//   console.log('[content] from inserted', content);
// });

// emitter.on('popup-to-inserted', (msg) => {
//   emitter.emit('popup-to-inserted');
//   // const content = getContent(msg);
//   // console.log('[content] from inserted', content);
// });

// emitter.on('start-screenshot', () => {
//   console.log('start screenshot');
// });

emitter.on('startScreenshot', () => {
  screenshot((canvas, canvasData) => {
    console.log(canvasData.size, canvasData.table, canvasData.screenshots);
    const url = canvas.toDataURL();
    emitter.emit('openNewTab', url);
    // const { screenshots } = canvasData;
    // screenshots.map((screenshot) => {
    //   console.log(screenshot.url);
    // });
  });
});
