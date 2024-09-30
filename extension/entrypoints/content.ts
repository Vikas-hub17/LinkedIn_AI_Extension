import React from 'react';
import { createRoot } from 'react-dom/client';
import App from '../src/App';

// Add a div for rendering the extension UI
const container = document.createElement('div');
container.id = 'linkedin-ai-extension';
document.body.appendChild(container);

// Render the React app inside the container
const root = createRoot(container);
root.render(<App />);
