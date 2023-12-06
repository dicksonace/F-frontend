import ReactDOM from 'react-dom/client';
import React from 'react';
import App from './App';
import axios from 'axios';
import './tailwind.css';
import { BrowserRouter } from 'react-router-dom';
import { GlobalContextProvider } from './GlobalContext/GlobalContext';

axios.defaults.baseURL = 'https://api-gilt-one.vercel.app/';
const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
// root.render(
//     <BrowserRouter><GlobalContextProvider></GlobalContextProvider>
//         <App />
//     </BrowserRouter>,
// );

root.render(
    <React.StrictMode>
        <GlobalContextProvider>
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </GlobalContextProvider>
    </React.StrictMode>,
);
