import { ChevronRightIcon, ExpandIcon } from 'lucide-react';
import React, { JSX } from 'react';
import { Badge } from '../../../../components/ui/badge';
import { Button } from '../../../../components/ui/button';
import { Card } from '../../../../components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../../../../components/ui/select';
import { Separator } from '../../../../components/ui/separator';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../../../../components/ui/tabs';

// Document data for mapping
const documents = [
  {
    id: 1,
    image: '/coo.png',
    imageAlt: 'Coo',
    badgeType: 'verifiable',
    badgeText: 'Verifiable Document',
    badgeColor: 'bg-[#ffecc3] text-[#7a6007]',
    title: 'Certificate of Origin (CoO)',
    description: 'A document certifying the country in which a product was manufactured, grown, or processed.',
    schema: 'W3C VC',
    statuses: ['Default', 'Redacted', 'Revoked', 'Expired'],
  },
  {
    id: 2,
    image: '/promissory-note.png',
    imageAlt: 'Promissory note',
    badgeType: 'transferable',
    badgeText: 'Transferable Record',
    badgeColor: 'bg-[#e5ecff] text-[#0061c1]',
    title: 'Electronic Promissory Note (ePN)',
    description:
      'A digital equivalent of a paper-based promissory note, representing a legally binding agreement to repay a debt.',
    schema: 'W3C VC',
    statuses: ['Operative', 'Inoperative'],
  },
  {
    id: 3,
    image: '/bill-of-lading--carrier-.png',
    imageAlt: 'Bill of lading',
    badgeType: 'transferable',
    badgeText: 'Transferable Record',
    badgeColor: 'bg-[#e5ecff] text-[#0061c1]',
    title: 'Electronic Bill of Lading (eBL)',
    description: 'A digital record of a shipment, serving as a receipt, contract of carriage, and document of title.',
    schema: 'W3C VC',
    statuses: ['Operative', 'Inoperative'],
  },
  {
    id: 4,
    image: '/invoice-tablet.png',
    imageAlt: 'Invoice tablet',
    badgeType: 'verifiable',
    badgeText: 'Verifiable Document',
    badgeColor: 'bg-[#ffecc3] text-[#7a6007]',
    title: 'Invoice',
    description:
      'A commercial document issued by a seller to a buyer, detailing the products or services provided, their quantities and agreed prices, and the total amount due.',
    schema: 'W3C VC',
    statuses: ['Default', 'Redacted', 'Revoked', 'Expired'],
  },
  {
    id: 5,
    image: '/warehousereciept.png',
    imageAlt: 'Warehousereciept',
    badgeType: 'transferable',
    badgeText: 'Transferable Record',
    badgeColor: 'bg-[#e5ecff] text-[#0061c1]',
    title: 'Warehouse Receipt',
    description: 'A document issued by a warehouse operator acknowledging the receipt of goods for storage.',
    schema: 'W3C VC',
    statuses: ['Operative', 'Inoperative'],
  },
];

