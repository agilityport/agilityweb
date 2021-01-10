import React, {useEffect} from 'react';
import './App.css';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import {FirebaseProvider} from './FirebaseProvider';
import {createMuiTheme, ThemeProvider} from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import {IconButton, Tab, Tabs, SvgIcon} from '@material-ui/core';
import {AccountCircleOutlined, GitHub} from '@material-ui/icons';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useHistory,
  useLocation,
} from 'react-router-dom';
import {Schedule} from './schedule/Schedule';
import {Organise} from './organise/Organise';
import {Results} from './results/Results';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#ab9f9f',
      light: '#d7d5d5',
      contrastText: '#fff',
    },
    secondary: {
      main: '#f44336',
    },
  },
});

const GotoGithub = () => {
  window.location.href = 'https://github.com/agilityport/agilityweb';
};

const GotoGitter = () => {
  window.location.href = 'https://gitter.im/agilityport/community';
};

const RoutedApp = () => {
  const history = useHistory();
  const location = useLocation();
  const mainPath = location.pathname.split('/')[1];
  const tabValue = mainPath === '' ? 'schedule' : mainPath;

  useEffect(() => {
    if (location.pathname === '/') {
      history.push('/schedule');
    }
  }, [history, location]);

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
              <div>
                <IconButton>
                  <SvgIcon onClick={GotoGitter}>
                    <line stroke="#fff" id="svg_1"
                      y2="14.42188" x2="5.59375"
                      y1="3.64063" x1="5.59375" strokeWidth="2" />
                    <line stroke="#fff" id="svg_2" y2="21.4458" x2="9.8125"
                      y1="7.85205" x1="9.8125" strokeWidth="2" fill="none"/>
                    <line id="svg_3" y2="21.4458" x2="13.875" y1="8.0083"
                      x1="13.875" strokeWidth="2" stroke="#fff" fill="none"/>
                    <line stroke="#fff" id="svg_4" y2="13.78955" x2="17.625"
                      y1="8.0083" x1="17.625" strokeWidth="2" fill="none"/>
                  </SvgIcon>
                </IconButton>
                <IconButton color="inherit" >
                  <GitHub onClick={GotoGithub}/>
                </IconButton>
                <IconButton color="inherit">
                  <AccountCircleOutlined/>
                </IconButton>
              </div>
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

