import React, { JSX } from 'react';

export const ShowcaseHeader = (): JSX.Element => {
  return (
    <section className="flex flex-col items-center w-full py-12 sm:py-16 mt-56 px-4 sm:px-0">
      <div className="max-w-2xl mx-auto text-center">
        <h1
          className="
            text-doc-header font-h1 
            text-[length:var(--h1-font-size)] sm:text-[length:calc(var(--h1-font-size)*1.2)] 
            font-[number:var(--h1-font-weight)] 
            tracking-[var(--h1-letter-spacing)] 
            leading-[var(--h1-line-height)] 
            [font-style:var(--h1-font-style)] 
            [text-shadow:0px_0px_12px_#ffffff80] 
            mb-4 sm:mb-6
          "
        >
          Document Showcase
        </h1>

        <p className="paragraph text-sm sm:text-base leading-relaxed sm:leading-7 max-w-prose mx-auto">
          Browse our showcase of TradeTrust-supported documents, featuring both Verifiable Documents and Electronic
          Transfer Records. Each document demonstrates our QR-code capability, linking directly to ref.tradetrust.io for
          seamless verification.
        </p>
      </div>
    </section>
  );
};
