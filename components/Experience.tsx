import React, { useState } from 'react';
import { EXPERIENCE_DATA, SOCIAL_LINKS } from '../constants';
import { Download, ChevronDown } from 'lucide-react';

export const Experience: React.FC = () => {
  const [openId, setOpenId] = useState<string | null>(null);

  const toggleOpen = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section id="experience" className="py-24 px-6 max-w-[1440px] mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">

        {/* Left Col: Header */}
        <div className="lg:col-span-4 space-y-6">
          <h2 className="text-3xl font-bold text-white">Expérience</h2>
          <p className="text-text-secondary leading-relaxed text-base">
            J'allie les méthodes UX/UI avec la technologie de l'information pour concevoir des interfaces accessibles, cohérentes et intuitives.
            Je collabore activement avec les équipes techniques, comprends les architectures numériques et transforme la complexité en expériences utilisateur claires et efficaces.
          </p>

          <a
            href={SOCIAL_LINKS.linkedin}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 text-primary font-medium font-mono hover:text-primary-hover transition-colors mt-4 text-sm"
          >
            <span>Voir mon LinkedIn</span>
            <Download size={16} />
          </a>
        </div>

        {/* Right Col: Timeline */}
        <div className="lg:col-span-8 space-y-8 relative">
          {EXPERIENCE_DATA.map((exp) => {
            const isOpen = openId === exp.id;

            return (
              <div
                key={exp.id}
                className={`group cursor-pointer bg-white/[0.02] border ${isOpen ? 'border-green-500' : 'border-white/[0.05]'} hover:bg-white/[0.04] p-5 md:p-6 rounded-xl transition-all`}
                onClick={() => toggleOpen(exp.id)}
              >
                <div className="flex items-start gap-4">
                  {/* Sonar Dot Animation */}
                  <div className="mt-[10px] relative hidden md:flex items-center justify-center w-2 h-2 shrink-0">
                    <div className="absolute w-full h-full rounded-full border border-primary opacity-0 group-hover:animate-ripple"></div>
                    <div className="absolute w-full h-full rounded-full border border-primary opacity-0 group-hover:animate-ripple" style={{ animationDelay: '0.6s' }}></div>
                    <div className={`relative w-2 h-2 rounded-full transition-colors border border-background z-10 ${isOpen ? 'bg-primary' : 'bg-zinc-600 group-hover:bg-primary'}`}></div>
                  </div>

                  <div className="flex-1 flex flex-col">
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 mb-2">
                      <h3 className="text-xl font-bold text-white flex items-center gap-2 text-left">
                        {exp.role}
                        <ChevronDown
                          size={20}
                          className={`text-primary transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
                        />
                      </h3>
                      <span className="text-xs font-mono text-zinc-400 bg-zinc-900/40 px-3 py-1.5 rounded-md border border-zinc-800 whitespace-nowrap">
                        {exp.period}
                      </span>
                    </div>

                    <p className="text-primary text-sm font-bold font-mono mb-2">{exp.company}</p>

                    <div className={`grid transition-all duration-300 ease-in-out ${isOpen ? 'grid-rows-[1fr] opacity-100 mt-4' : 'grid-rows-[0fr] opacity-0'}`}>
                      <div className="overflow-hidden">
                        <div className="space-y-6">
                          {exp.description.map((item, idx) => (
                            <p key={idx} className="text-text-secondary text-sm leading-relaxed max-w-4xl">
                              {item}
                            </p>
                          ))}
                        </div>
                      </div>
                    </div>
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
