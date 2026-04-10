import React from 'react';
import { HARD_SKILLS, SOFT_SKILLS } from '../constants';
import { Code2, Heart } from 'lucide-react';

export const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-24 bg-surface/70">
      <div className="max-w-[1440px] mx-auto px-6">
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-text-bronze mb-4">Skills</h2>
          <p className="text-text-secondary max-w-xl">
            Ma boîte à outils technique et mes qualités humaines.
          </p> </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Hard Skills */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 rounded-lg bg-primary/10 text-primary">
                <Code2 size={24} />
              </div>
              <h3 className="text-xl font-bold text-text-bronze">Hard Skills</h3>
            </div>

            <div className="flex flex-wrap gap-3">
              {HARD_SKILLS.map((skill) => (
                <div
                  key={skill}
                  className="px-4 py-2 border border-border rounded-lg text-sm text-text-secondary hover:border-primary/50 hover:text-text-bronze transition-all cursor-default"
                >
                  {skill}
                </div>
              ))}
            </div>
          </div>

          {/* Soft Skills */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 rounded-lg bg-red-500/10 text-red-500">
                <Heart size={24} />
              </div>
              <h3 className="text-xl font-bold text-text-bronze">Soft Skills</h3>
            </div>

            <div className="flex flex-wrap gap-3">
              {SOFT_SKILLS.map((skill) => (
                <div
                  key={skill}
                  className="px-4 py-2 border border-border rounded-lg text-sm text-text-secondary hover:border-red-500/50 hover:text-text-bronze transition-all cursor-default"
                >
                  {skill}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};