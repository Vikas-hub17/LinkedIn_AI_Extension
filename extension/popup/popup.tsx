import React from 'react';
import { createRoot } from 'react-dom/client';

const Popup = () => {
  return (
    <div>
      <h1>LinkedIn AI Extension Settings</h1>
      <p>Manage your settings here.</p>
    </div>
  );
};

const root = createRoot(document.getElementById('popup') as HTMLElement);
root.render(<Popup />);
