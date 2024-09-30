import React, { useState } from 'react';

interface ModalProps {
  closeModal: () => void;
  insertResponse: (response: string) => void;
}

const Modal: React.FC<ModalProps> = ({ closeModal, insertResponse }) => {
  const [response, setResponse] = useState<string>('');
  const staticResponse = `Thank you for the opportunity! If you have any more questions or if there's anything else I can help you with, feel free to ask.`;

  // Handles generating the dummy response
  const handleGenerateResponse = () => {
    setResponse(staticResponse);
  };

  // Handles inserting the generated response into the input field
  const handleInsertResponse = () => {
    insertResponse(response);
    closeModal(); // Close the modal after insertion
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-gray-800 bg-opacity-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-96">
        <h2 className="text-xl font-semibold mb-4">Generate a response</h2>
        <textarea
          value={response}
          readOnly
          placeholder="Your prompt"
          className="w-full h-24 p-2 border rounded mb-4 resize-none"
        />
        <div className="flex justify-between">
          <button
            onClick={handleGenerateResponse}
            className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700"
          >
            Generate
          </button>
          <button
            onClick={handleInsertResponse}
            className="bg-green-600 text-white py-2 px-4 rounded hover:bg-green-700"
          >
            Insert
          </button>
          <button
            className="bg-gray-300 text-gray-700 py-2 px-4 rounded cursor-not-allowed"
            disabled
          >
            Regenerate
          </button>
        </div>
        <button
          onClick={closeModal}
          className="mt-4 text-red-600 hover:text-red-800"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default Modal;
