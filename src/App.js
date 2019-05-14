import React from 'react';
import logo from './logo.svg';
import Stopwatch from "./components/Stopwatch.js"
import StopwatchButton from "./components/StopwatchButton.js"
import StopwatchDisplay from "./components/StopwatchDisplay.js"
import './App.css';
import StopwatchControls from './components/StopwatchControls';
import {withStyles, createMuiTheme} from '@material-ui/core/styles'
import {MuiThemeProvider} from '@material-ui/core'
import orange from  '@material-ui/core/colors/orange'
const myTheme = createMuiTheme(
  {
    palette:{
      secondary:orange
    },
    spacing:{
    unit:16
  }}
);
const styles=(theme)=>({
  app:{
    backgroundColor : theme.palette.grey[100] ,
    height:'100vh',
    padding: theme.spacing.unit,  
  }
})

function App({classes}) {
  return (
    <MuiThemeProvider theme = {myTheme}>
    <div className={classes.app}>
     <Stopwatch/>

    </div>
    </MuiThemeProvider>
  );
}

// const hoc = withStyles(styles);
// export default hoc(App);
export default withStyles(styles) (App);
