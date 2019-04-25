console.log("chrome 插件");

if (window.location.href.includes(".nicotv.")) {
  console.log("对指定网站进行操作");
}
chrome.runtime.onMessage.addListener(gotMessage);
function gotMessage(msg, sender, sendResponse) {
  console.log(msg.data);
  alert(msg.data)
}
