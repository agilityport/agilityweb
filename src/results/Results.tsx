import React, {useContext, useEffect, useState} from 'react';
import {FirebaseContext} from '../FirebaseProvider';
import {CompetitionTable} from '../shared/CompetitionTable';
import dayjs from 'dayjs';

const Results = ({})=> {
  const firebase = useContext(FirebaseContext);
  const [comps, setComps] = useState<any>({});

  useEffect(() => {
    if (firebase.firestore) {
      firebase.firestore()
          .collection('competitions')
          .where('status', 'in',
              ['Finished', 'Running', 'Archived', 'Cancelled'])
          .orderBy('fromDate', 'desc')
          .limit(30)
          .get().then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
              const competition = doc.data();
              setComps((old) => ({...old, [doc.id]: competition}));
            });
          });
    }
  }, []);

  const isoDate = (field) => (row) => {
    return dayjs.unix(0).add(row[field], 'd').format('YYYY-MM-DD');
  };

  const columns = React.useMemo(
      () => [
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
            }, {
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
      ],
      [],
  );

  const data = React.useMemo(() => Object.values(comps), [comps]);
  return (
    <CompetitionTable columns={columns} data={data}/>
  );
};

export {Results};
