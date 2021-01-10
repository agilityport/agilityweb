import {TableCell, TableRow} from '@material-ui/core';
import React, {useState} from 'react';
import {Equipages} from './Equipages';

const EventRow = ({row} : any) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <>
      <TableRow key={row.original.id} {...row.getRowProps()}
        onClick={() => setExpanded((old) => !old)}>
        {row.cells.map((cell, j) => {
          return (
            <TableCell key={j} {...cell.getCellProps()}
              style={{borderBottom: 'none'}}>
              {cell.render('Cell')}
            </TableCell>
          );
        })}
      </TableRow>
      { expanded &&
            <TableRow key={row.competitionId + '.events'}>
              <TableCell colSpan={4}>
                <Equipages competitionId={row.original.competitionId}
                  eventId={row.original.id}/>
              </TableCell>
            </TableRow>
      }
    </>
  );
};

export {EventRow};
