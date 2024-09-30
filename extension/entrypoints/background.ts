// .wxt/entrypoints/background.ts
import { defineBackground } from 'wxt/sandbox';

const backgroundScript = defineBackground(() => {
  chrome.runtime.onInstalled.addListener(() => {
    console.log('LinkedIn AI Extension installed!');
  });

  // Listener for messages (if needed in the future)
  chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message.type === 'LOG_MESSAGE') {
      console.log(message.payload);
      sendResponse({ status: 'Logged' });
    }
  });
});

export default backgroundScript;
