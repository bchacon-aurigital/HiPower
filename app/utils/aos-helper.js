'use client';

import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

export function initAOS(options = {}) {
  useEffect(() => {
    const defaultOptions = {
      duration: 800,
      once: true,
      offset: 100,
      delay: 50,
      disable: window.innerWidth < 768 // Desactivar en móviles para mejorar rendimiento
    };

    AOS.init({
      ...defaultOptions,
      ...options
    });

    // Limpiar AOS en desmontaje del componente
    return () => {
      AOS.refresh();
    };
  }, [options]);
}

// Exportar AOS directamente para casos donde se necesite acceso directo
export { AOS }; 