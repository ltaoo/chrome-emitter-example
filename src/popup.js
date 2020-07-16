import emitter from './utils/chrome-emitter';

console.log("here is popup");

const toBackgroundBtn = document.getElementById('toBackground');
const toContentBtn = document.getElementById('toContent');
const toOptionsBtn = document.getElementById('toOptions');
const toInsertedBtn = document.getElementById('toInjected');

const screenshot = document.getElementById('screenshot');

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
  console.log('[popup] send message to injected');
  emitter.emit('popup-to-injected', message);
};

screenshot.onclick = () => {
  emitter.emit('startScreenshot');
};
