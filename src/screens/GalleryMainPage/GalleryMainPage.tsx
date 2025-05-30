import React, { JSX } from 'react';
import { Card, CardContent } from '../../components/ui/card';
import { NavBar } from './sections/NavBar';
import { Section } from './sections/Section/Section';
import { SectionWrapper } from './sections/SectionWrapper/SectionWrapper';

export const GalleryMainPage = (): JSX.Element => {
  return (
    <div className="flex flex-col items-center justify-center relative overflow-hidden w-full">
      {/* Navigation Bar Section */}
      <NavBar />

      {/* Main Content Sections */}
      <Section />
      <SectionWrapper />

      {/* Disclaimer Section */}
      <Card className="z-[2] flex flex-col max-w-screen-xl items-center w-full shadow-[0px_12px_32px_#2d5faa29,0px_2px_8px_#2d5faa3d] border-none">
        <CardContent className="p-8 w-full">
          <p className="relative self-stretch mt-[-1.00px] [font-family:'Gilroy-Medium',Helvetica] font-medium text-neutralsgrey-1 text-base tracking-[0] leading-5">
            Disclaimer: These documents are for demonstration and testing purposes only. Not intended for production or
            real-world use. May contain placeholder data and test values. Should not be used as templates for actual
            transactions.
          </p>
        </CardContent>
      </Card>

      {/* Background Elements */}
      <div className="flex w-full h-[316px] justify-center gap-2.5 absolute top-[88px] left-0 -z-10">
        <div className="relative flex-1 min-w-full grow mt-[-1442.00px] mb-[-1442.00px]">
          <img
            className="w-full h-[1846px] top-[604px] object-cover absolute left-0 scale-[1.4]"
            alt="Background"
            src="/bg.png"
          />
        </div>
      </div>

      {/* Gradient Background Elements */}
      <div className="absolute w-[3139px] h-[3931px] top-[-753px] left-[-610px] z-[-1] opacity-50">
        <div className="relative w-[1920px] h-[2424px] top-[753px] left-[610px]">
          <img
            className="absolute w-[1838px] h-[2424px] top-0 left-[82px]"
            alt="Gradient right"
            src="/gradient-right-1.png"
          />

          <img
            className="h-[1515px] top-[909px] absolute w-[855px] left-0"
            alt="Gradient left"
            src="/gradient-left-2.png"
          />

          <img className="h-[1516px] top-0 absolute w-[855px] left-0" alt="Gradient left" src="/gradient-left-1.png" />

          <img
            className="absolute w-[1920px] h-[674px] top-[1750px] left-0"
            alt="Gradient bottom"
            src="/gradient-bottom.png"
          />
        </div>
      </div>
    </div>
  );
};
