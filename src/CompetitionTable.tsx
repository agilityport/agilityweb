import {TableBody, TableCell, TableHead, TableRow} from '@material-ui/core';
import MaUTable from '@material-ui/core/Table';
import React from 'react';
import {useTable} from 'react-table';

const CompetitionTable = ({columns, data} : any) => {
  // Use the state and functions returned from useTable to build your UI
  const {getTableProps, headerGroups, rows, prepareRow} = useTable({
    columns,
    data,
  });

  // Render the UI for your table
  return (
    <MaUTable {...getTableProps()}>
      <TableHead>
        {headerGroups.map((headerGroup, i) => (
          <TableRow key={i} {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map((column, j) => (
              <TableCell key={j} {...column.getHeaderProps()}>
                {column.render('Header')}
              </TableCell>
            ))}
          </TableRow>
        ))}
      </TableHead>
      <TableBody>
        {rows.map((row, i) => {
          prepareRow(row);
          return (
            <TableRow key={i} {...row.getRowProps()}>
              {row.cells.map((cell, j) => {
                return (
                  <TableCell key={j} {...cell.getCellProps()}>
                    {cell.render('Cell')}
                  </TableCell>
                );
              })}
            </TableRow>
          );
        })}
      </TableBody>
    </MaUTable>

  );
};

export {CompetitionTable};
