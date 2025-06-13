import React, { useState } from 'react';
import { Button } from '../ui/button';
import { ExpandIcon } from 'lucide-react';
import { ExpandPreview } from './ExpandPreview';

export const DocumentPreview = ({ image, name, imageAlt }: { image: string; name: string; imageAlt: string }) => {
  const [expandPreview, setExpandPreview] = useState(false);
  return (
    <div className="relative flex-1 min-w-[300px] grow h-72 bg-[url('/card-motif.png')] bg-contain bg-no-repeat">
      <div className="flex flex-col w-full h-72 items-center p-8">
        <div className="flex flex-col items-center gap-2.5 relative flex-1 self-stretch w-full grow shadow-[0px_8px_24px_#2d5faa29,0px_2px_4px_#2d5faa3d]">
          <img className="relative self-stretch w-full h-64 mb-[-32px]" alt={imageAlt} src={image} />
        </div>
      </div>

      <div className="absolute top-0 left-0 p-4">
        <Button
          variant="default"
          className="h-9 bg-interactive-componentsolid-bgenabledbgneutraldefault text-interactive-componentsolid-bgenabledcontentdefault rounded-xl"
          onClick={() => setExpandPreview(true)}
        >
          <ExpandIcon className="w-4 h-4 mr-1" />
          <span className="font-headers-paragraphs-header">Expand Preview</span>
        </Button>
      </div>
      <ExpandPreview image={image} name={name} isOpen={expandPreview} onClose={() => setExpandPreview(false)} />
    </div>
  );
};
