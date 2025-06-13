import React from 'react';

export const GradientBackground = () => (
  <div
    className="absolute inset-0 -z-30 bg-cover bg-top"
    style={{
      backgroundImage: `
          linear-gradient(to bottom, #F7F8FC 0%, rgba(247, 248, 252, 0.9) 30%, rgba(247, 248, 252, 0.6) 60%, rgba(247, 248, 252, 0) 100%),
          url('/gradient-bg.png')
        `,
    }}
  />
);
