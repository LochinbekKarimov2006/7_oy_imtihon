import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import './App.css';
import GlobalContext from './context/GlobalContext.jsx';

createRoot(document.getElementById('root')).render(
    <GlobalContext>
      <App />
    </GlobalContext>
);
