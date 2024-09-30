// .wxt/entrypoints/content.ts
import { defineContentScript } from 'wxt/sandbox';

// Define the content script
const contentScript = defineContentScript({
  matches: ['https://www.linkedin.com/*'], // Specify the URL pattern where this script should run
  js: () => {
    console.log("Content script loaded");

    // Add listener for messages from other parts of the extension
    chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
      console.log("Message received:", request);
      sendResponse({ status: "Message received" });
    });
  },
});

// Export the content script as the default export
export default contentScript;
