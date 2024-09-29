// Function to insert text into the LinkedIn message input field
function insertTextToInputField(text: string) {
  const messageInput = document.querySelector('div.msg-form__contenteditable'); // Adjust selector for LinkedIn
  if (messageInput) {
      messageInput.innerHTML += text; // Insert the generated response
  }
}

// Listen for messages from the popup
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.action === 'insertResponse') {
      insertTextToInputField(request.response);
  }
});