export const SectionWrapper = (): JSX.Element => {
  return (
    <section className="flex flex-col max-w-screen-xl items-center gap-6 p-8 w-full shadow-[0px_12px_32px_#2d5faa29,0px_2px_8px_#2d5faa3d]">
      {documents.map((document) => (
        <Card
          key={document.id}
          className="flex flex-wrap min-w-[340px] min-h-72 items-start gap-0 w-full rounded-xl overflow-hidden relative"
        >
          {/* Document Preview Section */}
          <div className="relative flex-1 min-w-[300px] grow h-72">
            <div className="flex flex-col w-full h-72 items-center p-8">
              <div className="flex flex-col items-center gap-2.5 relative flex-1 self-stretch w-full grow shadow-[0px_8px_24px_#2d5faa29,0px_2px_4px_#2d5faa3d]">
                <img
                  className="relative self-stretch w-full h-64 mb-[-32px]"
                  alt={document.imageAlt}
                  src={document.image}
                />
              </div>
            </div>

            <div className="absolute top-0 left-0 p-4">
              <Button
                variant="default"
                className="h-9 bg-interactive-componentsolid-bgenabledbgneutraldefault text-interactive-componentsolid-bgenabledcontentdefault rounded-xl"
              >
                <ExpandIcon className="w-4 h-4 mr-1" />
                <span className="font-headers-paragraphs-header">Expand Preview</span>
              </Button>
            </div>
          </div>

          {/* Document Info Section */}
          <div className="flex flex-col min-w-[300px] items-start p-4 relative flex-1 grow">
            <div className="justify-center p-1 self-stretch w-full flex-[0_0_auto] flex flex-col items-start">
              <div className="inline-flex items-center p-1">
                <Badge
                  className={`${document.badgeColor} rounded-2xl px-2 py-1 font-micro-metadata-heavy-micro-metadata`}
                >
                  {document.badgeText}
                </Badge>
              </div>
            </div>

            <div className="p-1 self-stretch w-full flex-[0_0_auto] flex flex-col items-start">
              <div className="flex items-center gap-2.5 p-1 relative self-stretch w-full">
                <h3 className="flex-1 mt-[-1px] font-h5 text-doc-header">{document.title}</h3>
              </div>

              <div className="flex items-center gap-2.5 p-1 relative self-stretch w-full">
                <p className="flex-1 mt-[-1px] font-h6 text-neutralsgrey-1">{document.description}</p>
              </div>
            </div>

            <div className="justify-center p-1 self-stretch w-full flex flex-col items-start">
              <div className="flex w-full items-center gap-2.5 p-1">
                <p className="flex-1 mt-[-1px] font-h6 text-neutralsgrey-1">Schema:</p>
              </div>

              <div className="inline-flex items-center p-1">
                <Select defaultValue={document.schema}>
                  <SelectTrigger className="bg-neutralsgrey-6 rounded h-6 px-1 py-0 font-metadata-medium-metadata text-doc-header">
                    <SelectValue placeholder="Select schema" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="W3C VC">W3C VC</SelectItem>
                    <SelectItem value="OA (Legacy)">OA (Legacy)</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>

          {/* Document Status Section */}
          <div className="min-w-[300px] p-4 flex-1 grow flex flex-col items-start relative">
            <Tabs defaultValue={document.statuses[0].toLowerCase()} className="w-full">
              <TabsList className="flex flex-col w-full space-y-0 bg-transparent p-0">
                {document.statuses.map((status, index) => (
                  <React.Fragment key={status}>
                    <div className="flex items-center w-full">
                      <div className="p-2">
                        <div className="inline-flex items-center justify-center p-2 rounded-xl border border-[#e2e3e7]">
                          <div className="w-4 h-4 flex items-center justify-center">
                            <img
                              className="w-[13px] h-[13px]"
                              alt="Vector"
                              src={status === 'Redacted' ? '/vector-5.svg' : '/vector-4.svg'}
                            />
                          </div>
                        </div>
                      </div>

                      <img className="self-stretch" alt="Padded frame" src="/padded-frame.svg" />

                      <TabsTrigger
                        value={status.toLowerCase()}
                        className={`flex min-w-[180px] items-center p-2 flex-1 justify-between rounded-lg ${status === 'Redacted' ? 'bg-neutralsgrey-6' : ''}`}
                      >
                        <span className="font-h5 text-app-primary">{status}</span>
                        <ChevronRightIcon className="w-4 h-4" />
                      </TabsTrigger>
                    </div>

                    {index < document.statuses.length - 1 && <Separator className="w-full" />}
                  </React.Fragment>
                ))}
              </TabsList>

              {document.statuses.map((status) => (
                <TabsContent key={status} value={status.toLowerCase()} className="mt-0">
                  {/* Content for each status tab would go here */}
                </TabsContent>
              ))}
            </Tabs>
          </div>

          {/* Background gradient and image */}
          <div className="absolute w-full h-72 top-0 left-0 z-0 rounded-xl overflow-hidden [background:radial-gradient(50%_50%_at_0%_100%,rgba(45,95,170,0.08)_0%,rgba(45,95,170,0.06)_50%,rgba(45,95,170,0)_100%)]">
            <img className="absolute w-[545px] h-72 top-0 left-0 object-cover" alt="Motif" src="/motif-4.png" />
          </div>
        </Card>
      ))}
    </section>
  );
};
