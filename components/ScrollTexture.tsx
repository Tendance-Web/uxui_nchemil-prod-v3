import React from 'react';

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

const encodedNoise = `data:image/svg+xml;utf8,${encodeURIComponent(noiseSvg.trim())}`;

export const ScrollTexture: React.FC = () => {
  return (
    <div
      className="fixed inset-0 z-0 pointer-events-none"
      style={{
        backgroundImage: `url("${encodedNoise}")`,
        backgroundRepeat: 'repeat',
        backgroundSize: '400px',
        opacity: 0.35,
        mixBlendMode: 'screen',
      }}
    />
  );
};
