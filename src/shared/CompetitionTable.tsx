import {TableBody, TableCell, TableHead, TableRow}
  from '@material-ui/core';
import MaUTable from '@material-ui/core/Table';
import React from 'react';
import {useTable, useSortBy} from 'react-table';
import {TableSortLabel} from '@material-ui/core';
import {CompetitionRow} from './CompetitionRow';
import dayjs from 'dayjs';

const isoDate = (field) => (row) => {
  return dayjs.unix(0).add(row[field], 'd').format('YYYY-MM-DD');
};

const competitionColumns = [
  {
    Header: 'Events',
    columns: [
      {
        Header: 'Name',
        accessor: 'name',
      },
      {
        Header: 'Summary',
        accessor: 'eventSummary',
      },
      {
        Header: 'Registration',
        accessor: isoDate('registrationDeadline'),
        id: 'registrationDeadline',
      },
      {
        Header: 'From',
        accessor: isoDate('fromDate'),
        id: 'fromDate',
      }, {
        Header: 'To',
        accessor: isoDate('toDate'),
        id: 'toDate',
      },
      {
        Header: 'Status',
        accessor: 'status',
      },
      {
        Header: 'Type',
        accessor: 'type',
      },
      {
        Header: 'Source',
        accessor: 'source',
      },
      {
        Header: 'IDs',
        accessor: 'sourceIds',
      },
    ],
  },
];

const CompetitionTable = ({columns, data} : any) => {
  const {getTableProps, headerGroups, rows, prepareRow} = useTable({
    columns,
    data,
  }, useSortBy);

  return (
    <MaUTable {...getTableProps()}>
      <TableHead>
        {headerGroups.map((headerGroup, i) => {
          if (i == 0) return null; // TODO an other way to exclude group header?
          return (
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
          );
        })}
      </TableHead>
      <TableBody>
        {rows.map((row, i) => {
          prepareRow(row);
          return <CompetitionRow key={i} row={row}/>;
        })}
      </TableBody>
    </MaUTable>
  );
};

export {CompetitionTable, competitionColumns};
