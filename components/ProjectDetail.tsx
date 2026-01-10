
import React, { useEffect, useState } from 'react';
import { useParams, useNavigate, useLocation } from 'react-router-dom';
import { ArrowLeft, ArrowUpRight, X, FileText } from 'lucide-react';
import { PROJECTS_DATA } from '../constants';
import { FadeIn } from './FadeIn';
import { useLenis } from './SmoothScroll';

const CustomIcon = () => (
  <svg
    width="76.5"
    height="87"
    viewBox="0 0 78 88"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="shrink-0"
  >
    <path d="M0.353516 0.353577L43.8535 43.8536L0.353516 87.3536" stroke="#27A06C" strokeOpacity="0.25" strokeWidth="2" />
    <path d="M16.8535 0.353577L60.3535 43.8536L16.8535 87.3536" stroke="#27A06C" strokeOpacity="0.5" strokeWidth="2" />
    <path d="M33.3535 0.353577L76.8535 43.8536L33.3535 87.3536" stroke="#27A06C" strokeWidth="2" />
  </svg>
);

export const ProjectDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const lenis = useLenis();
  const project = PROJECTS_DATA.find(p => p.id === id);
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);

  // Scroll en haut de page à chaque changement de route (changement de projet)
  useEffect(() => {
    if (lenis) {
      lenis.scrollTo(0, { immediate: true });
    } else {
      window.scrollTo(0, 0);
    }
  }, [pathname, lenis]);

  // Gestion de la touche Échap pour fermer la modal
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsVideoModalOpen(false);
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, []);

  // Bloquer le scroll et cacher la navbar quand la modal est ouverte
  useEffect(() => {
    if (isVideoModalOpen) {
      document.body.style.overflow = 'hidden';
      window.dispatchEvent(new Event('force-navbar-hide'));
      if (lenis) lenis.stop();
    } else {
      document.body.style.overflow = '';
      window.dispatchEvent(new Event('force-navbar-show'));
      if (lenis) lenis.start();
    }
    return () => {
      document.body.style.overflow = '';
      window.dispatchEvent(new Event('force-navbar-show'));
      if (lenis) lenis.start();
    };
  }, [isVideoModalOpen, lenis]);

  if (!project || !project.fullDetails) {
    return (
      <div className="min-h-screen pt-32 px-6 text-center text-white animate-fade-in flex flex-col items-center justify-center">
        <h2 className="text-3xl font-bold uppercase tracking-tight mb-4">404 // Projet introuvable</h2>
        <button
          onClick={() => navigate('/')}
          className="px-6 py-3 bg-primary text-white uppercase text-sm font-mono font-bold tracking-tight hover:bg-primary-hover transition-colors rounded"
        >
          Retour à l'accueil
        </button>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-36 pb-32 px-6">
      <div className="max-w-6xl mx-auto space-y-8 md:space-y-24">

        {/* Navigation & Header */}
        <FadeIn className="space-y-12">
          <button
            onClick={() => navigate('/', { state: { scrollTo: 'projects' } })}
            className="group px-4 py-2 bg-transparent border border-zinc-700 text-zinc-300 text-sm font-mono font-bold uppercase tracking-tight rounded hover:border-zinc-500 hover:text-white hover:bg-zinc-800/50 transition-all flex items-center gap-2 w-fit leading-none"
          >
            <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
            <span className="mt-[2px]">Retour aux projets</span>
          </button>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-end">
            <div className="space-y-6">
              <div className="flex flex-col items-start gap-2 sm:flex-row sm:items-center sm:gap-3">
                <span className="tech-label text-primary">
                   // {project.client}
                </span>
                <span className="hidden sm:block w-px h-4 bg-zinc-700"></span>
                <span className="text-sm font-mono uppercase text-zinc-200">
                  {project.category}
                </span>
              </div>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white tracking-tighter uppercase leading-[0.9]">
                {project.title}
              </h1>
            </div>

            <div className="flex flex-wrap gap-2 justify-start lg:justify-end">
              {project.tags.map((tag) => (
                <span key={tag} className="text-xs font-mono uppercase tracking-tight px-2 py-1 border border-zinc-700 text-zinc-200 rounded">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </FadeIn>

        {/* 1. Image de Couverture Hero */}
        <FadeIn delay={200}>
          <div className="w-full border border-zinc-800 bg-surface shadow-2xl relative group rounded overflow-hidden">
            <img
              src={project.image}
              alt={`Couverture ${project.title}`}
              className="w-full h-auto max-h-[80vh] object-cover opacity-90 group-hover:opacity-100 transition-opacity duration-700"
            />
          </div>
        </FadeIn>

        {/* 2. Grid Contexte / Mission / Challenge */}
        <FadeIn delay={300}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 border-y border-zinc-800 py-6 md:py-16">
            <div className="space-y-4">
              <div className="flex items-center gap-3 mb-2">
                <span className="text-sm font-mono text-zinc-500">01</span>
                <h3 className="text-base font-bold text-white uppercase tracking-tight">Contexte</h3>
              </div>
              <p className="text-text-secondary leading-relaxed text-base">
                {project.fullDetails.context}
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-center gap-3 mb-2">
                <span className="text-sm font-mono text-zinc-500">02</span>
                <h3 className="text-base font-bold text-white uppercase tracking-tight">Mission</h3>
              </div>
              <p className="text-text-secondary leading-relaxed text-base">
                {project.fullDetails.mission}
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-center gap-3 mb-2">
                <span className="text-sm font-mono text-zinc-500">03</span>
                <h3 className="text-base font-bold text-white uppercase tracking-tight">Challenges</h3>
              </div>
              <p className="text-text-secondary leading-relaxed text-base">
                {project.fullDetails.challenges}
              </p>
            </div>
          </div>
        </FadeIn>

        {/* 3. Mon Rôle */}
        {project.fullDetails.role && (
          <FadeIn delay={200}>
            <div className="bg-zinc-900/50 p-6 md:p-12 border border-zinc-800 rounded">
              <div className="flex flex-col md:flex-row gap-12 items-start">
                <div className="md:w-64 shrink-0">
                  <span className="text-primary font-mono text-sm">// RÔLE</span>
                  <h3 className="text-2xl font-bold text-white uppercase tracking-tight mt-2">Mon Rôle</h3>
                </div>
                <div className="flex-1">
                  <p className="text-zinc-300 leading-relaxed text-lg">
                    {project.fullDetails.role}
                  </p>
                </div>
              </div>
            </div>
          </FadeIn>
        )}

        {/* 4. Solutions Section */}
        <div className="space-y-8 md:space-y-16">
          <FadeIn>
            <div className="flex flex-col gap-4 max-w-2xl">
              <span className="tech-label text-primary">// PROCESSUS</span>
              <h2 className="text-3xl md:text-4xl font-bold text-white uppercase tracking-tight">Design & Solutions</h2>
            </div>
          </FadeIn>

          {project.fullDetails.solutionBlocks ? (
            <div className="space-y-8 md:space-y-24">
              {project.fullDetails.solutionBlocks.map((block, index) => {
                if (block.type === 'text') {
                  return (
                    <FadeIn key={index} delay={100}>
                      <div className="max-w-3xl ml-auto md:mr-[10%] border-l border-primary pl-8 py-2">
                        <div className="text-text-main leading-relaxed text-lg whitespace-pre-line">
                          {block.content}
                        </div>
                      </div>
                    </FadeIn>
                  );
                } else if (block.type === 'image') {
                  const containerClasses = block.preserveOriginal
                    ? "border border-zinc-800 rounded overflow-hidden flex justify-center"
                    : "border border-zinc-800 bg-surface rounded overflow-hidden";
                  const imgClasses = block.preserveOriginal
                    ? "h-auto object-contain max-w-full"
                    : "w-full h-auto object-cover";
                  const captionClasses = block.preserveOriginal
                    ? "flex items-center justify-center gap-2 text-sm font-mono uppercase text-zinc-400 mt-2"
                    : "flex items-center gap-2 text-sm font-mono uppercase text-zinc-400 mt-2";
                  return (
                    <FadeIn key={index} delay={100}>
                      <figure className="space-y-4">
                        <div className={containerClasses}>
                          <picture>
                            {block.mobileUrl && (
                              <source media="(max-width: 768px)" srcSet={block.mobileUrl} />
                            )}
                            <img
                              src={block.url}
                              alt={block.caption || "Illustration de la solution"}
                              className={imgClasses}
                            />
                          </picture>
                        </div>
                        {block.caption && (
                          <figcaption className={captionClasses}>
                            <span className="w-4 h-px bg-zinc-600"></span>
                            {block.caption}
                          </figcaption>
                        )}
                      </figure>
                    </FadeIn>
                  );
                }
                return null;
              })}

              {/* CTAs Section: Vidéo Demo & Présentation Doc */}
              {(project.fullDetails.videoUrl || project.fullDetails.presentationUrl) && (
                <FadeIn delay={100}>
                  <div className={`grid grid-cols-1 ${project.fullDetails.videoUrl && project.fullDetails.presentationUrl ? 'md:grid-cols-2' : ''} gap-6 mt-12`}>
                    {project.fullDetails.videoUrl && (
                      <button
                        onClick={() => setIsVideoModalOpen(true)}
                        className="group relative flex items-center gap-6 p-8 md:p-10 bg-surface border border-primary/20 hover:border-primary transition-all rounded text-left overflow-hidden"
                      >
                        <div className="relative z-10 space-y-2">
                          <span className="tech-label text-primary text-xs">// PROTOTYPE</span>
                          <h3 className="text-xl md:text-2xl font-bold text-white uppercase tracking-tight">
                            Voir la démo vidéo
                          </h3>
                        </div>
                        <div className="relative z-10 ml-auto transform group-hover:translate-x-2 transition-transform">
                          <CustomIcon />
                        </div>
                        <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2"></div>
                      </button>
                    )}

                    {project.fullDetails.presentationUrl && (
                      <a
                        href={project.fullDetails.presentationUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group relative flex items-center gap-6 p-8 md:p-10 bg-surface border border-zinc-800 hover:border-zinc-500 transition-all rounded text-left overflow-hidden"
                      >
                        <div className="relative z-10 space-y-2">
                          <span className="tech-label text-zinc-500 text-xs">// ÉTUDE DE CAS</span>
                          <h3 className="text-xl md:text-2xl font-bold text-white uppercase tracking-tight">
                            Consulter la présentation complète
                          </h3>
                        </div>
                        <div className="relative z-10 ml-auto transform group-hover:translate-x-2 transition-transform text-zinc-500 group-hover:text-white">
                          <FileText size={48} strokeWidth={1} />
                        </div>
                      </a>
                    )}
                  </div>
                </FadeIn>
              )}
            </div>
          ) : (
            /* Fallback for legacy content */
            <div className="space-y-8">
              <FadeIn>
                <div className="text-zinc-300 leading-relaxed text-lg whitespace-pre-line max-w-4xl border-l-2 border-zinc-800 pl-6">
                  {project.fullDetails.solution}
                </div>
              </FadeIn>

              {project.fullDetails.solutionImages?.map((img, index) => (
                <FadeIn key={index} delay={100}>
                  <div className="border border-zinc-800 bg-surface mb-4 rounded overflow-hidden">
                    <img src={img.url} alt={img.caption} className="w-full h-auto object-cover" />
                  </div>
                  {img.caption && <p className="text-sm font-mono uppercase text-zinc-400 mb-12">// {img.caption}</p>}
                </FadeIn>
              ))}
            </div>
          )}
        </div>

        {/* 5. KPI & Résultats */}
        <FadeIn delay={100}>
          <div className="border border-zinc-800 bg-zinc-900/50 p-6 md:p-12 rounded">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12">
              <h3 className="text-2xl font-bold text-white uppercase tracking-tight">Impact & Résultats</h3>
              <span className="tech-label text-primary border border-primary/20 px-3 py-1 rounded">Métriques</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {project.fullDetails.kpi?.map((kpi, index) => (
                <div key={index} className="flex flex-col gap-3">
                  <span className="text-4xl font-bold text-zinc-700 font-mono select-none">0{index + 1}</span>
                  <div className="h-px w-full bg-zinc-800"></div>
                  <p className="text-white font-medium text-base uppercase tracking-wide leading-relaxed">
                    {kpi}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </FadeIn>


        {/* Footer Navigation */}
        <div className="flex justify-center pt-16 border-t border-zinc-900">
          <button
            onClick={() => navigate('/', { state: { scrollTo: 'projects' } })}
            className="px-8 py-4 bg-primary text-white text-sm font-mono font-bold uppercase tracking-tight hover:bg-primary-hover transition-all flex items-center gap-2 rounded"
          >
            Voir d'autres projets
            <ArrowUpRight size={16} />
          </button>
        </div>

      </div>

      {/* Video Modal (Pop-in pleine page) */}
      {isVideoModalOpen && project.fullDetails.videoUrl && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center animate-fade-in bg-zinc-950/98 backdrop-blur-xl cursor-pointer"
          onClick={() => setIsVideoModalOpen(false)}
        >
          {/* Main Modal Container */}
          <div
            className="relative w-full h-full flex flex-col items-center justify-center animate-slide-up-fade cursor-default"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header de la modal */}
            <div className="absolute top-0 left-0 right-0 p-6 md:p-8 flex justify-between items-center z-[110]">
              <div className="flex items-center gap-3">
                <span className="tech-label text-primary">// DÉMO</span>
                <h4 className="text-white font-bold uppercase tracking-tight hidden md:block">{project.title}</h4>
              </div>

              {/* Bouton Fermer Explicite - Toujours Visible */}
              <button
                onClick={() => setIsVideoModalOpen(false)}
                className="flex items-center gap-3 px-6 py-3 bg-zinc-900 text-white rounded border border-zinc-700 hover:bg-primary hover:border-primary transition-all group shadow-[0_0_20px_rgba(0,0,0,0.5)]"
              >
                <span className="font-mono text-xs font-bold uppercase tracking-widest leading-none">Fermer</span>
                <X size={20} className="group-hover:rotate-90 transition-transform" />
              </button>
            </div>

            {/* Video Iframe Container - Pleine page centrée avec ratio préservé */}
            <div className="w-full h-full max-w-4xl max-h-[85vh] p-4 flex items-center justify-center z-[105]">
              <div className="w-full h-full max-w-md aspect-[9/16] shadow-[0_0_100px_rgba(39,160,108,0.2)] rounded-2xl overflow-hidden border border-zinc-800 bg-black">
                <iframe
                  src={project.fullDetails.videoUrl}
                  frameBorder="0"
                  allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  className="w-full h-full"
                  title={project.title}
                />
              </div>
            </div>

            {/* Légende basse */}
            <div className="absolute bottom-8 text-center text-zinc-500 font-mono text-xs uppercase tracking-widest px-6 z-[105]">
              Échap pour fermer • Nassim Chemil Expérience
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
