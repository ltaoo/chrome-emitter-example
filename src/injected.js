import emitter from "./utils/chrome-emitter";
import { getContent, createFixedContainer } from "./utils";

console.log("here is inserted");

const CONTAINER_ID = "__emitter_injected_id__";

const $container = createFixedContainer(
  CONTAINER_ID,
  "由 injected 插入页面",
  "top: 80px;"
);
$container.onclick = () => {
  emitter.emit('injected-to-content', 'hello i am injected');
  emitter.emit('injected-to-options', 'hello i am injected');
  emitter.emit('injected-to-background', 'hello i am injected');
}

document.body.onload = () => {
  document.body.appendChild($container);
};

function updateContainer(content) {
  const $container = document.querySelector(`#${CONTAINER_ID}`);
  $container.innerText = content;
}

emitter.on('popup-to-injected', (msg, str, num) => {
  const content = getContent(msg);
  updateContainer(content);
  console.log('[injected] from popup', content, str, num);
});
emitter.on('options-to-injected', (msg) => {
  const content = getContent(msg);
  updateContainer(content);
  console.log('[injected] from options', content);
});
emitter.on('background-to-injected', (msg) => {
  const content = getContent(msg);
  updateContainer(content);
  console.log('[injected] from background', content);
});
emitter.on('content-to-injected', (msg) => {
  const content = getContent(msg);
  updateContainer(content);
  console.log('[injected] from content', content);
});
