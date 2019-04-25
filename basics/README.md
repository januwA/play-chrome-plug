https://www.youtube.com/watch?v=9Tl3OmwrSaM


## manifest.json
对所有站点都有效:

```json
{
  "manifest_version": 2,
  "name": "Ajanuw Test",
  "version": "0.01",
  "content_scripts": [
    {
      "matches": ["<all_urls>"],
      "js": ["content.js"]
    }
  ]
}
```

针对指定站点:

```json
{
  "manifest_version": 2,
  "name": "Ajanuw Test",
  "version": "0.01",
  "content_scripts": [
    {
      "matches": [
        "http://www.nicotv.me/*",
        "https://www.nicotv.me/*"
      ],
      "js": ["content.js"]
    }
  ]
}
```

## 设置tab图标
注意图片尺寸

```json
"browser_action": {
  "default_icon": "images/ct.png"
}
```


## 弹出窗口
```json
"browser_action": {
  "default_title": "Google Mail",
  "default_popup": "popup.html"
}
```