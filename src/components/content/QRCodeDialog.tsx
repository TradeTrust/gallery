import React from 'react';
import { QRCodeSVG } from 'qrcode.react';
import { Dialog, DialogClose, DialogContent, DialogHeader, DialogTitle } from '@/dialog';
import { Button } from '@/button';
import { SelectedStatus } from '../../types/types';

export const QRCodeDialog = ({ status, onClose }: { status: SelectedStatus; onClose: () => void }) => (
  <Dialog open={!!status}>
    <DialogContent
      onInteractOutside={(e) => {
        e.preventDefault();
      }}
      onEscapeKeyDown={(e) => {
        e.preventDefault();
      }}
      className="text-center rounded-xl sm:rounded-xl"
      style={{ width: 'calc(100vw - (15px * 2))' }}
    >
      <DialogHeader>
        <DialogTitle>Verify {status?.documentTitle}</DialogTitle>
      </DialogHeader>
      <div className="-mx-6 h-px bg-gray-200" />
      <p className="mt-2 mb-4">
        {status?.documentTitle} - {status?.label}
      </p>
      <div className="w-full h-48 flex items-center justify-center rounded">
        <QRCodeSVG value={status?.url || ''} size={200} />
      </div>
      <p className="mt-4 text-sm text-gray-600">
        Scan this QR code to verify this document on <strong>ref.tradetrust.io</strong>
      </p>
      <div className="-mx-6 h-px bg-gray-200" />
      <DialogClose asChild>
        <Button
          className="ml-auto text-white hover:opacity-90 w-56"
          style={{ backgroundColor: 'rgba(45, 95, 170, 1)' }}
          onClick={onClose}
        >
          Dismiss
        </Button>
      </DialogClose>
    </DialogContent>
  </Dialog>
);
