import React, { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Hero } from './Hero';
import { BentoGrid } from './BentoGrid';
import { TechStack } from './TechStack';
import { Skills } from './Skills';
import { Experience } from './Experience';
import { FadeIn } from './FadeIn';

export const Home: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();

  // Gestion du scroll lors du retour depuis une page projet
  useEffect(() => {
    if (location.state && location.state.scrollTo) {
      const element = document.getElementById(location.state.scrollTo);
      if (element) {
        // Petit délai pour s'assurer que le DOM est prêt
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
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
    </div>
  );
};