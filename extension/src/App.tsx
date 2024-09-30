import React, { useState, useEffect } from 'react';
import Modal from '../src/components/Modal';
import AiIcon from '../src/components/AiIcon';

const App: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isIconVisible, setIsIconVisible] = useState(false);

  // Show AI icon when LinkedIn message input is focused
  useEffect(() => {
    const linkedInInput = document.querySelector('div.msg-form__contenteditable');
    if (linkedInInput) {
      linkedInInput.addEventListener('focus', () => setIsIconVisible(true));
      linkedInInput.addEventListener('blur', () => setIsIconVisible(false));
    }
  }, []);

  // Function to open modal
  const openModal = () => setIsModalOpen(true);

  // Function to close modal
  const closeModal = () => setIsModalOpen(false);

  // Function to insert response into LinkedIn input field
  const insertResponseToLinkedIn = (response: string) => {
    const inputField = document.querySelector('div.msg-form__contenteditable');
    if (inputField) {
      inputField.textContent = response;
      inputField.focus(); // Focus the input field after insertion
    }
  };

  return (
    <div>
      {isIconVisible && <AiIcon onClick={openModal} />}
      {isModalOpen && (
        <Modal closeModal={closeModal} insertResponse={insertResponseToLinkedIn} />
      )}
    </div>
  );
};

export default App;
