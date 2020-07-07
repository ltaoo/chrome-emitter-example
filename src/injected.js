// const emitter = require('chrome-emitter');
const emitter = require('./utils/chrome-emitter');
const { getContent } = require('./utils');

console.log('here is inserted');

emitter.on('popup-to-inserted', (msg, str, num) => {
  const content = getContent(msg);
  console.log('[inserted] from popup', content, str, num);
});
// emitter.on('options-to-inserted', (msg) => {
//   const content = getContent(msg);
//   console.log('[inserted] from options', content);
// });
// emitter.on('background-to-inserted', (msg) => {
//   const content = getContent(msg);
//   console.log('[inserted] from background', content);
// });
// emitter.on('content-to-inserted', (msg) => {
//   const content = getContent(msg);
//   console.log('[inserted] from content', content);
// });

// const fixedBtn = document.createElement('button');
// fixedBtn.innerText = '发送消息到 background';
// fixedBtn.onclick = () => {
//   emitter.emit('injected-to-background');
// };
document.body.onclick = () => {
  // console.log('[inserted]', 'click body');
  emitter.emit('injected-to-background');
};
