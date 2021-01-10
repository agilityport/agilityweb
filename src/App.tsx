import React, {useEffect} from 'react';
import './App.css';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import {FirebaseProvider} from './FirebaseProvider';
import {createMuiTheme, ThemeProvider} from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import {IconButton, Tab, Tabs} from '@material-ui/core';
import {AccountCircleOutlined} from '@material-ui/icons';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useHistory,
  useLocation,
} from 'react-router-dom';
import {Schedule} from './schedule/Schedule';
import {Results} from './results/Results';
import {Organise} from './organise/Organise';

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

const RoutedApp = () => {
  const history = useHistory();
  const location = useLocation();
  const mainPath = location.pathname.split('/')[1];
  const tabValue = mainPath === '' ? 'schedule' : mainPath;

  useEffect(() => {
    if (history.location.pathname === '/') {
      history.push('/schedule');
    }
  }, [history]);

  return (
    <ThemeProvider theme={theme}>
      <FirebaseProvider>
        <AppBar position="static">
          <Toolbar>
            <Box display="flex" justifyContent="space-between"
              flexGrow={1} alignItems="center">
              <img src="agilityportlogo.png" alt="logo" height="35px"/>
              <Tabs
                value={tabValue}
                onChange={(event, value)=>{
                  history.push('/' + value);
                }}
                indicatorColor="secondary"
                textColor="inherit"
                centered
              >
                <Tab value="schedule" label="Schedule" />
                <Tab value="results" label="Results" />
                <Tab value="organise" label="Organize" />
              </Tabs>
              <IconButton color="inherit">
                <AccountCircleOutlined/>
              </IconButton>
            </Box>
          </Toolbar>
        </AppBar>
        <Switch>
          <Route path="/schedule">
            <Schedule />
          </Route>
          <Route path="/results">
            <Results />
          </Route>
          <Route path="/organise">
            <Organise />
          </Route>
        </Switch>
      </FirebaseProvider>
    </ThemeProvider>
  );
};


const App = () => {
  return (
    <Router>
      <RoutedApp />
    </Router>
  );
};

export default App;

