const btn = document.querySelector("#aj-btn");
const input = document.querySelector("#userinput");

// click buttin
btn.addEventListener("click", function(e) {
  handleMessageEvent();
});

// click Enter
input.addEventListener("keydown", e => {
  if (e.keyCode === 13) {
    handleMessageEvent();
  }
});

function handleMessageEvent() {
  let text = input.value;
  if (text) {
    const cfg = {
      active: true,
      currentWindow: true,
    };
    chrome.tabs.query(cfg, tabs => {
      chrome.tabs.sendMessage(tabs[0].id, {
        data: text,
      });
    });
  }
}
