import {TableBody, TableCell, TableHead, TableRow}
  from '@material-ui/core';
import MaUTable from '@material-ui/core/Table';
import React from 'react';
import {useTable, useSortBy} from 'react-table';
import {TableSortLabel} from '@material-ui/core';
import {EventRow} from './EventRow';

const EventsTable = ({columns, data} : any) => {
  const {getTableProps, headerGroups, rows, prepareRow} = useTable({
    columns,
    data,
  }, useSortBy);

  return (
    <MaUTable {...getTableProps()} size="small">
      <TableHead>
        {headerGroups.map((headerGroup, i) => (
          <TableRow key={i} {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map((column, j) => (
              <TableCell key={j}
                {...column.getHeaderProps(column.getSortByToggleProps())}>
                <span>
                  {column.render('Header')}
                  <TableSortLabel active={column.isSorted}
                    direction={column.isSortedDesc ? 'desc' : 'asc'}/>
                </span>
              </TableCell>
            ))}
          </TableRow>
        ))}
      </TableHead>
      <TableBody>
        {rows.map((row, i) => {
          prepareRow(row);
          return (<EventRow key={i} row={row}/>);
        })}
      </TableBody>
    </MaUTable>
  );
};

export {EventsTable};
