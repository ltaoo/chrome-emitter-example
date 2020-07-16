export function getContent(msg) {
  const content = `${new Date().toLocaleTimeString()} - ${msg}`;
  return content;
}

export function loadJs(src) {
  return new Promise((resolve, reject) => {
    const script = document.createElement("script");
    script.src = src;

    document.documentElement.appendChild(script);

    script.onload = resolve;
    script.onerror = reject;
  });
}

export function createFixedContainer(id, content, styles = '') {
  const $container = document.createElement("div");
  $container.style =
    "z-index: 999; position: fixed; right: 20px; top: 20px; padding: 4px 10px; background-color: #fff;" + styles;
  $container.innerHTML = `<div id="${id}" style="display: flex; align-items: center; text-align: center; min-width: 180px; height: 30px;">
  ${content}
</div>
`;
  return $container;
}
