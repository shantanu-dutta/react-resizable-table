import React from 'react';
import ReactDOM from 'react-dom/client';

import Table from './Table';
import TableContent from './TableContent';

import './index.css';

const tableHeaders = [
  'Items',
  'Order #',
  'Amount',
  'Status',
  'Delivery Driver',
];

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Table
      headers={tableHeaders}
      minCellWidth={120}
      tableContent={<TableContent />}
    />
  </React.StrictMode>
);
