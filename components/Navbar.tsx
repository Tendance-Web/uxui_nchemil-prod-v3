import React, { useState, useEffect, useRef } from 'react';
import { Menu, X, Download } from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom';

export const Navbar: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const isHome = location.pathname === '/';
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const cvUrl = "https://drive.google.com/file/d/17JvmawCyu0SRl5_93Azj_QbT8HfMrJQz/view?usp=sharing";

  // État pour la visibilité de la navbar au scroll
  const [isVisible, setIsVisible] = useState(true);
  const lastScrollY = useRef(0);

  // Ref pour ignorer le scroll lors d'une navigation programmatique
  const isAutoScrolling = useRef(false);

  // Réinitialiser la visibilité lors d'un changement de route
  useEffect(() => {
    setIsVisible(true);
    isAutoScrolling.current = true;
    const timer = setTimeout(() => {
      isAutoScrolling.current = false;
    }, 2500); // Délai augmenté pour couvrir l'animation de scroll sur mobile
    return () => clearTimeout(timer);
  }, [location]);

  // Écouter les demandes externes pour afficher/cacher la navbar
  useEffect(() => {
    const handleForceVisible = () => {
      setIsVisible(true);
      isAutoScrolling.current = true;
      setTimeout(() => {
        isAutoScrolling.current = false;
      }, 2500);
    };

    const handleForceHide = () => setIsVisible(false);

    window.addEventListener('force-navbar-visible', handleForceVisible);
    window.addEventListener('force-navbar-hide', handleForceHide);
    window.addEventListener('force-navbar-show', handleForceVisible);

    return () => {
      window.removeEventListener('force-navbar-visible', handleForceVisible);
      window.removeEventListener('force-navbar-hide', handleForceHide);
      window.removeEventListener('force-navbar-show', handleForceVisible);
    };
  }, []);

  // Gestion du scroll pour cacher/montrer la navbar
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Si un scroll automatique est en cours, on ne cache pas la navbar
      if (isAutoScrolling.current) {
        lastScrollY.current = currentScrollY;
        return;
      }

      // Si on est tout en haut, on affiche toujours
      if (currentScrollY < 10) {
        setIsVisible(true);
      } else if (currentScrollY > lastScrollY.current && currentScrollY > 50) {
        // Si on descend et qu'on a dépassé 50px, on cache
        setIsVisible(false);
      } else if (currentScrollY < lastScrollY.current) {
        // Si on remonte, on affiche
        setIsVisible(true);
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen]);

  const handleNavigation = (sectionId: string) => {
    setIsMobileMenuOpen(false);

    // Forcer l'affichage et bloquer le masquage temporairement
    setIsVisible(true);
    isAutoScrolling.current = true;
    setTimeout(() => {
      isAutoScrolling.current = false;
    }, 2500); // Délai augmenté pour mobile

    if (isHome) {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      navigate('/', { state: { scrollTo: sectionId } });
    }
  };

  const getLabel = (item: string) => {
    switch (item) {
      case 'projects': return 'Projets';
      case 'experience': return 'Expérience';
      case 'stack': return 'Compétences';
      default: return item;
    }
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 h-20 border-b border-border bg-surface/60  transition-transform duration-300 ease-in-out backdrop-blur-md ${isVisible ? 'translate-y-0' : '-translate-y-full'
          }`}
      >
        <div className="max-w-[1440px] mx-auto px-6 h-full flex items-center justify-between">

          {/* Logo */}
          <button
            onClick={() => handleNavigation('root')}
            className="text-white font-bold font-mono text-base tracking-tight uppercase hover:text-primary transition-colors z-50"
          >
            Nassim Chemil
          </button>

          {/* Desktop Menu - Font Mono - Text SM (14px) */}
          <div className="hidden md:flex items-center gap-10">
            {['projects', 'stack', 'skills', 'experience'].map((item) => (
              <button
                key={item}
                onClick={() => handleNavigation(item)}
                className="font-bold font-mono text-sm text-text-secondary hover:text-primary uppercase tracking-tight transition-colors"
              >
                {getLabel(item)}
              </button>
            ))}

            <a
              href={cvUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-primary/10 border border-primary/30 text-primary font-bold font-mono text-xs uppercase tracking-tight hover:bg-primary hover:text-white transition-all rounded flex items-center gap-2"
            >
              CV
              <Download size={14} />
            </a>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(true)}
              className="text-white p-2 hover:bg-white/5 transition-colors rounded"
              aria-label="Ouvrir le menu"
            >
              <Menu size={24} />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 bg-surface z-[100] flex flex-col md:hidden">
          <div className="flex items-center justify-between px-6 h-20 border-b border-white/5">
            <button
              onClick={() => {
                setIsMobileMenuOpen(false);
                handleNavigation('root');
              }}
              className="text-white font-bold font-mono text-base tracking-tight uppercase"
            >
              Nassim Chemil
            </button>

            <button
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-white p-2 hover:text-primary transition-colors rounded"
              aria-label="Fermer le menu"
            >
              <X size={24} />
            </button>
          </div>

          <div className="flex flex-col px-6 space-y-8 mt-12 animate-fade-in">
            {['projects', 'stack', 'skills', 'experience'].map((item) => (
              <button
                key={item}
                onClick={() => handleNavigation(item)}
                className="text-left text-2xl font-bold font-mono text-white uppercase tracking-tighter hover:text-primary transition-colors"
              >
                {getLabel(item)}
              </button>
            ))}

            <a
              href={cvUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-4 bg-primary text-white font-bold font-mono text-lg uppercase tracking-tight text-center rounded flex items-center justify-center gap-3 mt-4"
            >
              Télécharger mon CV
              <Download size={20} />
            </a>
          </div>
        </div>
      )}
    </>
  );
};