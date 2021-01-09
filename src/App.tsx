import React from 'react';
import './App.css';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import {FirebaseProvider} from './FirebaseProvider';
import {CompetitionOverview} from './CompetitionOverivew';
import {createMuiTheme, ThemeProvider} from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import {IconButton} from '@material-ui/core';
import {AccountCircleOutlined} from '@material-ui/icons';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#ab9f9f',
      contrastText: '#fff',
    },
    secondary: {
      main: '#f44336',
    },
  },
});

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <FirebaseProvider>
        <AppBar position="static">
          <Toolbar>
            <Box display="flex" flexGrow={1}>
              <img src="agilityportlogo.png" alt="logo" height="35px"/>
            </Box>
            <IconButton color="inherit">
              <AccountCircleOutlined/>
            </IconButton>
          </Toolbar>
        </AppBar>
        <CompetitionOverview/>
      </FirebaseProvider>
    </ThemeProvider>
  );
};

export default App;

