import React, { useState, useEffect } from 'react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  onInsert: (response: string) => void;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, onInsert }) => {
  const [command, setCommand] = useState('');
  const [response, setResponse] = useState(''); // Static response

  // Function to handle the Generate button click
  const handleGenerate = () => {
    // Set the static response when the button is clicked
    setResponse('Thank you for the opportunity! If you have any more questions or if there\'s anything else I can help you with, feel free to ask.');
  };

  // Effect to close the modal when clicked outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const modal = document.getElementById('modal');
      const modalContent = document.getElementById('modal-content');
      if (modal && modalContent && !modalContent.contains(event.target as Node)) {
        onClose();
      }
    };

    // Attach the event listener
    document.addEventListener('mousedown', handleClickOutside);
    
    // Cleanup the event listener
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [onClose]);

  // Function to handle Insert button click
  const handleInsert = () => {
    onInsert(response);
    onClose();
  };

  if (!isOpen) return null; // Don't render anything if modal is not open

  return (
    <div
      id="modal"
      className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50"
    >
      <div
        id="modal-content"
        className="bg-white rounded-lg shadow-lg p-6 w-1/3"
      >
        <h2 className="text-xl font-semibold mb-4">Enter your command</h2>
        <textarea
          className="border rounded p-2 w-full mb-4"
          value={command}
          onChange={(e) => setCommand(e.target.value)}
          placeholder="Your prompt..."
        />
        <button
          onClick={handleGenerate}
          className="bg-blue-500 text-white rounded px-4 py-2 mr-2"
        >
          Generate
        </button>
        <button
          onClick={handleInsert}
          className="bg-green-500 text-white rounded px-4 py-2"
        >
          Insert
        </button>
        {response && (
          <div className="mt-4">
            <h3 className="font-semibold">Generated Response:</h3>
            <p>{response}</p>
          </div>
        )}
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-800"
        >
          &times;
        </button>
      </div>
    </div>
  );
};

export default Modal;
