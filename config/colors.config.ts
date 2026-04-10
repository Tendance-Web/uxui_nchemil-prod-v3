// ─────────────────────────────────────────────────────────────────────────────
// COLORS CONFIG
// Palette centralisée du site. Modifier les valeurs ici se répercute partout.
// ─────────────────────────────────────────────────────────────────────────────

export const PRIMARY = '#27A06C';
export const PRIMARY_HOVER = '#1F8A5C';
export const PRIMARY_GLOW = 'rgba(39, 160, 108, 0.2)';
export const SHADOW_DARK = 'rgba(0, 0, 0, 0.5)';
export const ACCENT_RED = '#EF4444';

function parseToRGB(color: string): { channels: string; alpha?: number } {
  const hex = color.trim().replace('#', '');
  if (/^[0-9a-f]{3,8}$/i.test(hex)) {
    let r: number, g: number, b: number;
    let a: number | undefined;
    if (hex.length === 3 || hex.length === 4) {
      r = parseInt(hex[0] + hex[0], 16);
      g = parseInt(hex[1] + hex[1], 16);
      b = parseInt(hex[2] + hex[2], 16);
      if (hex.length === 4) a = parseInt(hex[3] + hex[3], 16) / 255;
    } else {
      r = parseInt(hex.slice(0, 2), 16);
      g = parseInt(hex.slice(2, 4), 16);
      b = parseInt(hex.slice(4, 6), 16);
      if (hex.length === 8) a = parseInt(hex.slice(6, 8), 16) / 255;
    }
    return { channels: `${r} ${g} ${b}`, alpha: a };
  }

  const match = color.match(/rgba?\(\s*(\d+)[,\s]+(\d+)[,\s]+(\d+)(?:[,\s/]+(\d*\.?\d+))?\s*\)/);
  if (match) {
    const alpha = match[4] != null ? parseFloat(match[4]) : undefined;
    return { channels: `${match[1]} ${match[2]} ${match[3]}`, alpha };
  }

  return { channels: color };
}

export type ThemeType = 'dark' | 'light';

export const THEMES = {
  dark: {
    tailwind: {
      primary: PRIMARY,
      'primary-hover': PRIMARY_HOVER,
      background: '#28282879',
      surface: '#212121ff',
      border: '#393939ff',
      'text-main': '#cececeff',
      'text-bronze': '#eaeaeaff',
      'text-secondary': '#eaeaeaff',
      'text-muted': '#c7c7d0ff',
      'text-vignette': '#e7e7e7ff',
      'bg-thumb': '#27272A',
    },
    utility: {
      'body-bg': '#212121ff',
      'scrollbar-track': '#151515',
      'scrollbar-thumb': '#27272A',
      'scrollbar-thumb-hover': '#3F3F46',
    }
  },
  light: {
    tailwind: {
      primary: PRIMARY,
      'primary-hover': PRIMARY_HOVER,
      background: '#F3F4F679', 
      surface: '#FFFFFF',
      border: '#E5E7EB', 
      'text-main': '#374151', 
      'text-bronze': '#111827', 
      'text-secondary': '#4B5563', 
      'text-muted': '#6B7280', 
      'text-vignette': '#1F2937', 
      'bg-thumb': '#D1D5DB', 
    },
    utility: {
      'body-bg': '#F9FAFB', 
      'scrollbar-track': '#F3F4F6',
      'scrollbar-thumb': '#D1D5DB', 
      'scrollbar-thumb-hover': '#9CA3AF', 
    }
  }
};

export function injectCSSVars(theme: ThemeType = 'dark'): void {
  const root = document.documentElement;
  const currentTheme = THEMES[theme];

  for (const [name, value] of Object.entries(currentTheme.tailwind)) {
    const { channels, alpha } = parseToRGB(value);
    root.style.setProperty(`--color-${name}`, channels);
    if (alpha != null) {
      root.style.setProperty(`--color-${name}-alpha`, String(alpha));
    } else {
      root.style.removeProperty(`--color-${name}-alpha`);
    }
  }

  for (const [name, value] of Object.entries(currentTheme.utility)) {
    root.style.setProperty(`--color-${name}`, value);
  }
  
  if (theme === 'dark') {
    document.documentElement.classList.add('dark');
    document.documentElement.classList.remove('light');
  } else {
    document.documentElement.classList.add('light');
    document.documentElement.classList.remove('dark');
  }
}

export function initTheme(): ThemeType {
  const saved = localStorage.getItem('theme') as ThemeType;
  if (saved === 'dark' || saved === 'light') {
    injectCSSVars(saved);
    return saved;
  }
  const prefersLight = window.matchMedia('(prefers-color-scheme: light)').matches;
  const initialTheme = prefersLight ? 'light' : 'dark';
  injectCSSVars(initialTheme);
  return initialTheme;
}

export function setTheme(theme: ThemeType): void {
  localStorage.setItem('theme', theme);
  injectCSSVars(theme);
  window.dispatchEvent(new CustomEvent('theme-changed', { detail: theme }));
}
