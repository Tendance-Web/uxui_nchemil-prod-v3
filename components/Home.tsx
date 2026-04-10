import React, { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Hero } from './Hero';
import { BentoGrid } from './BentoGrid';
import { TechStack } from './TechStack';
import { Skills } from './Skills';
import { Experience } from './Experience';
import { Education } from './Education';
import { FadeIn } from './FadeIn';
import { ScrollToTop } from './ScrollToTop';

export const Home: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();

  // Gestion du scroll lors du retour depuis une page projet
  useEffect(() => {
    if (location.state && location.state.scrollTo) {
      const element = document.getElementById(location.state.scrollTo);
      if (element) {
        // Positionnement instantané (sans animation) pour éviter l'effet de défilement visible
        const offset = 100; // Offset pour la navbar fixe
        const elementPosition = element.getBoundingClientRect().top + window.scrollY;
        window.scrollTo({ top: elementPosition - offset, behavior: 'instant' });
      }
      // Nettoyer le state pour éviter de re-scroller au refresh
      window.history.replaceState({}, document.title);
    } else {
      // Scroll en haut par défaut si on arrive normalement
      window.scrollTo(0, 0);
    }
  }, [location]);

  return (
    <div className="overflow-hidden">
      <FadeIn>
        <Hero />
      </FadeIn>

      <FadeIn delay={100}>
        <BentoGrid onOpenProject={(id) => navigate(`/project/${id}`)} />
      </FadeIn>

      <FadeIn delay={100}>
        <TechStack />
      </FadeIn>

      <FadeIn delay={100}>
        <Skills />
      </FadeIn>

      <FadeIn delay={100}>
        <Experience />
      </FadeIn>

      <FadeIn delay={100}>
        <Education />
      </FadeIn>

      <ScrollToTop />
    </div>
  );
};