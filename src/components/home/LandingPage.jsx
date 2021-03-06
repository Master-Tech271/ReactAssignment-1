import React, {useState} from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Login from './Login';
import Register from './Register';

import {registerUser} from './../../request';


const useStyles = makeStyles((theme) => ({
  root: {
    height: '100vh',
  },
  image: {
    backgroundImage: 'url(https://source.unsplash.com/random)',
    backgroundRepeat: 'no-repeat',
    backgroundColor:
      theme.palette.type === 'light' ? theme.palette.grey[50] : theme.palette.grey[900],
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },
  paper: {
    margin: theme.spacing(8, 4),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

const LandingPage = () => {

  const classes = useStyles();

  const [typeState, setTypeState] = useState(false);

  const handleType = () => {
      setTypeState(true);
  }

  const handleType2 = () => {
    setTypeState(false);
}

//login state




const handleLoginSubmit = () =>{
    // (
    //     async() => {
    //      //   await loginUser(loginState);
    //     }
    // )
}

//register


const handleRegisterSubmit = (registerData) =>{
  (async () => {
    try {
      await registerUser(registerData);
      console.log("Response => ");
    } catch (error) {
      console.log("Error => "+error);
    }
  })();
   console.log(registerData);
}

  return (
    <Grid container component="main" className={classes.root}>
      <CssBaseline />
      <Grid item xs={false} sm={4} md={7} className={classes.image} />
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        {typeState === false && (
            <Login handleType={handleType} />
        )}
        {typeState === true && (
            <Register handleType2={handleType2} registerSubmit={handleRegisterSubmit}/>
        )} 
      </Grid>
    </Grid>
  );
}

export default LandingPage;