
import React from 'react';
import { EDUCATION_DATA } from '../constants';
import { GraduationCap } from 'lucide-react';

export const Education: React.FC = () => {
    return (
        <section id="education" className="py-24 px-6 max-w-[1440px] mx-auto border-t border-zinc-900/50">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">

                {/* Left Col: Header */}
                <div className="lg:col-span-4 space-y-6">
                    <div className="inline-flex items-center gap-3 px-3 py-1 bg-primary/10 border border-primary/20 rounded-full text-primary text-xs font-mono uppercase tracking-wider">
                        <GraduationCap size={14} />
                        <span>Parcours</span>
                    </div>
                    <h2 className="text-3xl font-bold text-white tracking-tight">Formations</h2>
                    <p className="text-text-secondary leading-relaxed text-base">
                        Mon parcours académique et mes certifications continues.
                        Une approche multidisciplinaire mêlant design, psychologie cognitive et développement technique.
                    </p>
                </div>

                {/* Right Col: Timeline */}
                <div className="lg:col-span-8 space-y-10 relative">
                    {/* Vertical Line */}
                    <div className="absolute left-0 top-2 bottom-2 w-px bg-zinc-800/50 hidden md:block"></div>

                    {EDUCATION_DATA.map((edu) => (
                        <div
                            key={edu.id}
                            className="relative md:pl-12 group"
                        >

                            {/* Sonar Dot Animation */}
                            <div className="absolute left-[-4px] top-2 hidden md:flex items-center justify-center w-2 h-2">
                                {/* Ripple 1 - Ring effect */}
                                <div className="absolute w-full h-full rounded-full border border-primary opacity-0 group-hover:animate-ripple"></div>
                                {/* Ripple 2 (Delayed) */}
                                <div className="absolute w-full h-full rounded-full border border-primary opacity-0 group-hover:animate-ripple" style={{ animationDelay: '0.6s' }}></div>

                                {/* Center Dot */}
                                <div className="relative w-2 h-2 rounded-full bg-zinc-600 group-hover:bg-primary transition-colors border border-background z-10"></div>
                            </div>


                            <div className="flex flex-col mb-1">
                                <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-2">
                                    <h3 className="text-xl font-bold text-white">
                                        {edu.degree}
                                    </h3>
                                    <span className="text-xs font-mono text-zinc-500 bg-zinc-900/50 px-2 py-1 rounded border border-zinc-800/50">
                                        {edu.period}
                                    </span>
                                </div>
                                <p className="text-primary text-sm font-bold font-mono mb-3">{edu.school}</p>
                                <p className="text-text-secondary text-sm leading-relaxed max-w-2xl">
                                    {edu.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
