import React, { useEffect, createContext, useContext, useState } from 'react';
// @ts-ignore
import Lenis from 'lenis';

const LenisContext = createContext<any>(null);

export const useLenis = () => useContext(LenisContext);

export const SmoothScroll: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [lenis, setLenis] = useState<any>(null);

  useEffect(() => {
    // Initialisation de Lenis avec typage explicite pour l'easing
    const lenisInstance = new Lenis({
      duration: 1.2,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
    });

    setLenis(lenisInstance);

    let rafId: number;

    // Boucle d'animation
    function raf(time: number) {
      lenisInstance.raf(time);
      rafId = requestAnimationFrame(raf);
    }

    rafId = requestAnimationFrame(raf);

    // Nettoyage propre lors du démontage
    return () => {
      cancelAnimationFrame(rafId);
      lenisInstance.destroy();
      setLenis(null);
    };
  }, []);

  return (
    <LenisContext.Provider value={lenis}>
      {children}
    </LenisContext.Provider>
  );
};