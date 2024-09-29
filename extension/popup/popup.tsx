document.addEventListener('DOMContentLoaded', () => {
    const generateButton = document.getElementById('generate-button') as HTMLButtonElement;
    const insertButton = document.getElementById('insert-button') as HTMLButtonElement;
    const userInput = document.getElementById('user-input') as HTMLTextAreaElement;
    const responseOutput = document.getElementById('response-output') as HTMLParagraphElement;

    generateButton.addEventListener('click', () => {
        // Dummy response logic
        const dummyResponse = "Thank you for the opportunity! If you have any more questions or if there's anything else I can help you with, feel free to ask.";
        responseOutput.textContent = dummyResponse;
    });

    insertButton.addEventListener('click', () => {
        const responseText = responseOutput.textContent;
        if (responseText) {
            // Send the response back to the content script to insert into the LinkedIn message input field
            chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
                chrome.tabs.sendMessage(tabs[0].id!, { action: 'insertResponse', response: responseText });
            });
        }
    });
});
