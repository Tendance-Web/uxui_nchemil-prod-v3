import React from 'react';
import { Linkedin, Mail, Smartphone } from 'lucide-react';
import { SOCIAL_LINKS } from '../constants';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-surface border-t border-border py-12 px-6">
      <div className="max-w-[1440px] mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="text-center md:text-left">
          <h4 className="text-white font-bold text-lg mb-2">Nassim CHEMIL</h4>
          <p className="text-zinc-300 text-sm">Product Builder & UX Designer</p>
        </div>

        <div className="flex gap-6 items-center">
          <a href={SOCIAL_LINKS.linkedin} target="_blank" rel="noreferrer" className="text-zinc-400 hover:text-primary transition-colors">
            <Linkedin size={20} />
            <span className="sr-only">LinkedIn</span>
          </a>
          <a href={SOCIAL_LINKS.behance} target="_blank" rel="noreferrer" className="text-zinc-400 hover:text-primary transition-colors">
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              width="20" 
              height="20" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round" 
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
              <path d="M3 18v-12h4.5a3 3 0 0 1 0 6a3 3 0 0 1 0 6h-4.5" />
              <path d="M3 12l4.5 0" />
              <path d="M14 13h7a3.5 3.5 0 0 0 -7 0v2a3.5 3.5 0 0 0 6.64 1" />
              <path d="M16 6l3 0" />
            </svg>
            <span className="sr-only">Behance</span>
          </a>
          <a href={SOCIAL_LINKS.email} className="text-zinc-400 hover:text-primary transition-colors">
            <Mail size={20} />
            <span className="sr-only">Email</span>
          </a>
          <a href={`tel:${SOCIAL_LINKS.phone}`} className="text-zinc-400 hover:text-primary transition-colors">
            <Smartphone size={20} />
            <span className="sr-only">Phone</span>
          </a>
        </div>
        
        <div className="text-zinc-400 text-sm">
          © {new Date().getFullYear()} Tous droits réservés.
        </div>
      </div>
    </footer>
  );
};