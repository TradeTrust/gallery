export type Status = {
  label: string;
  url: Record<string, string>;
};

export type SelectedStatus = {
  url: string;
  documentId: number;
  label: string;
  documentTitle: string;
} | null;

export type StatusProps = {
  id: number;
  title: string;
  statuses: Status[];
  selectedSchema: string;
  onStatusClick: (status: SelectedStatus) => void;
};

export type DocumentInfoProps = {
  id: number;
  badgeColor: string;
  badgeText: string;
  title: string;
  description: string;
  schemas: string[];
  selectedSchema: string;
  onSchemaChange: (id: number, schema: string) => void;
};
