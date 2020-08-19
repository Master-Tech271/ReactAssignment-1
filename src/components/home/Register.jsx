import React, {useState} from 'react';
import Field from './Field';
import CopyRight from './../CopyRight';

import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';


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

const Register = (props) => {

    const classes = useStyles();

    const [registerData, setRegisterData] = useState({
        email:"",
        first_name:"",
        last_name:""
      });

    const handleRegisterData = (e) => {
        let {name, value} = e.target;
        setRegisterData({...registerData, [name]:value});
    }
    
    return (
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          <form className={classes.form}>
        <Field id="email" label="Email" name="email" type="email" value={registerData.email} handle={handleRegisterData}/>
        <Field id="f_name" label="First Name" name="first_name" type="text" value={registerData.first_name} handle={handleRegisterData}/>
        <Field id="l_name" label="Last Name" name="last_name" type="text" value={registerData.last_name} handle={handleRegisterData}/>
        <Button
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
              onClick={() => {props.registerSubmit(registerData)}}
            >
              Sign Up
            </Button>
            <Grid container>
              <Grid item xs>
              </Grid>
              <Grid item>
              <Button variant="outlined" color="primary" onClick={props.handleType2}>
                {"Already Account? Sign In"}
                </Button>
              </Grid>
            </Grid>
            <Box mt={5}>
              <CopyRight />
            </Box>
          </form>
        </div>
    )

}

export default Register;