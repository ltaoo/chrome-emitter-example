import { getContent } from './utils';
import emitter from './utils/chrome-emitter';

console.log("here is background");
window.emitter = emitter;

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

emitter.on("screenshot", () => {
  chrome.tabs.query(
    {
      active: true,
      currentWindow: true,
    },
    (tabs) => {
      const tab = tabs[0];
      chrome.tabs.captureVisibleTab(null, { format: 'png' }, (url) => {
        // console.log('dispatch screenshot complete');
        emitter.emit("screenshotSingleScreenComplete", url);
      });
    }
  );
});

emitter.on("openNewTab", (url) => {
  chrome.tabs.create({
    url,
    active: true,
  });
});
