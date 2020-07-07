// const emitter = require('chrome-emitter');
const emitter = require('./utils/chrome-emitter');
const { getContent } = require('./utils');

console.log("here is popup");

const toBackgroundBtn = document.getElementById('toBackground');
const toContentBtn = document.getElementById('toContent');
const toOptionsBtn = document.getElementById('toOptions');
const toInsertedBtn = document.getElementById('toInsertedScript');

const fromBackgroundText = document.getElementById('fromBackground');
const fromContentText = document.getElementById('fromContent');
const fromOptionsText = document.getElementById('fromOptions');
const fromInsertedText = document.getElementById('fromInsertedScript');

const message = 'hello i am popup';
toBackgroundBtn.onclick = () => {
  console.log('[popup] send message to background');
  emitter.emit('popup-to-background', message);
};
toContentBtn.onclick = () => {
  console.log('[popup] send message to content');
  emitter.emit('popup-to-content', message);
};
toOptionsBtn.onclick = () => {
  console.log('[popup] send message to options');
  emitter.emit('popup-to-options', message);
};
toInsertedBtn.onclick = () => {
  console.log('[popup] send message to inserted');
  emitter.emit('popup-to-inserted', message, 'hahaha', 1);
};

emitter.on('background-to-popup', (msg) => {
  const content = getContent(msg);
  fromBackgroundText.innerText = content;
});
emitter.on('content-to-popup', (msg) => {
  const content = getContent(msg);
  fromContentText.innerText = content;
});
emitter.on('options-to-popup', (msg) => {
  const content = getContent(msg);
  fromOptionsText.innerText = content;
});
emitter.on('inserted-to-popup', (msg) => {
  const content = getContent(msg);
  fromInsertedText.innerText = content;
});

