import React from 'react';
import ReactDOM from 'react-dom/client';
import './App.css';
import App from './App.js';

// Find the root element in your HTML
const rootElement = document.getElementById('root');

// Check if the root element exists before trying to render
if (rootElement) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
} else {
  console.error("Could not find root element in index.html");
}
