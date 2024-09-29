// Basic background script for your Chrome extension
chrome.runtime.onInstalled.addListener(() => {
    console.log('LinkedIn AI Reply Extension installed successfully!');

    // Set up default state or options if necessary
    chrome.storage.sync.set({ replyGenerated: false }, () => {
        console.log('Default state initialized.');
    });
});

// Listening for messages from content scripts
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    console.log('Message received in background script:', message);

    // Here, you can handle specific actions if needed.
    // For example, you can add API call placeholders (if scope expands in future).

    if (message.type === 'GENERATE_REPLY') {
        // This could be a placeholder for future API calls for generating replies
        const dummyResponse = 'Thank you for the opportunity! Feel free to reach out if you need anything else.';
        
        // Send the response back to the content script
        sendResponse({ response: dummyResponse });
    }

    // If we want to send an asynchronous response, return true
    return true;
});

// Example of detecting tab changes (optional, can be removed if not needed)
chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
    if (changeInfo.status === 'complete' && tab.url?.includes('linkedin.com')) {
        console.log('LinkedIn tab updated. Content scripts are active.');
    }
});
