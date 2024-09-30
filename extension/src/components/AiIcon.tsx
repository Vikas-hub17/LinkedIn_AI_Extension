import React from 'react';

interface AiIconProps {
  onClick: () => void;
}

const AiIcon: React.FC<AiIconProps> = ({ onClick }) => {
  return (
    <div className="fixed bottom-5 right-5 cursor-pointer">
      <div
        className="bg-blue-600 text-white p-3 rounded-full shadow-lg"
        onClick={onClick}
      >
        <span role="img" aria-label="AI">
          🤖
        </span>
      </div>
    </div>
  );
};

export default AiIcon;
