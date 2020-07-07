// const emitter = require('chrome-emitter');
const emitter = require('./utils/chrome-emitter');
const { getContent } = require('./utils');

console.log('here is options');

const toBackgroundBtn = document.getElementById('toBackground');
const toContentBtn = document.getElementById('toContent');
const toPopupBtn = document.getElementById('toPopup');
const toInsertedBtn = document.getElementById('toInsertedScript');

const fromBackgroundText = document.getElementById('fromBackground');
const fromContentText = document.getElementById('fromContent');
const fromPopupText = document.getElementById('fromPopup');
const fromInsertedText = document.getElementById('fromInsertedScript');

const message = 'hello i am options';
toBackgroundBtn.onclick = () => {
  emitter.emit('options-to-background', message);
};
toContentBtn.onclick = () => {
  emitter.emit('options-to-content', message);
};
toPopupBtn.onclick = () => {
  emitter.emit('options-to-popup', message);
};
toInsertedBtn.onclick = () => {
  emitter.emit('options-to-inserted', message);
};

emitter.on('background-to-options', (msg) => {
  const content = getContent(msg);
  console.log(content);
  fromBackgroundText.innerText = content;
});
emitter.on('content-to-options', (msg) => {
  const content = getContent(msg);
  console.log(content);
  fromContentText.innerText = content;
});
emitter.on('popup-to-options', (msg) => {
  const content = getContent(msg);
  console.log(content);
  fromPopupText.innerText = content;
});
emitter.on('inserted-to-options', (msg) => {
  const content = getContent(msg);
  console.log(content);
  fromInsertedText.innerText = content;
});

