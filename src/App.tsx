import React from 'react';
import './App.css';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import {FirebaseProvider} from './FirebaseProvider';
import {CompetitionOverview} from './CompetitionOverivew';
import {createMuiTheme, ThemeProvider} from '@material-ui/core/styles';

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
            <IconButton edge="start" color="inherit">
              <MenuIcon />
            </IconButton>
            <Typography variant="h6">News</Typography>
            <Button color="inherit">Login</Button>
          </Toolbar>
        </AppBar>
        <CompetitionOverview/>
      </FirebaseProvider>
    </ThemeProvider>
  );
};

export default App;

