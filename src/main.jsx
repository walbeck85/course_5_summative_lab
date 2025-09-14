// Entry point for the React application. This file sets up the root React component
// and wraps it in BrowserRouter to enable client-side routing with React Router.

// Import the core React library
import React from 'react';
// Import ReactDOM for rendering the app
import ReactDOM from 'react-dom/client';
// Import BrowserRouter to enable routing via React Router
import { BrowserRouter } from 'react-router-dom';
// Import the main App component containing the application structure
import App from './App';
// Import global CSS styles
import './index.css';

// Render the App component inside the root DOM element, wrapping it with BrowserRouter
// so that the entire app can use client-side routing.
ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);