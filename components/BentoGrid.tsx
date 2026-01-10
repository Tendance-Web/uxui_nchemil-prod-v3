
import React from 'react';
import { ArrowUpRight, Clock } from 'lucide-react';
import { PROJECTS_DATA } from '../constants';

interface BentoGridProps {
  onOpenProject: (id: string) => void;
}

export const BentoGrid: React.FC<BentoGridProps> = ({ onOpenProject }) => {
  return (
    <section id="projects" className="py-24 px-6 max-w-[1440px] mx-auto">
      <div className="mb-16">
        <span className="text-primary font-mono text-sm mr-2">//</span>
        <span className="tech-label text-primary">Réalisations</span>
        <h2 className="text-4xl md:text-5xl font-bold text-white mt-4 uppercase tracking-tight">Projets Sélectionnés</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[450px]">
        {PROJECTS_DATA.map((project, index) => {
          const isLarge = index === 0 || index === 1;
          const colSpan = isLarge ? "lg:col-span-2" : "lg:col-span-1";
          const isUpcoming = project.isUpcoming;
          const hasDetails = !!project.fullDetails;
          const canOpen = hasDetails && !isUpcoming;
          const isPortailRH = project.id === 'portail-rh';

          return (
            <div
              key={project.id}
              onClick={() => canOpen && onOpenProject(project.id)}
              className={`
                group relative bg-surface border border-zinc-700 overflow-hidden transition-all duration-500 rounded
                ${colSpan}
                ${isUpcoming ? 'cursor-not-allowed opacity-90' : canOpen ? 'cursor-pointer hover:border-primary hover:-translate-y-2 hover:shadow-2xl' : 'cursor-default'}
              `}
            >
              {/* Upcoming Badge */}
              {isUpcoming && (
                <div className="absolute top-6 left-6 z-20 flex items-center gap-2 px-3 py-1.5 bg-zinc-900/90 border border-zinc-700 backdrop-blur-md text-sm font-mono font-bold text-zinc-300 uppercase tracking-tight rounded">
                  <Clock size={14} />
                  PROJET À VENIR
                </div>
              )}

              {/* Upcoming Hover Message */}
              {isUpcoming && (
                <div className="absolute inset-0 z-30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                  <span className="bg-zinc-950/90 text-white px-4 py-2 rounded border border-zinc-800 font-mono text-sm font-bold uppercase tracking-tight shadow-xl backdrop-blur-sm">
                    Bientôt disponible
                  </span>
                </div>
              )}

              {/* Image Background */}
              <div className="absolute inset-0 bg-zinc-900">
                <img
                  src={project.image}
                  alt={project.title}
                  className={`h-full object-cover transition-all duration-700 
                    ${isPortailRH ? 'w-[105%] max-w-none object-left-top opacity-80' : 'w-full opacity-60'}
                    ${isUpcoming ? 'grayscale opacity-30 blur-[2px]' : 'group-hover:opacity-100 group-hover:scale-105'}
                  `}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
              </div>

              {/* Content */}
              <div className="absolute inset-0 flex flex-col justify-end p-8 md:p-10">
                <div className={`transform transition-transform duration-500 ${!isUpcoming ? 'group-hover:-translate-y-2' : ''}`}>
                  <div className="flex justify-between items-end mb-4">
                    <span className="tech-label text-white bg-primary/70  leading-none backdrop-blur-sm px-3 py-2 rounded shadow-sm inline-flex items-center justify-center">
                      {project.client}
                    </span>
                    {canOpen && (
                      <div className="w-10 h-10 bg-primary text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-4 group-hover:translate-y-0 rounded-full shadow-lg">
                        <ArrowUpRight size={20} />
                      </div>
                    )}
                  </div>

                  <h3 className="text-3xl font-bold text-white mb-2 uppercase tracking-tight drop-shadow-lg">
                    {project.title}
                  </h3>
                  <p className="text-base text-text-secondary max-w-md mb-6 leading-relaxed drop-shadow-md">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {project.tags.slice(0, 3).map(tag => (
                      <span key={tag} className="text-xs font-mono uppercase tracking-tight px-2 py-1 bg-zinc-950/60 backdrop-blur-md border border-zinc-700 text-zinc-300 rounded shadow-sm">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
