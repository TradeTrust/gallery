import React from 'react';

export const BackgroundImageLayer = () => (
  <div className="absolute top-[88px] left-0 w-full h-[316px] -z-20 flex justify-center">
    <div className="relative flex-1 min-w-full grow -my-[1442px]">
      <img
        className="absolute left-0 top-[650px] w-full h-[1846px] object-cover scale-[1.4]"
        alt="Background"
        src="/bg.png"
        style={{
          maskImage: 'linear-gradient(to top, transparent 0%, black 30%)',
          WebkitMaskImage: 'linear-gradient(to top, transparent 0%, black 30%)',
        }}
      />
    </div>
  </div>
);
