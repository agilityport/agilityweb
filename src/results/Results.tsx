import React, {useContext, useEffect, useState} from 'react';
import {FirebaseContext} from '../FirebaseProvider';
import {competitionColumns, CompetitionTable} from '../shared/CompetitionTable';

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

  const columns = React.useMemo(() => competitionColumns, []);
  const data = React.useMemo(() => Object.values(comps), [comps]);
  return (<CompetitionTable columns={columns} data={data}/>);
};

export {Results};
