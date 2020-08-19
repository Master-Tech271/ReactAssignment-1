import React, {useState} from 'react';
import Field from './Field';
import CopyRight from './../CopyRight';

import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';

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

const Login = (props) => {    

    const classes = useStyles();
    
        const [loginData, setLoginData] = useState({
          email_login:"",
          l_name:""
      });
    const handleLogin = (e) => {
        let {name, value} = e.target;
        setLoginData((prev_value) => {
          return {
            ...prev_value,
            [name]:value
          }
        });
    }
    return (
        <>
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
           <form className={classes.form}>
           <Field id="email_login" label="Email" name="email_login" type="email" value={loginData.email_login} handle={handleLogin}/>
           <Field id="l_name" label="Last Name" name="l_name" type="text" value={loginData.l_name} handle={handleLogin}/>
           <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              fullWidth
              variant="contained"
              color="primary"
            //   className={classes.submit}
            //   onChange ={handleLoginSubmit}
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item xs>
              </Grid>
              <Grid item >
                <Button style={{marginTop:'1rem'}} variant="outlined" color="primary" onClick={props.handleType}>
                {"Don't have an account? Sign Up"}
                </Button>
              </Grid>
            </Grid>
            <Box mt={5}>
              <CopyRight />
            </Box>
          </form>
        </div>
        </>
    )
}

export default Login;