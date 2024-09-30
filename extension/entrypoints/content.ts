import React from 'react';
import { createRoot } from 'react-dom/client';
import App from '../src/App'; // Ensure this path is correct

// Create a container for the extension UI
const container = document.createElement('div');
container.id = 'linkedin-ai-extension';
document.body.appendChild(container);

// Render the React app inside the container
const root = createRoot(container); // React 18 API for rendering
root.render(typeof App); 
