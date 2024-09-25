import React, { useState } from 'react';

// Modal Component for AI Reply Generation
const Modal: React.FC<{ onClose: () => void; onInsert: (text: string) => void }> = ({ onClose, onInsert }) => {
  const [command, setCommand] = useState<string>(''); // Command input from the user
  const [generatedResponse, setGeneratedResponse] = useState<string | null>(null); // Holds the generated response

  // Function to generate a static AI response
  const generateResponse = () => {
    setGeneratedResponse("Thank you for the opportunity! If you have any more questions or if there's anything else I can help you with, feel free to ask.");
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center" onClick={onClose}>
      <div className="bg-white rounded p-6 w-96" onClick={e => e.stopPropagation()}>
        <h2 className="text-xl font-semibold mb-4">Generate AI Reply</h2>
        <input
          type="text"
          className="border p-2 w-full mb-4"
          placeholder="Enter command..."
          value={command}
          onChange={(e) => setCommand(e.target.value)}
        />
        {generatedResponse && (
          <p className="bg-gray-100 p-2 mb-4">{generatedResponse}</p>
        )}
        <div className="flex justify-end space-x-2">
          <button
            className="bg-blue-500 text-white py-2 px-4 rounded"
            onClick={generateResponse}
          >
            Generate
          </button>
          <button className="bg-gray-400 text-white py-2 px-4 rounded">
            Regenerate
          </button>
          <button
            className="bg-green-500 text-white py-2 px-4 rounded"
            onClick={() => onInsert(generatedResponse!)}
          >
            Insert
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
