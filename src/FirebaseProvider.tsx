import React, {createContext, useState} from 'react';
import firebase from 'firebase';
import app from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyC9vycrGHx4t8MrhzwgEUG9MOKVkJI_00k',
  authDomain: 'agilityport.firebaseapp.com',
  databaseURL: 'https://agilityport.firebaseio.com',
  projectId: 'agilityport',
  storageBucket: 'agilityport.appspot.com',
  messagingSenderId: '1059309145754',
  appId: '1:1059309145754:web:0b750cebbca8ed34619923',
  measurementId: 'G-D0Y3VL0NE5',
};

interface FirebaseProviderProps {
    children: React.ReactNode;
};

const FirebaseContext = createContext<Partial<firebase.app.App>>({});

const FirebaseProvider = ({children}: FirebaseProviderProps) => {
  const [initializedApp, setInitializedApp] =
      useState<Partial<firebase.app.App>>({});

  if (app.apps.length === 0) {
    setInitializedApp(app.initializeApp(firebaseConfig));
  } else if (!initializedApp.name) {
    setInitializedApp(app.apps[0]);
  }

  return (
    <FirebaseContext.Provider value={ initializedApp }>
      { children }
    </FirebaseContext.Provider>
  );
};


export {FirebaseContext, FirebaseProvider};
