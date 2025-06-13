import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import { GalleryMainPage } from './pages/Gallery/GalleryMainPage';

const App = () => (
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<GalleryMainPage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);

const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error("Failed to find the root element. Ensure there is a <div id='root'></div> in your HTML.");
}

createRoot(rootElement).render(<App />);
