type SchemaType = 'W3C VC' | 'OA (Legacy)';

interface DocumentStatus {
  label: string;
  url: Record<SchemaType, string>;
}

export interface Document {
  id: number;
  image: string;
  imageAlt: string;
  badgeText: string;
  badgeColor: string;
  title: string;
  description: string;
  schemas: SchemaType[];
  statuses: DocumentStatus[];
}

const fetchDocument = async (filename: string) => {
  const res = await fetch(`/static/${filename}`);
  if (!res.ok) throw new Error(`Failed to fetch ${filename}`);
  return res.json();
};

const loadDocuments = async () => {
  const filenames = {
    coo_default: 'certificate-of-origin-default.json',
    coo_redacted: 'certificate-of-origin-redacted.json',
    coo_revoked: 'certificate-of-origin-revoked.json',
    coo_expired: 'certificate-of-origin-expired.json',
    epn_operative: 'electronic-promissory-note-operative.json',
    epn_inoperative: 'electronic-promissory-note-inoperative.json',
    bol_operative: 'bill-of-lading-operative.json',
    bol_inoperative: 'bill-of-lading-inoperative.json',
    inv_default: 'invoice-default.json',
    inv_redacted: 'invoice-redacted.json',
    inv_revoked: 'invoice-revoked.json',
    inv_expired: 'invoice-expired.json',
    whr_operative: 'warehouse-receipt-operative.json',
    whr_inoperative: 'warehouse-receipt-inoperative.json',
    coo_default_oa: 'OA/certificate-of-origin-default.json',
    coo_redacted_oa: 'OA/certificate-of-origin-redacted.json',
    coo_revoked_oa: 'OA/certificate-of-origin-revoked.json',
    coo_expired_oa: 'OA/certificate-of-origin-expired.json',
    epn_operative_oa: 'OA/electronic-promissory-note-operative.json',
    epn_inoperative_oa: 'OA/electronic-promissory-note-inoperative.json',
    bol_operative_oa: 'OA/bill-of-lading-operative.json',
    bol_inoperative_oa: 'OA/bill-of-lading-inoperative.json',
    inv_default_oa: 'OA/invoice-default.json',
    inv_redacted_oa: 'OA/invoice-redacted.json',
    inv_revoked_oa: 'OA/invoice-revoked.json',
    inv_expired_oa: 'OA/invoice-expired.json',
    whr_operative_oa: 'OA/warehouse-receipt-operative.json',
    whr_inoperative_oa: 'OA/warehouse-receipt-inoperative.json',
  };

  const entries = await Promise.all(
    Object.entries(filenames).map(async ([key, file]) => {
      const data = await fetchDocument(file);
      return [key, data];
    }),
  );

  return Object.fromEntries(entries);
};

const decodeOAString = (value: string) => {
  try {
    const parts = value.split(':');
    const encodedPart = parts.slice(2).join(':');
    return decodeURIComponent(encodedPart);
  } catch {
    return value;
  }
};

