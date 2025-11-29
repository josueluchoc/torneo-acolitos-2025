import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Inicio } from './pages/Inicio';
import { Bases } from './pages/Bases';
import { Fixture } from './pages/Fixture';
import { Analytics } from '@vercel/analytics/react';
import { HallOfFame } from './pages/HallOfFame';

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/bases" element={<Bases />} />
        <Route path="/fixture" element={<Fixture />} />
        <Route path="/hall-of-fame" element={<HallOfFame />} />
      </Routes>
      <Analytics />
    </BrowserRouter>
    
  );
}

// Helper para scrollear arriba al cambiar de página
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}