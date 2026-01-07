declare module 'lenis' {
  export default class Lenis {
    constructor(options?: {
      duration?: number;
      easing?: (t: number) => number;
      orientation?: 'vertical' | 'horizontal';
      gestureOrientation?: 'vertical' | 'horizontal';
      smoothWheel?: boolean;
      wheelMultiplier?: number;
      touchMultiplier?: number;
      infinite?: boolean;
      wrapper?: HTMLElement | Window;
      content?: HTMLElement;
    });
    raf(time: number): void;
    destroy(): void;
    start(): void;
    stop(): void;
    on(event: string, callback: (args: any) => void): void;
  }
}