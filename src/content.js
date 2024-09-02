(() => {
  chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message.type === "tab-updated") {
      chrome.runtime.sendMessage({
        type: "popup-updated",
        message: message
      })
    }
  });
})();