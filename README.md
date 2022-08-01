# Video No Paused

a browser extension for video playback

# DOCUMENT

[chrome 插件开发文档](https://developer.chrome.com/docs/extensions/)

[360 插件开发文档](https://open.chrome.360.cn/extension_dev/overview.html)

# Note

1. 360 浏览器使用的是 chrome 的 manifest.json 文件为 version2 的格式，而 chrome 插件开发文档使用的是 version3 的格式。

2. 360 文件中的 `background.scripts` 属性是一个数组，而 chrome 插件开发文档中的 `background.scripts` 属性是一个字符串。

3. 360 permissions 中针对 host 需要配置每个页面的权限，可以设计为通配，格格式如:

```json
  "permissions": ["tabs", "http://*/*", "https://*/*"]
```
