/**
 * @file content 脚本
 */
import emitter from './utils/chrome-emitter';

import { getContent, loadJs, createFixedContainer } from './utils';
import screenshot from './utils/screenshot';

emitter.config('removeListenerWhenTabHidden', false);

const CONTAINER_ID = '__emitter_content_id__';

const $container = createFixedContainer(CONTAINER_ID, '由 content 插入页面');
$container.onclick = () => {
  emitter.emit('content-to-injected', 'hello i am content');
  emitter.emit('content-to-options', 'hello i am content');
  emitter.emit('content-to-background', 'hello i am content');
}

document.body.onload = () => {
  document.body.appendChild($container);
}

loadJs(chrome.extension.getURL("/injected.js"))
  .then(() => {
    console.log('[content]', 'inserted loaded');
  });

function updateContainer(content) {
  const $container = document.querySelector(`#${CONTAINER_ID}`);
  $container.innerText = content;
}

emitter.on('popup-to-content', (msg) => {
  const content = getContent(msg);
  updateContainer(content);
  console.log('[content] from popup', content);
});
emitter.on('options-to-content', (msg) => {
  const content = getContent(msg);
  updateContainer(content);
  console.log('[content] from options', content);
});
emitter.on('background-to-content', (msg) => {
  const content = getContent(msg);
  updateContainer(content);
  console.log('[content] from background', content);
});
emitter.on('injected-to-content', (msg) => {
  const content = getContent(msg);
  updateContainer(content);
  console.log('[content] from inserted', content);
});

emitter.on('startScreenshot', () => {
  console.log('start screenshot');
  screenshot((canvas, canvasData) => {
    console.log(canvasData.size, canvasData.table, canvasData.screenshots);
    const url = canvas.toDataURL('image/png');
    emitter.emit('openNewTab', url);
  });
});
