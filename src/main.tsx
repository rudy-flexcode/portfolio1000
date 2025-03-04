import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import App from './App.tsx';
// Importez votre composant de projet ici
import Projet from '.././public/pages/Projet.tsx'; // Assurez-vous que ce fichier existe
import Contact from '.././public/pages/Contact.tsx';
import About from '.././public/pages/About.tsx';
 // Assurez-vous que ce fichier existe
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/projet" element={<Projet />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);