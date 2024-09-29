import React from 'react';
import ReactDOM from 'react-dom';
import App from './App'; // Import the main App component
import './contentstyles.css'; // Import your CSS styles

// Create a root element to mount your React app
const rootElement = document.createElement('div');
rootElement.id = 'react-root'; // Optional: Assign an ID for reference
document.body.appendChild(rootElement); // Append the root element to the body

// Render the App component inside the root element
ReactDOM.render(<App />, rootElement);
