import React, { useEffect } from 'react';

function App() {

  useEffect(() => {
    chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
      if (message.type === "popup-updated") {
        // click on extension icon, refresh browser on https://www.google.com/
        document.getElementById("helper-header")!.style.display = "none";
      }
    });
  }, []);

  return (
    <h1>Hello, world!</h1>
  );
}

export default App;