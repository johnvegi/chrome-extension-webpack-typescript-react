chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {
  if (tab.status === "complete" && tab.url && tab.url.startsWith("https://www.google.com/")) {
    chrome.tabs.sendMessage(tabId, {
        type: "tab-updated",
        url: tab.url
    });
  }
});