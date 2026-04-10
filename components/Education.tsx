import React, { useState } from 'react';
import { EDUCATION_DATA } from '../constants';
import { GraduationCap, ChevronDown } from 'lucide-react';

export const Education: React.FC = () => {
    const [openId, setOpenId] = useState<string | null>(null);

    const toggleOpen = (id: string) => {
        setOpenId(openId === id ? null : id);
    };

    return (
        <section id="education" className="py-24 px-6 border-t border-border/50 bg-surface/70">
            <div className="max-w-[1440px] mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
                    {/* Left Col: Header */}
                    <div className="lg:col-span-4 space-y-6">
                        <div className="inline-flex items-center gap-3 px-3 py-1 bg-primary/10 border border-primary/20 rounded-full text-primary text-xs font-mono uppercase tracking-wider">
                            <GraduationCap size={14} />
                            <span>Parcours</span>
                        </div>
                        <h2 className="text-3xl font-bold text-text-bronze tracking-tight">Formations</h2>
                        <p className="text-text-secondary leading-relaxed text-base">
                            Mon parcours académique et mes certifications continues.
                            Une approche multidisciplinaire mêlant design, psychologie cognitive et développement technique.
                        </p>
                    </div>
                    {/* Right Col: Timeline */}
                    <div className="lg:col-span-8 space-y-8 relative">
                        {EDUCATION_DATA.map((edu) => {
                            const isOpen = openId === edu.id;

                            return (
                                <div
                                    key={edu.id}
                                    className={`group cursor-pointer bg-surface shadow-sm border ${isOpen ? 'border-green-500' : 'border-border'} hover:bg-surface/80 p-5 md:p-6 rounded-xl transition-all`}
                                    onClick={() => toggleOpen(edu.id)}
                                >
                                    <div className="flex items-start gap-4">
                                        {/* Sonar Dot Animation */}
                                        <div className="mt-[10px] relative hidden md:flex items-center justify-center w-2 h-2 shrink-0">
                                            <div className="absolute w-full h-full rounded-full border border-primary opacity-0 group-hover:animate-ripple"></div>
                                            <div className="absolute w-full h-full rounded-full border border-primary opacity-0 group-hover:animate-ripple" style={{ animationDelay: '0.6s' }}></div>
                                            <div className={`relative w-2 h-2 rounded-full transition-colors border border-background z-10 ${isOpen ? 'bg-primary' : 'bg-border group-hover:bg-primary'}`}></div>
                                        </div>

                                        <div className="flex-1 flex flex-col">
                                            <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 mb-2">
                                                <h3 className="text-xl font-bold text-text-bronze flex items-center gap-2 text-left">
                                                    {edu.degree}
                                                    <ChevronDown
                                                        size={20}
                                                        className={`text-primary transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
                                                    />
                                                </h3>
                                                <span className="text-xs font-mono text-text-muted bg-surface px-3 py-1.5 rounded-md border border-border whitespace-nowrap">
                                                    {edu.period}
                                                </span>
                                            </div>

                                            <p className="text-primary text-sm font-bold font-mono mb-2">{edu.school}</p>

                                            <div className={`grid transition-all duration-300 ease-in-out ${isOpen ? 'grid-rows-[1fr] opacity-100 mt-4' : 'grid-rows-[0fr] opacity-0'}`}>
                                                <div className="overflow-hidden">
                                                    <p className="text-text-secondary text-sm leading-relaxed max-w-4xl">
                                                        {edu.description}
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
};
