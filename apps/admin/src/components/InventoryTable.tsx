import React from 'react';
import { Table } from 'antd';
import type { ColumnsType } from 'antd/es/table'; // Ensure these are imported from the correct path in v5
import { DentalProduct, ProductCategory } from '@zoelio-shop/types';

interface InventoryTableProps {
  products: DentalProduct[];
}

export const InventoryTable: React.FC<InventoryTableProps> = ({ products }) => {
  const columns: ColumnsType<DentalProduct> = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'SKU',
      dataIndex: 'sku',
      key: 'sku',
    },
    {
      title: 'Type',
      key: 'type',
      render: (_, record) => record.metadata.type,
    },
    // Dynamic Columns based on Discriminator
    {
      title: 'Specific Details',
      key: 'details',
      render: (_, record) => {
        const { metadata } = record;
        switch (metadata.type) {
          case ProductCategory.CONSUMABLE:
            return <span>Expiry: {new Date(metadata.expiryDate).toLocaleDateString()}</span>;
          case ProductCategory.INSTRUMENT:
            return <span>Material: {metadata.material} ({metadata.isReusable ? 'Reusable' : 'Disposable'})</span>;
          case ProductCategory.EQUIPMENT:
            return <span>Warranty: {metadata.warrantyMonths} months | Voltage: {metadata.voltage}</span>;
          default:
            return null;
        }
      },
    },
  ];

  return <Table columns={columns} dataSource={products} rowKey="sku" />;
};
