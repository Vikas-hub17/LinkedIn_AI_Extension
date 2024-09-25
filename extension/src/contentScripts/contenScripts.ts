// Constants for selectors and dummy responses
const MESSAGE_INPUT_SELECTOR = '.msg-form__contenteditable';
const DUMMY_RESPONSE = "Thank you for the opportunity! If you have any more questions or if there's anything else I can help you with, feel free to ask.";

let aiIcon: HTMLButtonElement | null = null;

// Utility function to find the message input field
function getMessageInput(): HTMLElement | null {
  return document.querySelector(MESSAGE_INPUT_SELECTOR);
}

// Function to add AI icon on focus
function showAIIcon() {
  const messageInput = getMessageInput();
  if (!messageInput || aiIcon) return; // If input is missing or icon is already present

  // Create AI icon button
  aiIcon = document.createElement('button');
  aiIcon.innerHTML = `<svg>/* Your AI Icon SVG */</svg>`;
  aiIcon.className = 'absolute right-2 top-2 cursor-pointer';
  
  // Append icon to message input's parent
  messageInput.parentElement?.appendChild(aiIcon);

  // Show modal on AI icon click
  aiIcon.addEventListener('click', showModal);
  
  // Remove icon when input loses focus
  messageInput.addEventListener('blur', hideAIIcon);
}

// Function to remove AI icon on blur
function hideAIIcon() {
  if (aiIcon) {
    aiIcon.remove();
    aiIcon = null;
  }
}

// Function to display modal for AI reply generation
function showModal() {
  const modalContainer = document.createElement('div');
  modalContainer.id = 'ai-reply-modal';
  document.body.appendChild(modalContainer);

  // Render the React modal inside the container
  ReactDOM.render(
    <Modal
      onClose={() => closeModal(modalContainer)}
      onInsert={(text: string) => insertTextIntoMessage(text)}
    />,
    modalContainer
  );

  // Close modal on clicking outside
  window.addEventListener('click', (event) => {
    if (event.target === modalContainer) {
      closeModal(modalContainer);
    }
  });
}

// Function to close the modal and clean up
function closeModal(modalContainer: HTMLDivElement) {
  ReactDOM.unmountComponentAtNode(modalContainer);
  modalContainer.remove();
}

// Function to insert generated text into LinkedIn's message input field
function insertTextIntoMessage(text: string) {
  const messageInput = getMessageInput();
  if (!messageInput) {
    console.error('Message input not found.');
    return;
  }

  try {
    (messageInput as HTMLElement).innerText = text;
  } catch (error) {
    console.error('Error inserting text:', error);
  }
}

// Function to initialize AI icon functionality
function initializeAIIcon() {
  const messageInput = getMessageInput();
  if (messageInput) {
    messageInput.addEventListener('focus', showAIIcon);
  }
}

// Observe DOM changes to attach event listeners to LinkedIn's messaging interface
const observer = new MutationObserver(() => {
  const messageInput = getMessageInput();
  if (messageInput) {
    messageInput.addEventListener('focus', showAIIcon);
  }
});

observer.observe(document.body, { childList: true, subtree: true });
