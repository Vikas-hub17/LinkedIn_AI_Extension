import React, { useState, useEffect } from 'react';

// Props type definition if needed
type IconProps = {
  onClick: () => void;
};

const Icon: React.FC<IconProps> = ({ onClick }) => {
  const [visible, setVisible] = useState(false);

  // Function to show the icon when the input is focused
  const handleFocus = () => {
    setVisible(true);
  };

  // Function to hide the icon when the input is blurred
  const handleBlur = () => {
    setVisible(false);
  };

  // Hook to attach event listeners to the LinkedIn message input field
  useEffect(() => {
    const messageInput = document.querySelector('textarea[aria-label="Write a message…"]') as HTMLTextAreaElement;

    if (messageInput) {
      messageInput.addEventListener('focus', handleFocus);
      messageInput.addEventListener('blur', handleBlur);
    }

    // Clean up event listeners when component unmounts
    return () => {
      if (messageInput) {
        messageInput.removeEventListener('focus', handleFocus);
        messageInput.removeEventListener('blur', handleBlur);
      }
    };
  }, []);

  // Only render the icon if it's visible
  if (!visible) {
    return null;
  }

  return (
    <div
      className="fixed right-4 bottom-4 z-50 cursor-pointer"
      onClick={onClick}
      title="AI Reply"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        className="w-10 h-10 text-blue-500 hover:text-blue-700"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M12 2C13.5913 2 15.1174 2.63214 16.2426 3.75736C17.3679 4.88258 18 6.4087 18 8V10C18 11.5913 17.3679 13.1174 16.2426 14.2426C15.1174 15.3679 13.5913 16 12 16C10.4087 16 8.88258 15.3679 7.75736 14.2426C6.63214 13.1174 6 11.5913 6 10V8C6 6.4087 6.63214 4.88258 7.75736 3.75736C8.88258 2.63214 10.4087 2 12 2Z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M5 10V12C5 14.0409 5.77896 16.0114 7.17157 17.4142C8.56418 18.8167 10.5384 19.5858 12.5858 19.5858H12.586C14.6332 19.5858 16.6075 18.8167 18 17.4142C19.3926 16.0114 20.1716 14.0409 20.1716 12V10"
        />
      </svg>
    </div>
  );
};

export default Icon;
