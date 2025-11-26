import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Inicio } from './pages/Inicio';
import { Bases } from './pages/Bases';
import { Fixture } from './pages/Fixture';

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/bases" element={<Bases />} />
        <Route path="/fixture" element={<Fixture />} />
      </Routes>
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