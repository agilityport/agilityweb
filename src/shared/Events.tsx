import React, {useContext, useEffect, useState} from 'react';
import {FirebaseContext} from '../FirebaseProvider';
import PropTypes from 'prop-types';
import {EventsTable} from './EventsTable';

const Events = ({competitionId} )=> {
  const firebase = useContext(FirebaseContext);
  const [events, setEvents] = useState<any>({});

  useEffect(() => {
    if (firebase.firestore) {
      firebase.firestore()
          .collection('competitions')
          .doc(competitionId)
          .collection('events')
          .where('eventType', '==', 'trial')
          .get().then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
              setEvents((old) => ({...old, [doc.id]: doc.data()}));
            });
          });
    }
  }, []);

  const columns = React.useMemo(
      () => [
        {
          Header: 'Events',
          columns: [
            {
              Header: 'Date',
              accessor: 'schedule',
            },
            {
              Header: 'Name',
              accessor: 'name',
            },
            {
              Header: 'Type',
              accessor: 'trialType',
            },
            {
              Header: 'Size',
              accessor: 'sizes[0]',
            },
          ],
        },
      ],
      [],
  );

  const data = React.useMemo(() => Object.values(events), [events]);
  return (
    <EventsTable columns={columns} data={data} bgcolor="primary.light"/>
  );
};

Events.propTypes = {
  competitionId: PropTypes.string,
};

export {Events};
