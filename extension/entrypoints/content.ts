// content.ts
import { defineContentScript } from 'wxt/sandbox';

// Define the content script functionality
defineContentScript(() => {
    console.log("Content script loaded");

    // Function to show the AI icon when the message input field is focused
    const inputField = document.querySelector('input[aria-label="Message"]');

    if (inputField) {
        inputField.addEventListener('focus', () => {
            // Logic to show the AI icon
            // e.g., show your icon here
        });

        inputField.addEventListener('blur', () => {
            // Logic to hide the AI icon
            // e.g., hide your icon here
        });
    }

    // You can add more functionality as needed, e.g., handling messages
    chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
        // Handle messages from background or popup
        // e.g., process commands
    });
});
