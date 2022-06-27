import React from 'react';
import { useTable } from 'react-table';
import './table.css';

interface TableProps {
  dataSource: any;
  columns: any;
  onClick?: () => void;
}

/**
 * Table component
 */
export const Table = ({ dataSource, columns, onClick }: TableProps) => {
  const data = React.useMemo(() => dataSource, []);

  console.log('columns, dataSource ', columns, dataSource);

  const columnsTable = React.useMemo(() => columns, []);

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({ columns: columnsTable, data });

  return (
    <div className="table-wrapper">
      <table {...getTableProps()}>
        <thead>
          {headerGroups.map((headerGroup: any) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column: any) => (
                <th {...column.getHeaderProps()}>{column.render('Header')}</th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map((row: any) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map((cell: any) => {
                  return (
                    <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
