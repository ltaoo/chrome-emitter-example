import emitter from "./utils/chrome-emitter";
import { getContent } from "./utils";

console.log("here is options");

document.body.onload = () => {
  const toBackgroundBtn = document.getElementById("toBackground");
  const toContentBtn = document.getElementById("toContent");
  const toInsertedBtn = document.getElementById("toInjected");

  const message = "hello i am options";
  toBackgroundBtn.onclick = () => {
    emitter.emit("options-to-background", message);
  };
  toContentBtn.onclick = () => {
    emitter.emit("options-to-content", message);
  };
  toInsertedBtn.onclick = () => {
    emitter.emit("options-to-injected", message);
  };
};

emitter.on("background-to-options", (msg) => {
  const fromPopupText = document.getElementById("fromPopup");
  const content = getContent(msg);
  console.log('[options] from popup', content);
  fromPopupText.innerText = content;
});
emitter.on("background-to-options", (msg) => {
  const fromBackgroundText = document.getElementById("fromBackground");
  const content = getContent(msg);
  console.log('[options] from background', content);
  fromBackgroundText.innerText = content;
});
emitter.on("content-to-options", (msg) => {
  const fromContentText = document.getElementById("fromContent");
  const content = getContent(msg);
  console.log('[options] from content', content);
  fromContentText.innerText = content;
});
emitter.on("injected-to-options", (msg) => {
  const fromInjectedText = document.getElementById("fromInjected");
  const content = getContent(msg);
  console.log('[options] from injected', content);
  fromInjectedText.innerText = content;
});
