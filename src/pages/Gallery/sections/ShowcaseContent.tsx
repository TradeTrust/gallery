import React, { useState, JSX, useEffect } from 'react';
import { Document, getDocuments } from '../../../data/DocumentsData';
import { Card } from '@/card';
import { QRCodeDialog } from '../../../components/content/QRCodeDialog';
import { DocumentPreview } from '../../../components/content/DocumentPreview';
import { DocumentInfo } from '../../../components/content/DocumentInfo';
import { DocumentStatus } from '../../../components/content/DocumentStatus';
import { SelectedStatus } from '../../../types/types';

export const ShowcaseContent = (): JSX.Element => {
  const [documents, setDocuments] = useState<Document[]>([]);
  const [selectedSchemas, setSelectedSchemas] = useState<Record<number, string>>({});
  const [selectedStatus, setSelectedStatus] = useState<SelectedStatus>(null);

  useEffect(() => {
    const init = async () => {
      const docs = await getDocuments();
      setDocuments(docs);
      setSelectedSchemas(Object.fromEntries(docs.map((doc) => [doc.id, doc.schemas[0]])));
    };
    init();
  }, []);

  const handleSchemaChange = (id: number, newSchema: string) => {
    setSelectedSchemas((prev) => ({ ...prev, [id]: newSchema }));
  };

  return (
    <section className="relative z-10 flex flex-col max-w-screen-xl items-center gap-6 p-8 w-full">
      {documents.map((doc) => (
        <Card
          key={doc.id}
          className="flex flex-wrap min-w-[340px] min-h-72 items-start gap-0 w-full rounded-xl bg-white relative overflow-visible"
        >
          <DocumentPreview image={doc.image} name={doc.title} imageAlt={doc.imageAlt} />
          <DocumentInfo
            id={doc.id}
            badgeColor={doc.badgeColor}
            badgeText={doc.badgeText}
            title={doc.title}
            description={doc.description}
            schemas={doc.schemas}
            selectedSchema={selectedSchemas[doc.id]}
            onSchemaChange={handleSchemaChange}
          />
          <DocumentStatus
            id={doc.id}
            title={doc.title}
            statuses={doc.statuses}
            selectedSchema={selectedSchemas[doc.id]}
            onStatusClick={setSelectedStatus}
          />
        </Card>
      ))}
      <QRCodeDialog status={selectedStatus} onClose={() => setSelectedStatus(null)} />
    </section>
  );
};
