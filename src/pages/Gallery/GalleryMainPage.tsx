import React, { JSX } from 'react';
import { BackgroundImageLayer } from '../../components/layout/BackgroundImageLayer';
import { DisclaimerCard } from '../../components/layout/DisclaimerCard';
import { GradientBackground } from '../../components/layout/GradientBackground';
import { NavBar } from './sections/NavBar';
import { ShowcaseHeader } from './sections/ShowcaseHeader';
import { ShowcaseContent } from './sections/ShowcaseContent';

export const GalleryMainPage = (): JSX.Element => {
  return (
    <div className="relative flex flex-col items-center justify-center w-full overflow-hidden">
      <GradientBackground />
      <BackgroundImageLayer />
      <main className="relative z-10 flex flex-col w-full items-center">
        <NavBar />
        <ShowcaseHeader />
        <ShowcaseContent />
        <DisclaimerCard />
      </main>
    </div>
  );
};
