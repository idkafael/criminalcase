import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import LandingPage from './pages/LandingPage.jsx';
import CasePageIframe from './pages/CasePageIframe.jsx';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/caso_margot" element={<CasePageIframe slug="caso_margot" />} />
      <Route path="/caso_emma" element={<CasePageIframe slug="caso_emma" />} />
      <Route path="/caso_philipwarren" element={<CasePageIframe slug="caso_philipwarren" />} />

      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}

