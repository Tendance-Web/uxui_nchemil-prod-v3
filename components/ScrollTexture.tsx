import React from 'react';

export const ScrollTexture: React.FC = () => {
  return (
    <div 
      className="fixed inset-0 z-0 pointer-events-none opacity-80" 
      style={{
        backgroundImage: `url("https://raw.githubusercontent.com/Tendance-Web/visuelsPortfolio/main/images/conception/nnnoise.svg")`,
        backgroundRepeat: 'repeat',
        backgroundSize: '500px'
      }}
    />
  );
};