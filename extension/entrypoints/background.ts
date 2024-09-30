// background.ts
import { defineBackground } from 'wxt/sandbox';

// Define the background script functionality
defineBackground(() => {
    console.log("Background script loaded");

    // Example: Handle messages from content scripts or popup
    chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
        if (request.action === 'requestResponse') {
            // Send a response back to the content script or popup
            sendResponse({ response: "Thank you for the opportunity! If you have any more questions or if there's anything else I can help you with, feel free to ask." });
        }
    });
});
