import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

const Gallery = () => <></>;

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Gallery />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
