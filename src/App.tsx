import React, {useState} from 'react';
import './App.css';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import {FirebaseProvider} from './FirebaseProvider';
import {Schedule} from './schedule/Schedule';
import {createMuiTheme, ThemeProvider} from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import {IconButton, Tab, Tabs} from '@material-ui/core';
import {AccountCircleOutlined} from '@material-ui/icons';
import {Results} from './results/Results';

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
  const [navItem, setNavItem] = useState(0);

  return (
    <ThemeProvider theme={theme}>
      <FirebaseProvider>
        <AppBar position="static">
          <Toolbar>
            <Box display="flex" justifyContent="space-between"
              flexGrow={1} alignItems="center">
              <img src="agilityportlogo.png" alt="logo" height="35px"/>
              <Tabs
                value={navItem}
                onChange={(event, value)=>{
                  setNavItem(value);
                }}
                indicatorColor="secondary"
                textColor="inherit"
                centered
              >
                <Tab label="Schedule" />
                <Tab label="Results" />
                <Tab label="Organize" />
              </Tabs>
              <IconButton color="inherit">
                <AccountCircleOutlined/>
              </IconButton>
            </Box>
          </Toolbar>
        </AppBar>
        { navItem == 0 && <Schedule/>}
        { navItem == 1 && <Results/>}
      </FirebaseProvider>
    </ThemeProvider>
  );
};

export default App;

