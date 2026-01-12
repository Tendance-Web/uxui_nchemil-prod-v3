import React from 'react';

export type SolutionBlock =
  | { type: 'text'; content: string }
  | { type: 'image'; url: string; mobileUrl?: string; caption?: string; preserveOriginal?: boolean };

export interface Project {
  id: string;
  title: string;
  client: string;
  category: string;
  description: string;
  image: string;
  tags: string[];
  isUpcoming?: boolean;
  fullDetails?: {
    context: string;
    mission: string;
    challenges: string;
    solution?: string;
    solutionBlocks?: SolutionBlock[];
    solutionImages?: {
      url: string;
      caption: string;
    }[];
    role?: string;
    kpi?: string[];
    images?: string[];
    videoUrl?: string;
    presentationUrl?: string;
  };
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  period: string;
  description: string[];
}

export interface Education {
  id: string;
  school: string;
  degree: string;
  period: string;
  description: string;
}

export interface TechItem {
  name: string;
  icon?: React.ReactNode;
}

export interface SkillCategory {
  title: string;
  description?: string;
  skills: string[];
}