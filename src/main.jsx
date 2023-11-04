import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App'; // Import the App component from the components folder
import './styles/App.css'; // Assuming you want to apply global styles from App.css

// Assuming your index.html has a div with id="root" for your React app
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
