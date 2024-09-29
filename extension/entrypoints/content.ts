// If you need to export for some reason
export default () => {
  console.log("Content script loaded");

  chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
      if (request.action === 'insertResponse') {
          const messageInput = document.querySelector('div.msg-form__contenteditable'); // Adjust selector for LinkedIn
          if (messageInput) {
              messageInput.innerHTML += request.response; // Insert the generated response
          }
      }
  });
};
