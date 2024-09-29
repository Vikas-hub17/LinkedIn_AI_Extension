import React, { useState } from 'react';
import Icon from '../src/components/Icon';
import Modal from '../src/components/Modal';

const App: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [generatedResponse, setGeneratedResponse] = useState('');

  // Function to handle opening the modal
  const handleIconClick = () => {
    setIsModalOpen(true);
  };

  // Function to close the modal
  const closeModal = () => {
    setIsModalOpen(false);
    setGeneratedResponse(''); // Reset the generated response when closing
  };

  // Function to handle inserting the generated response
  const handleInsertResponse = (response: string) => {
    const messageInput = document.querySelector('textarea[aria-label="Write a message…"]') as HTMLTextAreaElement;
    if (messageInput) {
      const start = messageInput.selectionStart;
      const end = messageInput.selectionEnd;
      const currentValue = messageInput.value;
      // Insert the response at the current cursor position
      messageInput.value = currentValue.substring(0, start) + response + currentValue.substring(end);
      messageInput.focus(); // Set focus back to the input field
    }
  };

  return (
    <div>
      <Icon onClick={handleIconClick} />
      <Modal
        isOpen={isModalOpen}
        onClose={closeModal}
        onInsert={handleInsertResponse}
      />
    </div>
  );
};

export default App;
