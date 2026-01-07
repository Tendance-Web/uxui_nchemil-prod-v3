import React from 'react';
import { ArrowUpRight, User } from 'lucide-react';

export const Hero: React.FC = () => {
  const scrollToProjects = () => {
    // Informe la navbar qu'un scroll programmatique va avoir lieu
    window.dispatchEvent(new Event('force-navbar-visible'));
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };
  
  const scrollToAbout = () => {
    // Informe la navbar qu'un scroll programmatique va avoir lieu
    window.dispatchEvent(new Event('force-navbar-visible'));
    document.getElementById('experience')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex flex-col justify-center items-center px-6 max-w-[1440px] mx-auto pt-20 text-center">
      
      {/* Centered Content Container */}
      <div className="space-y-10 max-w-5xl w-full flex flex-col items-center">
        
        {/* Label Tech */}
        <div className="flex items-center gap-3 animate-fade-in justify-center">
          <span className="text-primary font-mono text-sm">//</span>
          <span className="tech-label text-primary tracking-widest">PORTFOLIO</span>
        </div>

        {/* Main Title - Massive & Uppercase & Centered */}
        {/* On regroupe "UX UI Designer" sur une ligne pour éviter l'effet "tour" en centré */}
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white leading-[0.95] tracking-tighter uppercase animate-slide-up-fade break-words">
          <span className="block mb-2 md:mb-0">UX UI Designer</span>
          <span className="block text-zinc-500">NoCode & AI</span>
        </h1>
        
        <p className="text-lg md:text-xl text-text-secondary max-w-2xl mx-auto font-light leading-relaxed animate-slide-up-delay">
          Je conçois des écosystèmes digitaux depuis 10 ans. 
          Une approche hybride mêlant design d'interfaces complexes, méthodologies UX, IA et NoCode, enfin un petit peu de code quand même !
        </p>
        
        {/* Tech Buttons - Centered */}
        <div className="flex flex-col sm:flex-row gap-4 pt-6 animate-slide-up-delay justify-center w-full sm:w-auto">
          <button 
            onClick={scrollToProjects}
            className="group relative px-6 py-4 bg-primary text-white text-sm font-mono font-bold uppercase tracking-tight rounded hover:bg-primary-hover transition-all flex items-center justify-center gap-2 w-full sm:w-auto"
          >
            Voir les projets
            <ArrowUpRight size={16} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </button>
          
          <button 
            onClick={scrollToAbout}
            className="group px-6 py-4 bg-transparent border border-zinc-700 text-white text-sm font-mono font-bold uppercase tracking-tight rounded hover:border-primary hover:text-primary transition-all flex items-center justify-center gap-2 w-full sm:w-auto"
          >
            Mon Parcours
            <User size={16} />
          </button>
        </div>

      </div>
    </section>
  );
};