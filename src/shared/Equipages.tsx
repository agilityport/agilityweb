import React, {useContext, useEffect, useState} from 'react';
import {FirebaseContext} from '../FirebaseProvider';
import PropTypes from 'prop-types';
import {EventsTable} from './EventsTable';

const Equipages = ({competitionId, eventId} )=> {
  const firebase = useContext(FirebaseContext);
  const [equipages, setEquipages] = useState<any>({});

  useEffect(() => {
    if (firebase.firestore) {
      firebase.firestore()
          .collection('competitions')
          .doc(competitionId)
          .collection('events')
          .doc(eventId)
          .collection('equipages')
          .get().then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
              setEquipages((old) => ({...old, [doc.id]: doc.data()}));
            });
          });
    }
  }, []);

  const dotFields = (key) => (row) => {
    return row[key];
  };

  const columns = React.useMemo(
      () => [
        {
          Header: 'Equipages',
          columns: [
            {
              Header: 'Name',
              accessor: dotFields('handler.name'),
            },
            {
              Header: 'Club',
              accessor: dotFields('handler.club'),
            },
            {
              Header: 'Dog',
              accessor: dotFields('dog.name'),
            },
            {
              Header: 'Breed',
              accessor: dotFields('dog.breed'),
            },
            {
              Header: 'StartNo',
              accessor: 'startNumber',
            },
            {
              Header: 'Time',
              accessor: 'runTime',
            },
            {
              Header: 'Faults',
              accessor: 'fault',
            },
            {
              Header: 'Place',
              accessor: 'place',
            },
          ],
        },
      ],
      [],
  );

  const data = React.useMemo(() => Object.values(equipages), [equipages]);
  return (
    <EventsTable columns={columns} data={data} bgcolor="background.paper"/>
  );
};

Equipages.propTypes = {
  competitionId: PropTypes.string,
  eventId: PropTypes.string,
};

export {Equipages};
