import React, { useRef } from 'react';
import { ArrowLeft, ArrowRight, ArrowUpRight, Clock } from 'lucide-react';
import { PROJECTS_DATA } from '../constants';

interface BentoGridProps {
  onOpenProject: (id: string) => void;
}

export const BentoGrid: React.FC<BentoGridProps> = ({ onOpenProject }) => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      // Calcul de la distance de défilement en fonction de la taille de l'écran
      const scrollAmount = window.innerWidth > 768 ? 524 : window.innerWidth * 0.85; 
      scrollContainerRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="projects" className="py-24 bg-surface/70 overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-6">
        
        {/* Header comme sur la capture Warp */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-3xl lg:text-4xl font-bold text-text-muted mb-3 flex items-center gap-3 tracking-tight">
              Réalisations
            </h2>
            <p className="text-2xl md:text-3xl lg:text-4xl text-text-bronze font-medium leading-tight tracking-tight">
              Projets sélectionnés & études de cas
            </p>
          </div>
          <div className="flex items-center gap-3">
            <button 
              onClick={() => scroll('left')} 
              className="p-3 bg-surface border border-border rounded hover:bg-border transition-colors text-text-secondary disabled:opacity-50"
              aria-label="Projets précédents"
            >
              <ArrowLeft size={20} />
            </button>
            <button 
              onClick={() => scroll('right')} 
              className="p-3 bg-surface border border-border rounded hover:bg-border transition-colors text-text-secondary disabled:opacity-50"
              aria-label="Projets suivants"
            >
              <ArrowRight size={20} />
            </button>
          </div>
        </div>

        {/* Carousel des projets */}
        <div 
          ref={scrollContainerRef}
          className="flex overflow-x-auto snap-x snap-mandatory gap-6 pb-8 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] scroll-smooth"
        >
          {PROJECTS_DATA.map((project, index) => {
            const isUpcoming = project.isUpcoming;
            const hasDetails = !!project.fullDetails;
            const canOpen = hasDetails && !isUpcoming;
            const isPortailRH = project.id === 'portail-rh';

            return (
              <div
                key={project.id}
                onClick={() => canOpen && onOpenProject(project.id)}
                className={`
                  min-w-[85vw] md:min-w-[450px] lg:min-w-[500px] snap-start flex flex-col group
                  ${isUpcoming ? 'cursor-not-allowed opacity-90' : canOpen ? 'cursor-pointer' : 'cursor-default'}
                `}
              >
                {/* Image Container */}
                <div className="relative w-full aspect-video md:aspect-[4/3] rounded-xl overflow-hidden mb-6 border border-border/50 bg-surface shadow-sm">
                  {/* Upcoming Badge */}
                  {isUpcoming && (
                    <div className="absolute top-4 left-4 z-20 flex items-center gap-2 px-3 py-1.5 bg-surface border border-border backdrop-blur-md text-xs font-mono font-bold text-text-secondary uppercase tracking-tight rounded">
                      <Clock size={14} />
                      PROJET À VENIR
                    </div>
                  )}

                  {/* Client Badge */}
                  {!isUpcoming && (
                    <div className="absolute top-4 left-4 z-20 max-w-[80%]">
                      <span className="tech-label text-text-bronze bg-surface/80 backdrop-blur-md px-3 py-1.5 rounded-md shadow-sm border border-border inline-flex items-center justify-center text-[10px] md:text-xs">
                        {project.client}
                      </span>
                    </div>
                  )}

                  {/* Bouton d'ouverture visible au survol si pas à venir */}
                  {canOpen && (
                    <div className="absolute top-4 right-4 z-20 w-10 h-10 bg-surface/80 backdrop-blur-md border border-border text-text-bronze flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0 rounded shadow-lg">
                      <ArrowUpRight size={20} />
                    </div>
                  )}

                  <img
                    src={project.image}
                    alt={project.title}
                    className={`h-full object-cover transition-transform duration-700 
                      ${isPortailRH ? 'w-[105%] max-w-none object-left-top' : 'w-full'}
                      ${isUpcoming ? 'grayscale opacity-50 blur-[2px]' : 'group-hover:scale-105 opacity-90 group-hover:opacity-100'}
                    `}
                  />
                  <div className="absolute inset-0 ring-1 ring-inset ring-black/10 rounded-xl pointer-events-none" />
                </div>

                {/* Text Content */}
                <div className="px-1 transform transition-transform duration-300 group-hover:translate-x-1">
                  <h3 className="text-xl md:text-2xl font-bold mb-2 tracking-tight text-text-bronze">
                    {project.title}
                  </h3>
                  <p className="text-sm md:text-base text-text-secondary leading-relaxed mb-4 line-clamp-2 md:line-clamp-none">
                    {project.description}
                  </p>
                  
                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {project.tags.slice(0, 3).map(tag => (
                      <span key={tag} className="text-xs font-mono uppercase tracking-tight px-2 py-1 bg-surface border border-border text-text-muted rounded">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
