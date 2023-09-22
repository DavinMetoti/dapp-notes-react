import React from 'react';
import './assets/style/style.css'
import ReactDOM from 'react-dom/client';
import NotesApps from './components/NotesApp';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <NotesApps />
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example, reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

