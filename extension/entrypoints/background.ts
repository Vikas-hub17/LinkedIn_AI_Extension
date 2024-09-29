chrome.runtime.onInstalled.addListener(() => {
  console.log('LinkedIn AI Reply Extension Installed');
});

// Listen for messages from the popup or content scripts
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.action === 'someAction') {
      // Handle the action
      sendResponse({ result: 'Response from background script' });
  }
});
