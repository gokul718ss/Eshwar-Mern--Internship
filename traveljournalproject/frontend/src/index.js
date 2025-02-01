import React from 'react';
import ReactDOM from 'react-dom/client';  // Import from 'react-dom/client' for React 18+
import App from './App';

// Create a root and render the app using createRoot
const root = ReactDOM.createRoot(document.getElementById('root')); // Find the root div
root.render(<App />);  // Render the App component inside root
