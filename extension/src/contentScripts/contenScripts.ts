// src/contentScripts/contentScript.ts
import React from 'react';
import ReactDOM from 'react-dom';
import App from '../App'; // Adjust the path if needed

const root = document.createElement('div');
document.body.appendChild(root);

ReactDOM.render(<App />, root);

// Function to inject the AI icon next to the LinkedIn message input field
function injectAIIcon() {
  const messageInputField = document.querySelector('input[aria-label="Write a message…"]'); // LinkedIn message input field selector

  if (messageInputField) {
    const aiIcon = document.createElement('img');
    aiIcon.src = chrome.runtime.getURL('assets/ai-icon.svg'); // Path to the AI icon
    aiIcon.alt = "AI Reply";
    aiIcon.id = "ai-reply-icon";
    aiIcon.className = "fixed bottom-2 right-4 w-8 h-8 cursor-pointer hidden"; // Start hidden

    // Append the icon to the message input container
    messageInputField.parentNode?.appendChild(aiIcon);

    // Add event listener to show modal when the icon is clicked
    aiIcon.addEventListener('click', showModal);
  }

  // Show the AI icon when the message input field gains focus
  messageInputField?.addEventListener('focus', () => {
    const aiIcon = document.getElementById('ai-reply-icon');
    aiIcon?.classList.remove('hidden'); // Remove 'hidden' class to make it visible
  });

  // Hide the AI icon when the message input field loses focus
  messageInputField?.addEventListener('blur', () => {
    const aiIcon = document.getElementById('ai-reply-icon');
    aiIcon?.classList.add('hidden'); // Add 'hidden' class to hide it
  });
}

// Function to show the AI modal when the AI icon is clicked
function showModal() {
  const existingModal = document.getElementById('ai-reply-modal');
  if (existingModal) return; // Prevent multiple modals from being added

  const modal = document.createElement('div');
  modal.id = 'ai-reply-modal';
  modal.className = 'fixed inset-0 flex items-center justify-center bg-gray-600 bg-opacity-50';

  modal.innerHTML = `
    <div class="bg-white p-6 rounded-md shadow-lg w-96 relative">
      <input type="text" id="ai-reply-input" class="w-full border p-2 rounded-md mb-4" placeholder="Your prompt..." />
      <div class="flex justify-end gap-2">
        <button id="generate-reply" class="bg-blue-500 text-white p-2 rounded-md">Generate</button>
        <button id="close-modal" class="bg-gray-400 text-white p-2 rounded-md">Close</button>
      </div>
    </div>
  `;

  document.body.appendChild(modal);

  // Close modal when clicking outside the modal content
  modal.addEventListener('click', (event) => {
    if (event.target === modal) {
      closeModal();
    }
  });

  // Generate reply button listener
  document.getElementById('generate-reply')?.addEventListener('click', generateReply);

  // Close modal button listener
  document.getElementById('close-modal')?.addEventListener('click', closeModal);
}

// Function to close the modal
function closeModal() {
  const modal = document.getElementById('ai-reply-modal');
  modal?.remove(); // Remove modal from DOM
}

// Function to generate the static AI reply and insert it into the message input field
function generateReply() {
  const messageInputField = document.querySelector('input[aria-label="Write a message…"]') as HTMLInputElement;
  
  const generatedResponse = 'Thank you for the opportunity! If you have any more questions or if there\'s anything else I can help you with, feel free to ask.';
  
  if (messageInputField) {
    messageInputField.value = generatedResponse; // Set the value of the LinkedIn message input field
    closeModal(); // Close the modal after inserting the response
  }
}

// Inject the AI icon when the content script is loaded
injectAIIcon();
