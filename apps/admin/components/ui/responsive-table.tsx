import { ReactNode } from 'react';
import { ScrollArea } from './scroll-area';

interface ResponsiveTableProps {
  children: ReactNode;
}

export function ResponsiveTable({ children }: ResponsiveTableProps) {
  return (
    <div className="w-full overflow-auto">
      <div className="min-w-[640px]">
        {children}
      </div>
    </div>
  );
}
