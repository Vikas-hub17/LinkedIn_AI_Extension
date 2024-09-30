// .wxt/entrypoints/background.ts
import { defineBackground } from 'wxt/sandbox';

const backgroundScript = defineBackground(() => {
  console.log('LinkedIn AI Extension installed!');

  // Listener for messages (if needed in the future)
  chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message.type === 'LOG_MESSAGE') {
      console.log(message.payload);
      sendResponse({ status: 'Logged' });
    }
  });
});

// Export the background script as the default export
export default backgroundScript;
