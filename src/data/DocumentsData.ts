import bol_inoperative from '../../public/static/bill-of-lading-inoperative.json';
import bol_operative from '../../public/static/bill-of-lading-operative.json';
import coo_default from '../../public/static/certificate-of-origin-default.json';
import coo_expired from '../../public/static/certificate-of-origin-expired.json';
import coo_redacted from '../../public/static/certificate-of-origin-redacted.json';
import coo_revoked from '../../public/static/certificate-of-origin-revoked.json';
import epn_inoperative from '../../public/static/electronic-promissory-note-inoperative.json';
import epn_operative from '../../public/static/electronic-promissory-note-operative.json';
import inv_default from '../../public/static/invoice-default.json';
import inv_expired from '../../public/static/invoice-expired.json';
import inv_redacted from '../../public/static/invoice-redacted.json';
import inv_revoked from '../../public/static/invoice-revoked.json';
import whr_inoperative from '../../public/static/warehouse-receipt-inoperative.json';
import whr_operative from '../../public/static/warehouse-receipt-operative.json';

type SchemaType = 'W3C VC' | 'OA (Legacy)';

interface DocumentStatus {
  label: string;
  url: Record<SchemaType, string>;
}

interface Document {
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

export const documents: Document[] = [
  {
    id: 1,
    image: '/coo.png',
    imageAlt: 'Coo',
    badgeText: 'Verifiable Document',
    badgeColor: 'bg-[#ffecc3] text-[#7a6007]',
    title: 'Certificate of Origin (CoO)',
    description: 'A document certifying the country in which a product was manufactured, grown, or processed.',
    schemas: ['W3C VC', 'OA (Legacy)'] as SchemaType[],
    statuses: [
      { label: 'Default', url: { 'W3C VC': coo_default.qrCode.uri, 'OA (Legacy)': '' } },
      { label: 'Redacted', url: { 'W3C VC': coo_redacted.qrCode.uri, 'OA (Legacy)': '' } },
      { label: 'Revoked', url: { 'W3C VC': coo_revoked.qrCode.uri, 'OA (Legacy)': '' } },
      { label: 'Expired', url: { 'W3C VC': coo_expired.qrCode.uri, 'OA (Legacy)': '' } },
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
    schemas: ['W3C VC', 'OA (Legacy)'] as SchemaType[],
    statuses: [
      { label: 'Operative', url: { 'W3C VC': epn_operative.qrCode.uri, 'OA (Legacy)': '' } },
      { label: 'Inoperative', url: { 'W3C VC': epn_inoperative.qrCode.uri, 'OA (Legacy)': '' } },
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
    schemas: ['W3C VC', 'OA (Legacy)'] as SchemaType[],
    statuses: [
      { label: 'Operative', url: { 'W3C VC': bol_operative.qrCode.uri, 'OA (Legacy)': '' } },
      { label: 'Inoperative', url: { 'W3C VC': bol_inoperative.qrCode.uri, 'OA (Legacy)': '' } },
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
    schemas: ['W3C VC', 'OA (Legacy)'] as SchemaType[],
    statuses: [
      { label: 'Default', url: { 'W3C VC': inv_default.qrCode.uri, 'OA (Legacy)': '' } },
      { label: 'Redacted', url: { 'W3C VC': inv_redacted.qrCode.uri, 'OA (Legacy)': '' } },
      { label: 'Revoked', url: { 'W3C VC': inv_revoked.qrCode.uri, 'OA (Legacy)': '' } },
      { label: 'Expired', url: { 'W3C VC': inv_expired.qrCode.uri, 'OA (Legacy)': '' } },
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
    schemas: ['W3C VC', 'OA (Legacy)'] as SchemaType[],
    statuses: [
      { label: 'Operative', url: { 'W3C VC': whr_operative.qrCode.uri, 'OA (Legacy)': '' } },
      { label: 'Inoperative', url: { 'W3C VC': whr_inoperative.qrCode.uri, 'OA (Legacy)': '' } },
    ],
  },
];
