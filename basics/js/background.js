console.log("background running");
console.log(chrome);

chrome.browserAction.onClicked.addListener(buttonClicked);

function buttonClicked(tab) {
  chrome.tabs.sendMessage(tab.id, {
    data: "hello.",
  });
}
