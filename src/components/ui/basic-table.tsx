import { ReactNode } from "react";

interface ReusableTableProps {
  headers: string[];
  data: any[]; // Adjust the type according to your data structure
  renderRow: (row: any) => ReactNode; // Function to render a row
}

const ReusableTable = ({ headers, data, renderRow }: ReusableTableProps) => {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white border border-gray-200">
        <thead>
          <tr>
            {headers.map((header) => (
              <th
                key={header}
                className="px-4 py-2 border-b border-gray-200 bg-gray-100 text-left text-sm font-medium text-gray-900"
              >
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => (
            <tr key={index} className="border-b border-gray-200">
              {renderRow(row)}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ReusableTable;

// Usages

// import { useState } from 'react';
// import ReusableTable from './ReusableTable';

// const App = () => {
//   const headers = ['Name', 'Age', 'Email'];
//   const data = [
//     { name: 'John Doe', age: 28, email: 'john@example.com' },
//     { name: 'Jane Smith', age: 34, email: 'jane@example.com' },
//     // Add more rows as needed
//   ];

//   const renderRow = (row: { name: string; age: number; email: string }) => (
//     <>
//       <td className="px-4 py-2">{row.name}</td>
//       <td className="px-4 py-2">{row.age}</td>
//       <td className="px-4 py-2">{row.email}</td>
//     </>
//   );

//   return (
//     <div className="App">
//       <ReusableTable headers={headers} data={data} renderRow={renderRow} />
//     </div>
//   );
// };

// export default App;
