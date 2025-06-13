import React from 'react';
import { Tabs, TabsList } from '../ui/tabs';
import { Dialog, DialogTrigger } from '../ui/dialog';
import { ChevronRightIcon } from 'lucide-react';
import { Separator } from '../ui/separator';
import { StatusProps } from '../../types/types';

export const DocumentStatus = ({ id, title, statuses, selectedSchema, onStatusClick }: StatusProps) => (
  <Dialog>
    <div className="min-w-[300px] h-64 p-4 flex-1 grow flex flex-col items-start relative">
      <Tabs defaultValue={statuses[0].label.toLowerCase()} className="w-full">
        <TabsList className="flex flex-col w-full bg-transparent p-0">
          {statuses.map((status, index) => (
            <React.Fragment key={status.label}>
              <div className="flex items-center w-full">
                <div className="p-2">
                  <DialogTrigger asChild>
                    <div
                      className="inline-flex items-center justify-center p-2 rounded-xl border border-[#e2e3e7] cursor-pointer"
                      onClick={() =>
                        onStatusClick({
                          url: status.url[selectedSchema],
                          documentId: id,
                          label: status.label,
                          documentTitle: title,
                        })
                      }
                    >
                      <div className="w-4 h-4 flex items-center justify-center">
                        <img className="w-[13px] h-[13px]" alt="Qrcode" src="/qrcode.svg" />
                      </div>
                    </div>
                  </DialogTrigger>
                </div>

                <img className="self-stretch" alt="Padded frame" src="/padded-frame.svg" />

                <a
                  href={status.url[selectedSchema]}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex min-w-[180px] items-center p-2 flex-1 justify-between rounded-lg"
                >
                  <span className="font-h5 font-bold text-app-primary">{status.label}</span>
                  <ChevronRightIcon className="w-4 h-4" />
                </a>
              </div>

              {index < statuses.length - 1 && <Separator className="w-full" />}
            </React.Fragment>
          ))}
        </TabsList>
      </Tabs>
    </div>
  </Dialog>
);
