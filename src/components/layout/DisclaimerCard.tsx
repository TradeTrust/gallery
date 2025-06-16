import React from 'react';
import { Card, CardContent } from '@/card';

export const DisclaimerCard = () => (
  <Card className="z-20 flex flex-col max-w-screen-xl items-center w-full border-none">
    <CardContent className="w-full">
      <p className="p-8 w-full text-base leading-5 font-medium text-neutralsgrey-1">
        Disclaimer: These documents are for demonstration and testing purposes only. Not intended for production or
        real-world use. May contain placeholder data and test values. Should not be used as templates for actual
        transactions.
      </p>
    </CardContent>
  </Card>
);
