import React, { useState, useEffect, useLayoutEffect, useRef } from 'react';
import { ArrowUpRight, User } from 'lucide-react';
import {
  TYPEWRITER_TITLES,
  INITIAL_DELAY,
  TYPING_SPEED,
  ERASING_SPEED,
  PAUSE_AFTER_TYPE,
  PAUSE_AFTER_ERASE,
  CHAR_FADE_IN,
  CHAR_FADE_OUT,
  CHAR_FADE_IN_EASING,
  CHAR_FADE_OUT_EASING,
  CURSOR_WIDTH,
  CURSOR_HEIGHT_SCALE,
  CURSOR_COLOR,
  CURSOR_BORDER_RADIUS,
  CURSOR_OFFSET_X,
  CURSOR_OFFSET_Y,
  CURSOR_SLIDE_EASING,
  CURSOR_BLINK_DURATION,
  CURSOR_BLINK_EASING,
  TEXT_COLOR,
} from '../config/typewriter.config';

type Phase = 'initial-delay' | 'typing' | 'pausing-after-type' | 'erasing' | 'pausing-after-erase';

function useTypewriter(titles: string[]) {
  const [chars, setChars] = useState<Array<{ char: string; key: string }>>([]);
  const [cursorBlinking, setCursorBlinking] = useState(false);
  const [phase, setPhase] = useState<Phase>('initial-delay');
  const rafRef = useRef<number | null>(null);
  const keyRef = useRef(0);
  const stateRef = useRef({
    titleIndex: 0,
    charIndex: 0,
    phase: 'typing' as Phase,
    lastTime: 0,
  });

  useEffect(() => {
    const tick = (now: number) => {
      const s = stateRef.current;
      const elapsed = now - s.lastTime;

      const delay =
        s.phase === 'initial-delay' ? INITIAL_DELAY :
          s.phase === 'typing' ? TYPING_SPEED :
            s.phase === 'erasing' ? ERASING_SPEED :
              s.phase === 'pausing-after-type' ? PAUSE_AFTER_TYPE :
                PAUSE_AFTER_ERASE;

      if (elapsed >= delay) {
        s.lastTime = now;
        const title = titles[s.titleIndex];

        if (s.phase === 'typing') {
          const newChar = title[s.charIndex];
          s.charIndex++;
          setChars(prev => [...prev, { char: newChar, key: String(++keyRef.current) }]);
          setPhase('typing');
          setCursorBlinking(false);
          if (s.charIndex === title.length) {
            s.phase = 'pausing-after-type';
            setPhase('pausing-after-type');
            setCursorBlinking(true);
          }

        } else if (s.phase === 'pausing-after-type') {
          s.phase = 'erasing';
          setPhase('erasing');
          setCursorBlinking(false);

        } else if (s.phase === 'erasing') {
          s.charIndex--;
          setChars(prev => prev.slice(0, -1));
          setPhase('erasing');
          setCursorBlinking(false);
          if (s.charIndex === 0) {
            s.phase = 'pausing-after-erase';
            setPhase('pausing-after-erase');
            setCursorBlinking(true);
          }

        } else {
          s.titleIndex = (s.titleIndex + 1) % titles.length;
          s.charIndex = 0;
          s.phase = 'typing';
          setChars([]);
          setPhase('typing');
          setCursorBlinking(false);
        }
      }

      rafRef.current = requestAnimationFrame(tick);
    };

    stateRef.current.lastTime = performance.now();
    rafRef.current = requestAnimationFrame(tick);
    return () => { if (rafRef.current) cancelAnimationFrame(rafRef.current); };
  }, [titles]);

  return { chars, cursorBlinking, phase };
}

