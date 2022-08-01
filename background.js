chrome.browserAction.onClicked.addListener((tab) => {
  chrome.tabs.executeScript({
    file: "no-paused.js",
  });
});
