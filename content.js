chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message.action === 'contentFetched') {
      const pageContent = document.body.innerText;
      sendResponse({ content: pageContent });
    }
  });
  