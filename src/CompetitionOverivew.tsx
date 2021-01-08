import React, {useContext, useEffect, useState} from 'react';
import {FirebaseContext} from './FirebaseProvider';
import {CompetitionTable} from './CompetitionTable';
import dayjs from 'dayjs';

const CompetitionOverview = ({})=> {
  const firebase = useContext(FirebaseContext);
  const [comps, setComps] = useState<any>({});

  useEffect(() => {
    if (firebase.firestore) {
      firebase.firestore()
          .collection('competitions')
          .orderBy('fromDate', 'desc')
          .limit(30)
          .get().then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
              const competition = doc.data();
              const fromDay = dayjs.unix(0).add(competition.fromDate, 'd');
              const toDay = dayjs.unix(0).add(competition.toDate, 'd');
              competition.fromDate = fromDay.format('YYYY-MM-DD');
              competition.toDate = toDay.format('YYYY-MM-DD');
              setComps((old) => ({...old, [doc.id]: competition}));
            });
          });
    }
  }, []);

  const columns = React.useMemo(
      () => [
        {
          Header: 'Competitions',
          columns: [
            {
              Header: 'Name',
              accessor: 'name',
            },
            {
              Header: 'Source',
              accessor: 'source',
            },
            {
              Header: 'IDs',
              accessor: 'sourceIds',
            },
            {
              Header: 'From',
              accessor: 'fromDate',
            }, {
              Header: 'To',
              accessor: 'toDate',
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

export {CompetitionOverview};
