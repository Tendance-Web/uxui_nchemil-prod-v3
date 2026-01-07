import React, { useEffect, useRef, useState, ReactNode } from 'react';

interface FadeInProps {
  children: ReactNode;
  delay?: number;
  className?: string;
  direction?: 'up' | 'none';
}

export const FadeIn: React.FC<FadeInProps> = ({ 
  children, 
  delay = 0, 
  className = "",
  direction = 'up'
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const domRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        // Déclenche l'animation quand l'élément est visible à 10%
        if (entry.isIntersecting) {
          setIsVisible(true);
          // On arrête d'observer une fois apparu (animation one-shot)
          if (domRef.current) observer.unobserve(domRef.current);
        }
      });
    }, { threshold: 0.1 });

    const currentRef = domRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) observer.unobserve(currentRef);
    };
  }, []);

  const getTransformStyle = () => {
    if (!isVisible && direction === 'up') return 'translate-y-8';
    return 'translate-y-0';
  };

  return (
    <div
      ref={domRef}
      className={`transition-all duration-700 ease-out ${className} ${
        isVisible ? 'opacity-100' : 'opacity-0'
      } ${getTransformStyle()}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};