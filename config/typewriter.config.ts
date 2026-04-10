// ─────────────────────────────────────────────────────────────────────────────
// TYPEWRITER CONFIG
// Tous les paramètres du composant Hero Typewriter sont ici.
// ─────────────────────────────────────────────────────────────────────────────

// ─── Textes ──────────────────────────────────────────────────────────────────

export const TYPEWRITER_TITLES = [
  'Concepteur web & app',
  'Consultant digital',
  'Product builder IA - No Code',
];

/** Couleur du texte des titres typewriter. Accepte toute valeur CSS (hex, rgb, classe Tailwind via style, var(…)). */
export const TEXT_COLOR = `rgb(var(--color-text-main))`;

// ─── Rythme de frappe ────────────────────────────────────────────────────────

/** Délai entre chaque caractère ajouté (ms). Plus la valeur est haute, plus la frappe est lente. */
export const TYPING_SPEED = 130;

/** Délai entre chaque caractère supprimé (ms). Généralement plus rapide que TYPING_SPEED. */
export const ERASING_SPEED = 50;

/** Pause après avoir tapé le mot complet, avant de commencer l'effacement (ms). */
export const PAUSE_AFTER_TYPE = 2000;

/** Pause après avoir tout effacé, avant de commencer le mot suivant (ms). */
export const PAUSE_AFTER_ERASE = 400;
export const INITIAL_DELAY = 3000; // Delay before the first character appears (ms)

// ─── Fondu des caractères ────────────────────────────────────────────────────

/**
 * Durée du fondu d'apparition de chaque lettre (ms).
 * Réglé à TYPING_SPEED pour que la lettre atteigne opacity 1
 * exactement quand la lettre suivante commence à apparaître.
 */
export const CHAR_FADE_IN = TYPING_SPEED;

/**
 * Durée du fondu de disparition de chaque lettre lors de l'effacement (ms).
 * Doit être inférieur à ERASING_SPEED pour que l'animation se termine
 * avant que le caractère soit retiré du DOM.
 */
export const CHAR_FADE_OUT = Math.round(ERASING_SPEED * 0.8);

/** Easing du fondu d'apparition. Valeurs CSS valides : ease, ease-out, ease-in, linear, cubic-bezier(…) */
export const CHAR_FADE_IN_EASING = 'ease-out';

/** Easing du fondu de disparition. */
export const CHAR_FADE_OUT_EASING = 'ease-in';

// ─── Curseur — Dimensions ────────────────────────────────────────────────────

/**
 * Largeur du curseur.
 * Unité em recommandée pour qu'il s'adapte à la taille de police.
 * Ex : '0.58em' pour un bloc plein (style Vim), '2px' pour un trait fin.
 */
export const CURSOR_WIDTH = '25px';

/**
 * Multiplicateur appliqué à la cap height mesurée dynamiquement.
 * 1.0  → hauteur exacte des majuscules (mesure Canvas).
 * 0.9  → légèrement plus petit que les lettres.
 * 1.1  → légèrement plus grand.
 * La valeur finale en pixels est calculée automatiquement
 * et s'adapte à toute modification de la taille de police.
 */
export const CURSOR_HEIGHT_SCALE = 1.2;

/** Couleur de remplissage du curseur. Accepte toute valeur CSS (hex, rgb, var(…)). */
export const CURSOR_COLOR = `rgb(var(--color-primary))`;

/**
 * Arrondi des coins du curseur.
 * '0' → bloc carré (Vim), '2px' → légèrement arrondi, '50%' → pilule.
 */
export const CURSOR_BORDER_RADIUS = '0';

// ─── Curseur — Positionnement ────────────────────────────────────────────────

/**
 * Décalage horizontal entre le bord droit du dernier caractère et le curseur (px).
 * 0  → collé à la lettre.
 * 4  → petit espace.
 * Valeur négative → curseur chevauche légèrement la lettre.
 */
export const CURSOR_OFFSET_X = 0;

/**
 * Décalage vertical depuis le haut du bounding box du dernier caractère (px).
 * 0  → aligné par le haut sur la lettre (par défaut, correspond au sommet des majuscules).
 * Valeur positive  → descend le curseur.
 * Valeur négative  → remonte le curseur.
 *
 * Repères visuels utiles :
 *   0px               → haut des majuscules
 *   +quelques px      → ajustement fin pour la police actuelle
 */
export const CURSOR_OFFSET_Y = 2;

// ─── Curseur — Glissement ────────────────────────────────────────────────────

/**
 * Easing de la transition de glissement du curseur.
 * Pendant la frappe, le curseur saute instantanément (durée = 0) pour
 * toujours précéder la lettre — comme un curseur Vim.
 * Pendant l'effacement, il glisse avec la durée ERASING_SPEED.
 * Valeurs CSS : ease, ease-in-out, linear, cubic-bezier(…)
 */
export const CURSOR_SLIDE_EASING = 'linear';

// ─── Curseur — Clignotement ──────────────────────────────────────────────────

/**
 * Durée d'un cycle de clignotement (ms).
 * Le curseur clignote uniquement pendant les pauses (mot complet ou vide).
 */
export const CURSOR_BLINK_DURATION = 500;

/**
 * Easing du clignotement.
 * 'step-end' → alternance binaire opaque/transparent (style terminal).
 * 'ease'     → fondu doux (style éditeur moderne).
 */
export const CURSOR_BLINK_EASING = 'ease';
