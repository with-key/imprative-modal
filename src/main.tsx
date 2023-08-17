import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import { Modal } from './components/Modal.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
    {/* 최상단에서 Modal 등록 */}
    <Modal ref={(node) => Modal.setRef(node)} />
  </React.StrictMode>
);