export const getDocuments = async (): Promise<Document[]> => {
  const docs = await loadDocuments();

  return [
    {
      id: 1,
      image: '/coo.png',
      imageAlt: 'Coo',
      badgeText: 'Verifiable Document',
      badgeColor: 'bg-[#ffecc3] text-[#7a6007]',
      title: 'Certificate of Origin (CoO)',
      description: 'A document certifying the country in which a product was manufactured, grown, or processed.',
      schemas: ['W3C VC', 'OA (Legacy)'],
      statuses: [
        {
          label: 'Default',
          url: {
            'W3C VC': decodeURIComponent(docs.coo_default.qrCode.uri),
            'OA (Legacy)': decodeOAString(docs.coo_default_oa.data.links.self.href),
          },
        },
        {
          label: 'Redacted',
          url: {
            'W3C VC': decodeURIComponent(docs.coo_redacted.qrCode.uri),
            'OA (Legacy)': decodeOAString(docs.coo_redacted_oa.data.links.self.href),
          },
        },
        {
          label: 'Revoked',
          url: {
            'W3C VC': decodeURIComponent(docs.coo_revoked.qrCode.uri),
            'OA (Legacy)': decodeOAString(docs.coo_revoked_oa.data.links.self.href),
          },
        },
        {
          label: 'Expired',
          url: {
            'W3C VC': decodeURIComponent(docs.coo_expired.qrCode.uri),
            'OA (Legacy)': decodeOAString(docs.coo_expired_oa.data.links.self.href),
          },
        },
      ],
    },
    {
      id: 2,
      image: '/epn.png',
      imageAlt: 'Promissory Note',
      badgeText: 'Transferable Record',
      badgeColor: 'bg-[#e5ecff] text-[#0061c1]',
      title: 'Electronic Promissory Note (ePN)',
      description:
        'A digital equivalent of a paper-based promissory note, representing a legally binding agreement to repay a debt.',
      schemas: ['W3C VC', 'OA (Legacy)'],
      statuses: [
        {
          label: 'Operative',
          url: {
            'W3C VC': decodeURIComponent(docs.epn_operative.qrCode.uri),
            'OA (Legacy)': decodeOAString(docs.epn_operative_oa.data.links.self.href),
          },
        },
        {
          label: 'Inoperative',
          url: {
            'W3C VC': decodeURIComponent(docs.epn_inoperative.qrCode.uri),
            'OA (Legacy)': decodeOAString(docs.epn_inoperative_oa.data.links.self.href),
          },
        },
      ],
    },
    {
      id: 3,
      image: '/bill-of-lading.png',
      imageAlt: 'Bill of Lading',
      badgeText: 'Transferable Record',
      badgeColor: 'bg-[#e5ecff] text-[#0061c1]',
      title: 'Electronic Bill of Lading (eBL)',
      description: 'A digital record of a shipment, serving as a receipt, contract of carriage, and document of title.',
      schemas: ['W3C VC', 'OA (Legacy)'],
      statuses: [
        {
          label: 'Operative',
          url: {
            'W3C VC': decodeURIComponent(docs.bol_operative.qrCode.uri),
            'OA (Legacy)': decodeOAString(docs.bol_operative_oa.data.links.self.href),
          },
        },
        {
          label: 'Inoperative',
          url: {
            'W3C VC': decodeURIComponent(docs.bol_inoperative.qrCode.uri),
            'OA (Legacy)': decodeOAString(docs.bol_inoperative_oa.data.links.self.href),
          },
        },
      ],
    },
    {
      id: 4,
      image: '/invoice.png',
      imageAlt: 'Invoice',
      badgeText: 'Verifiable Document',
      badgeColor: 'bg-[#ffecc3] text-[#7a6007]',
      title: 'Invoice',
      description:
        'A commercial document issued by a seller to a buyer, detailing the products or services provided, their quantities and agreed prices, and the total amount due.',
      schemas: ['W3C VC', 'OA (Legacy)'],
      statuses: [
        {
          label: 'Default',
          url: {
            'W3C VC': decodeURIComponent(docs.inv_default.qrCode.uri),
            'OA (Legacy)': decodeOAString(docs.inv_default_oa.data.links.self.href),
          },
        },
        {
          label: 'Redacted',
          url: {
            'W3C VC': decodeURIComponent(docs.inv_redacted.qrCode.uri),
            'OA (Legacy)': decodeOAString(docs.inv_redacted_oa.data.links.self.href),
          },
        },
        {
          label: 'Revoked',
          url: {
            'W3C VC': decodeURIComponent(docs.inv_revoked.qrCode.uri),
            'OA (Legacy)': decodeOAString(docs.inv_revoked_oa.data.links.self.href),
          },
        },
        {
          label: 'Expired',
          url: {
            'W3C VC': decodeURIComponent(docs.inv_expired.qrCode.uri),
            'OA (Legacy)': decodeOAString(docs.inv_expired_oa.data.links.self.href),
          },
        },
      ],
    },
    {
      id: 5,
      image: '/warehouse-reciept.png',
      imageAlt: 'Warehouse Reciept',
      badgeText: 'Transferable Record',
      badgeColor: 'bg-[#e5ecff] text-[#0061c1]',
      title: 'Warehouse Receipt',
      description: 'A document issued by a warehouse operator acknowledging the receipt of goods for storage.',
      schemas: ['W3C VC', 'OA (Legacy)'],
      statuses: [
        {
          label: 'Operative',
          url: {
            'W3C VC': decodeURIComponent(docs.whr_operative.qrCode.uri),
            'OA (Legacy)': decodeOAString(docs.whr_operative_oa.data.links.self.href),
          },
        },
        {
          label: 'Inoperative',
          url: {
            'W3C VC': decodeURIComponent(docs.whr_inoperative.qrCode.uri),
            'OA (Legacy)': decodeOAString(docs.whr_inoperative_oa.data.links.self.href),
          },
        },
      ],
    },
  ];
};
