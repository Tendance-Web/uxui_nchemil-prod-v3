# Guidelines : Rendu homogène des filtres SVG (Noise/Bruit) inter-navigateurs

## 🛑 Le Problème
Lors de l'utilisation de filtres SVG complexes pour générer du bruit (noise) ou des textures, notamment avec `<feTurbulence>` et `<feSpecularLighting>`, il est très fréquent d'observer une grande différence de rendu entre les navigateurs :
*   **Firefox** : Affiche correctement les pixels clairs/lumineux du bruit.
*   **Google Chrome / Safari** : Le rendu est très sombre, parfois presque totalement invisible ou "écrasé".

## ✅ La Solution (Le correctif "sRGB")
La différence de rendu provient de l'espace colorimétrique utilisé par défaut par le moteur de rendu du navigateur pour calculer la lumière et les filtres. Chrome utilise par défaut l'espace `linearRGB`, ce qui assombrit considérablement l'algorithme d'éclairage spéculaire du bruit.

Pour forcer tous les navigateurs à avoir le rendu lumineux de Firefox, il faut **explicitement définir l'interpolation des couleurs du filtre sur "sRGB"**.

### 1. Structure du SVG corrigée
Voici la structure optimale à utiliser pour un fond granuleux blanc destiné à être superposé sur un fond sombre :

```xml
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 700 700" width="700" height="700">
  <defs>
    <!-- ⚠️ L'ATTRIBUT MAGIQUE EST ICI : color-interpolation-filters="sRGB" -->
    <filter id="nnnoise-filter" x="-20%" y="-20%" width="140%" height="140%" filterUnits="objectBoundingBox" primitiveUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
      
      <!-- Génération du bruit fractal -->
      <feTurbulence type="fractalNoise" baseFrequency="0.111" numOctaves="4" seed="15" stitchTiles="stitch" x="0%" y="0%" width="100%" height="100%" result="turbulence"/>
      
      <!-- Éclairage du bruit (définit la couleur et l'intensité des "grains") -->
      <feSpecularLighting surfaceScale="22" specularConstant="0.9" specularExponent="20" lighting-color="#ffffff" x="0%" y="0%" width="100%" height="100%" in="turbulence" result="specularLighting">
        <feDistantLight azimuth="3" elevation="100"/>
      </feSpecularLighting>
      
    </filter>
  </defs>
  
  <!-- Fond transparent de base -->
  <rect width="700" height="700" fill="transparent"/>
  <!-- Application du filtre sur une couche blanche -->
  <rect width="700" height="700" fill="#ffffff" filter="url(#nnnoise-filter)"/>
</svg>
```

### 2. Intégration en React (Composant de background)
Il est fortement recommandé d'encoder ce SVG localement en Data URI plutôt que de l'appeler via une URL web distante (`https://...`), afin d'éviter tout blocage de rendu du navigateur lié aux politiques CORS sur les filtres.

```tsx
import React from 'react';

// 1. On stocke le SVG complet sous forme de chaîne de caractères
const noiseSvg = `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 700 700" width="700" height="700">
  <defs>
    <filter id="nnnoise-filter" x="-20%" y="-20%" width="140%" height="140%" filterUnits="objectBoundingBox" primitiveUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
      <feTurbulence type="fractalNoise" baseFrequency="0.111" numOctaves="4" seed="15" stitchTiles="stitch" x="0%" y="0%" width="100%" height="100%" result="turbulence"/>
      <feSpecularLighting surfaceScale="22" specularConstant="0.9" specularExponent="20" lighting-color="#ffffff" x="0%" y="0%" width="100%" height="100%" in="turbulence" result="specularLighting">
        <feDistantLight azimuth="3" elevation="100"/>
      </feSpecularLighting>
    </filter>
  </defs>
  <rect width="700" height="700" fill="transparent"/>
  <rect width="700" height="700" fill="#ffffff" filter="url(#nnnoise-filter)"/>
</svg>
`;

// 2. On encode le SVG proprement pour l'utiliser en background-image CSS
const encodedNoise = \`data:image/svg+xml;utf8,\${encodeURIComponent(noiseSvg.trim())}\`;

export const ScrollTexture: React.FC = () => {
  return (
    <div
      className="fixed inset-0 z-0 pointer-events-none"
      style={{
        backgroundImage: \`url("\${encodedNoise}")\`,
        backgroundRepeat: 'repeat',
        backgroundSize: '400px', // Densité du grain
        opacity: 0.8, // Puissance visible du grain
        mixBlendMode: 'screen', // ⚠️ Crucial : Incruste le grain clair sur n'importe quel fond sombre en dessous
      }}
    />
  );
};
```

### Mémo des points clés de la méthode :
1.  **`color-interpolation-filters="sRGB"`** : Force Google Chrome à calculer les couleurs du filtre SVG de la même manière que Firefox.
2.  **Encodage URI Local** (`data:image/svg+xml`) : Fiabilise l'affichage instantané du motif de répétition et contourne les restrictions navigateurs par rapport aux ressources distantes instables.
3.  **`mixBlendMode: 'screen'`** : Garantit que seulement les grains clairs sont affichés par-dessus le reste du code, effaçant le fond naturel de l'image.
