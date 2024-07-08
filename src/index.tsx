import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { LayoutProvider } from './contexts';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
        <LayoutProvider>
            <App />
        </LayoutProvider>
    </React.StrictMode>
);
