import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';
import { WarningDialogProvider } from './Components/Loader/WarningDialogContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <WarningDialogProvider>
    <Router>
      <App />
    </Router>
  </WarningDialogProvider>
);

