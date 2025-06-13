import React from 'react';
import { Badge } from '../ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select';
import { DocumentInfoProps } from '../../types/types';

export const DocumentInfo = ({
  id,
  badgeColor,
  badgeText,
  title,
  description,
  schemas,
  selectedSchema,
  onSchemaChange,
}: DocumentInfoProps) => (
  <div className="flex flex-col min-w-[300px] items-start p-4 relative flex-1 grow">
    <div className="justify-center p-1 self-stretch w-full flex flex-col items-start">
      <div className="inline-flex items-center p-1">
        <Badge
          className={`${badgeColor} rounded-2xl px-2 py-1 font-micro-metadata-heavy-micro-metadata`}
          variant="outline"
        >
          {badgeText}
        </Badge>
      </div>
    </div>

    <div className="p-1 self-stretch w-full flex flex-col items-start">
      <div className="flex items-center gap-2.5 p-1 w-full">
        <h3 className="flex-1 mt-[-1px] font-h5 font-bold text-doc-header">{title}</h3>
      </div>
      <div className="flex items-center gap-2.5 p-1 w-full">
        <p className="flex-1 mt-[-1px] font-h6 text-neutralsgrey-1">{description}</p>
      </div>
    </div>

    <div className="justify-center p-1 self-stretch w-full flex flex-col items-start">
      <div className="flex w-full items-center gap-2.5 p-1">
        <p className="flex-1 mt-[-1px] font-h6 text-neutralsgrey-1">Schema:</p>
      </div>
      <div className="inline-flex items-center p-1">
        <Select value={selectedSchema} onValueChange={(value) => onSchemaChange(id, value)}>
          <SelectTrigger className="bg-neutralsgrey-6 rounded h-6 px-1 py-0 font-metadata-medium-metadata text-doc-header min-w-[8rem]">
            <SelectValue placeholder="Select schema" />
          </SelectTrigger>
          <SelectContent>
            {schemas.map((schema) => (
              <SelectItem key={schema} value={schema}>
                {schema}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
    </div>
  </div>
);
