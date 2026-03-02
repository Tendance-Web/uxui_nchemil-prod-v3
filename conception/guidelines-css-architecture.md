# Guidelines : Architecture et Gestion des Styles CSS

## 🏗️ Architecture Générale

Ce projet portfolio utilise une architecture CSS **100% basée sur Tailwind CSS**, mais configurée d'une manière spécifique, taillée pour le prototypage rapide et l'intégration directe sans étape de compilation lourde (via CDN).

### 1. Le rôle central de `index.html`
Contrairement à beaucoup de projets React (Vite/Next.js) où la configuration CSS se trouve dans des fichiers séparés (`tailwind.config.js` et `index.css`), **toute la logique de styling racine se trouve dans le fichier `/index.html`**. 

Ce choix structurel signifie que :
1. **Tailwind est chargé via CDN** (`<script src="https://cdn.tailwindcss.com"></script>`). Les classes sont générées dynamiquement par le navigateur.
2. **La configuration globale (Thème)** est injectée directement dans une balise `<script> tailwind.config = { ... } </script>`.
3. **Le CSS personnalisé (Custom CSS)** est écrit dans une balise `<style>` classique, juste en dessous de la configuration Tailwind.

---

## 🎨 Comment modifier le Design System ?

Toutes vos "Design Tokens" (Couleurs, Polices, Tailles, Animations) sont centralisées dans l'objet `tailwind.config` du fichier `index.html`.

### 1. Modifier les couleurs globales
Ouvrez `index.html` et cherchez la section `theme.extend.colors`. 
Par exemple, pour changer le vert principal :
```javascript
colors: {
    background: '#272727', // Fond principal de la page
    surface: '#0F0F11',    // Fond des cartes, navbar, footer
    border: '#27272A',     // Couleur des contours/lignes (très discret)
    primary: '#27A06C',    // -> VOTRE COULEUR PRINCIPALE (Le Vert) <- Modifiez l'hexa ici!
    'primary-hover': '#1F8A5C', // Variation au survol
    'text-main': '#EDEDED',
    'text-secondary': '#D4D4D8',
    'text-muted': '#A1A1AA',
}
```
*💡 Dès que vous modifiez un code hexadécimal ici, toutes les classes Tailwind (ex: `bg-primary`, `text-primary`, `border-border`) seront automatiquement mises à jour dans tout le site.*

### 2. Modifier les typographies
Les polices utilisées sont importées via CDN (Geist Sans et Mono). Elles sont affectées dans la configuration locale :
```javascript
fontFamily: {
    sans: ['Geist Sans', 'sans-serif'], // Police par défaut (Textes, Titres)
    mono: ['Geist Mono', 'monospace'],  // Police technique (Tags, Dates, Boutons)
}
```
Pour utiliser ces polices dans vos composants React (`.tsx`), utilisez simplement les classes `font-sans` ou `font-mono`.

---

## 🛠️ Comment ajouter de nouveaux styles ?

L'objectif est de garder une base de code propre et maintenable. Privilégiez l'approche suivante :

### 🌟 Méthode 1 : Utiliser les classes utilitaires Tailwind (Recommandé à 99%)
Dans vos fichiers `.tsx` (ex: `Experience.tsx`), utilisez toujours l'approche unitaire de Tailwind.
C'est la méthode de base du projet.
```tsx
// Bon exemple
<div className="flex flex-col bg-surface border border-border mt-4 p-6 rounded-xl hover:bg-white/[0.04] transition-colors">
```

### 🌟 Méthode 2 : Custom CSS dans `index.html` (Exceptionnel)
Si vous devez intégrer une règle CSS lourde qui ne peut pas être gérée par Tailwind (comme des scrollbars personnalisées, ou des styles imposés par une librairie externe comme le *Smooth Scroll Lenis*), vous devez l'ajouter dans la balise `<style>` du fichier `index.html`.

Voici ce que gère actuellement le Custom CSS du projet :
*   Les resets critiques de la balise `<body>` et de l'antialiasing (`-webkit-font-smoothing`).
*   Le design spécifique de la **Scrollbar** du navigateur (`::-webkit-scrollbar`).
*   Les styles forcés pour la librairie de défilement fluide **Lenis** (`.lenis.lenis-smooth`).
*   Quelques classes utilitaires "hybrides" comme `.tech-label` ou `.tech-heading` (bien qu'il soit souvent préférable de les refactoriser en composants React ou variables Tailwind).

---

## 🚀 Résumé de la procédure d'édition

1. **Changer une couleur ou un arrondi de base** ➡️ Allez dans `index.html` > `<script> tailwind.config... </script>`.
2. **Ajouter un effet visuel sur un élément** ➡️ Modifiez les classes Tailwind dans le `.tsx` cible.
3. **Modifier le Scroll ou un comportement natif du navigateur** ➡️ Allez dans `index.html` > `<style> ... </style>`.
