import React, { useState } from 'react';
import { Dialog, DialogClose, DialogContent } from '../ui/dialog';
import { Button } from '../ui/button';

export const ExpandPreview = ({
  image,
  name,
  isOpen,
  onClose,
}: {
  image: string;
  name: string;
  isOpen: boolean;
  onClose: () => void;
}) => {
  const MAX = 200;
  const MIN = 100;
  const [zoom, setZoom] = useState(MIN);
  return (
    <Dialog open={isOpen}>
      <DialogContent
        onInteractOutside={(e) => {
          e.preventDefault();
        }}
        onEscapeKeyDown={(e) => {
          e.preventDefault();
        }}
        className="shadow-none border-none bg-white z-50 p-0 m-0 block w-full max-w-[640px] min-w-[308px] h-auto flex flex-col rounded-xl sm:rounded-xl text-neutral-600"
        style={{ width: 'calc(100vw - (15px * 2))' }}
      >
        <div id="header" className="flex flex-none items-center gap-4 min-[596px]:flex-nowrap p-6 pt-4 pb-2">
          <h3 className="text-[26px] font-normal leading-[1.25] font-ubuntu">Document Preview</h3>
        </div>
        <div className="flex flex-col sm:flex-row items-center px-6 w-full gap-2">
          <div id="name" className="w-full sm:w-1/2">
            <p>{name}</p>
          </div>

          <div className="w-full sm:w-1/2 flex items-center justify-between">
            <div className="flex items-center justify-between w-5/6 gap-1">
              <p className="cursor-pointer hover:font-bold mb-[4px]" onClick={() => setZoom(Math.max(MIN, zoom - 5))}>
                -
              </p>

              <input
                type="range"
                min={MIN}
                max={MAX}
                value={zoom}
                onChange={(e) => setZoom(parseInt(e.target.value))}
                className="h-[3px] w-11/12 range-custom cursor-pointer"
              />

              <p className="cursor-pointer hover:font-bold mb-[4px]" onClick={() => setZoom(Math.min(MAX, zoom + 5))}>
                +
              </p>
            </div>
            <p className="text-sm px-2 w-1/6 mb-1">{zoom}%</p>
          </div>
        </div>

        <div id="body" className="px-6">
          <div
            id="scrollbar"
            className="mx-auto h-[444px] overflow-auto bg-[rgb(231,234,236)] rounded-xl border border-transparent"
          >
            <div
              className="rounded-xl "
              style={{
                width: `${zoom}%`,
                height: `${zoom}%`,
                transformOrigin: 'top left',
              }}
            >
              <img src={image} alt="Document Preview Image" className="rounded-xl p-2" />
            </div>
          </div>
        </div>

        <div id="footer" className="p-6  pt-0">
          <div className="flex flex-col xs:flex-row items-center justify-between gap-2">
            <DialogClose asChild>
              <Button
                className="ml-auto text-white hover:opacity-90 w-56"
                style={{ backgroundColor: 'rgba(45, 95, 170, 1)' }}
                onClick={onClose}
              >
                Dismiss
              </Button>
            </DialogClose>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};
