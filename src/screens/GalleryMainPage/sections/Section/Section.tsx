import React, { JSX } from 'react';

export const Section = (): JSX.Element => {
  return (
    <section className="flex flex-col items-center w-full py-16 mt-40">
      <div className="max-w-2xl mx-auto text-center">
        <h1 className="text-doc-header font-h1 text-[length:var(--h1-font-size)] font-[number:var(--h1-font-weight)] tracking-[var(--h1-letter-spacing)] leading-[var(--h1-line-height)] [font-style:var(--h1-font-style)] [text-shadow:0px_0px_12px_#ffffff80] mb-6">
          Document Showcase
        </h1>

        <p className="text-neutralsgrey-1 font-paragraph text-[length:var(--paragraph-font-size)] font-[number:var(--paragraph-font-weight)] tracking-[var(--paragraph-letter-spacing)] leading-[var(--paragraph-line-height)] [font-style:var(--paragraph-font-style)] [text-shadow:0px_0px_12px_#ffffff80]">
          Browse our showcase of TradeTrust-supported documents, featuring both Verifiable Documents and Electronic
          Transfer Records. Each document demonstrates our QR-code capability, linking directly to ref.tradetrust.io for
          seamless verification.
        </p>
      </div>
    </section>
  );
};
