# chrome-emitter example

## example

安装该插件后，在任意页面刷新，右上角会出现两个白色方块，分别为 `content` 插入的与 `injected` 插入的。
当接收到消息时，白色方块的内容会发生变更，展示由谁发送的消息；点击方块，会向其他脚本发送消息。

### popup 向其他脚本发送消息
打开 `popup`，点击「发送消息到`content`」即可看到效果，其他按钮同理。

1. popup to background
2. popup to options
3. popup to injected
3. popup to content

### content 向其他脚本发送消息
点击页面右上角偏上方的白色方块，会向其他脚本发送消息

1. content to background
2. content to options
3. content to injected

基本不会出现 `to popup` 场景，也做不到，因为点击页面时，`popup` 一定会消失。

### injected 向其他脚本发送消息
点击页面右上角偏下方的白色方块，会向其他脚本发送消息

1. injected to background
2. injected to options
3. injected to injected

### background 向其他脚本发送消息
打开背景页，在控制台输入

```js
emitter.emit('background-to-content', 'hello i am background');
```

页面右上角偏上方的白色方块内容会发生变化。

1. background to content
2. background to injected
3. background to options

### options 向其他脚本发送消息
右键插件图标 -> 选项，打开配置页面，点击对应按钮即可。

1. options to content
2. options to injected
3. options to background