/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable react/self-closing-comp */
import React from 'react';

const TableHeader = () => (
  <thead>
    <tr>
      <th className="w-1"></th>
      <th className="px-6 py-3 text-xs font-bold leading-4 tracking-wider text-left text-bb-gray-600 text-opacity-50 uppercase bg-gray-50">Title</th>
      <th className="px-6 py-3 text-sm font-bold leading-4 tracking-wider
        text-left text-bb-gray-600 text-opacity-50 bg-gray-50"
      >
        Assigned To
      </th>
      <th className="px-6 py-3 bg-gray-50"></th>
    </tr>
  </thead>
);

export default TableHeader;