export const Hero: React.FC = () => {
  const { chars, cursorBlinking, phase } = useTypewriter(TYPEWRITER_TITLES);
  const containerRef = useRef<HTMLSpanElement>(null);
  const textRef = useRef<HTMLSpanElement>(null);
  const anchorRef = useRef<HTMLSpanElement>(null); // référence de ligne toujours présente
  const cursorRef = useRef<HTMLSpanElement>(null);

  useLayoutEffect(() => {
    if (!containerRef.current || !textRef.current || !anchorRef.current || !cursorRef.current) return;

    const containerRect = containerRef.current.getBoundingClientRect();
    const children = Array.from(textRef.current.children) as HTMLElement[];
    const lastChar = children.length > 1 ? children[children.length - 1] : null;

    // ── Mesure exacte du glyphe via un élément de référence ───────────────────
    // On utilise un span temporaire visible pour obtenir le bounding box RÉEL
    // du rendu du glyphe, sans calcul half-leading approximatif.
    const probe = document.createElement('span');
    probe.textContent = 'H';
    probe.style.cssText = 'position:absolute;visibility:hidden;pointer-events:none;';
    anchorRef.current.parentElement!.appendChild(probe);
    const probeRect = probe.getBoundingClientRect();
    probe.remove();

    // La sonde hérite du font du h1 ; son getBoundingClientRect donne le
    // bounding box inline exact (= line box de la lettre H).
    // On en dérive la cap height via Canvas pour un résultat pixel-perfect.
    const style = window.getComputedStyle(anchorRef.current);
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d')!;
    ctx.font = `${style.fontWeight} ${style.fontSize} ${style.fontFamily}`;
    const m = ctx.measureText('H');

    const capAscent = m.actualBoundingBoxAscent;   // baseline → sommet du glyphe
    const capDescent = m.actualBoundingBoxDescent;  // baseline → bas du glyphe (≈ 0 pour majuscules)
    const capHeight = (capAscent + capDescent) * CURSOR_HEIGHT_SCALE;

    // Position du sommet du cap dans la line box de la sonde
    const emAscent = 'fontBoundingBoxAscent' in m ? (m.fontBoundingBoxAscent as number) : capAscent * 1.15;
    const emDescent = 'fontBoundingBoxDescent' in m ? (m.fontBoundingBoxDescent as number) : capAscent * 0.3;
    const halfLeading = (probeRect.height - emAscent - emDescent) / 2;
    const baselineFromTop = halfLeading + emAscent;
    const capTop = baselineFromTop - capAscent;

    // ── Positionnement X / Y ─────────────────────────────────────────────────
    // Y : on utilise la position de la sonde ou du dernier char pour la ligne correcte
    const refRect = lastChar ? lastChar.getBoundingClientRect() : probeRect;
    const y = refRect.top - containerRect.top + capTop + CURSOR_OFFSET_Y;
    const x = lastChar
      ? refRect.right - containerRect.left + CURSOR_OFFSET_X
      : containerRect.width / 2 + CURSOR_OFFSET_X;

    // ── Application ──────────────────────────────────────────────────────────
    cursorRef.current.style.height = `${capHeight}px`;
    cursorRef.current.style.transitionDuration = `${phase === 'erasing' ? ERASING_SPEED : 0}ms`;
    cursorRef.current.style.transitionTimingFunction = CURSOR_SLIDE_EASING;
    cursorRef.current.style.transform = `translate(${x}px, ${y}px)`;
  }, [chars, phase]);

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
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-[0.95] tracking-tighter uppercase animate-slide-up-fade break-words" style={{ color: TEXT_COLOR }}>
          {/* Ligne typewriter : hauteur fixe pour éviter le saut de layout */}
          <span ref={containerRef} className="block mb-2 md:mb-0 min-h-[1.1em] relative">
            <span ref={textRef}>
              {/* Ancre invisible — établit la position Y de la ligne même quand chars est vide */}
              <span ref={anchorRef} aria-hidden="true" style={{ visibility: 'hidden', width: 0, display: 'inline-block', overflow: 'hidden' }}>A</span>
              {chars.map((item, i) => {
                const isLast = i === chars.length - 1;
                const anim = isLast && phase === 'erasing'
                  ? `tw-char-out ${CHAR_FADE_OUT}ms ${CHAR_FADE_OUT_EASING} forwards`
                  : `tw-char-in ${CHAR_FADE_IN}ms ${CHAR_FADE_IN_EASING} forwards`;
                return <span key={item.key} style={{ animation: anim }}>{item.char}</span>;
              })}
            </span>
            <span
              ref={cursorRef}
              aria-hidden="true"
              style={{
                position: 'absolute',
                left: 0,
                top: 0,
                transform: 'translate(0, 0)',
                transition: 'transform 0ms ease',
                width: CURSOR_WIDTH,
                background: CURSOR_COLOR,
                borderRadius: CURSOR_BORDER_RADIUS,
                animation: cursorBlinking
                  ? `typewriter-blink ${CURSOR_BLINK_DURATION}ms ${CURSOR_BLINK_EASING} infinite`
                  : 'none',
              }}
            />
          </span>

        </h1>

        <p className="text-lg md:text-xl text-text-secondary max-w-2xl mx-auto font-medium leading-relaxed animate-slide-up-delay">
          Je conçois des écosystèmes digitaux depuis 10 ans.
          Une approche hybride mêlant design d'interfaces complexes, méthodologies UX, IA et NoCode, enfin un petit peu de code quand même !
        </p>

        {/* Tech Buttons - Centered */}
        <div className="flex flex-col sm:flex-row gap-4 pt-6 animate-slide-up-delay justify-center w-full sm:w-auto">
          <button
            onClick={scrollToProjects}
            className="group relative px-6 py-4 bg-primary/10 border border-primary/30 text-primary text-sm font-mono font-bold uppercase tracking-tight rounded hover:bg-primary/70 hover:text-text-bronze transition-all flex items-center justify-center gap-2 w-full sm:w-auto"
          >
            Voir les projets
            <ArrowUpRight size={16} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </button>

          <button
            onClick={scrollToAbout}
            className="group px-6 py-4 bg-transparent border border-border text-text-bronze text-sm font-mono font-bold uppercase tracking-tight rounded hover:border-primary hover:text-primary transition-all flex items-center justify-center gap-2 w-full sm:w-auto"
          >
            Mon Parcours
            <User size={16} />
          </button>
        </div>

      </div>
    </section>
  );
};