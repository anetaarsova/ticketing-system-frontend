import React, { Component } from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Link from "@material-ui/core/Link";
import Paper from "@material-ui/core/Paper";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import { Redirect, useHistory } from "react-router-dom";
import axios from "axios";
import {useDispatch, useSelector} from "react-redux";

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}
const LoginComponent = (props) => {
  const {
    userLoginAttepmt,
    selectedItem,
    reset
  } = props;
  //const dispatch = useDispatch();
  const [email, setEmail] = React.useState(false);
  const [password, setPassword] = React.useState(false);
 // const { user, loggedIn, loading } = useSelector((state) => state.userReducer);


  function handleChangeEmail (e){
    // console.log(e.target.value);
    const name = e.target.name;
    const value = e.target.value;
    console.log(name, value);
    setEmail(value);
  };
console.log('props',props);
  function handleChangePassword (e){
    // console.log(e.target.value);
    const name = e.target.name;
    const value = e.target.value;
    console.log(name, value);
    setPassword(value);
  };
  function handlesubmit (values){
   values = {
     email: email,
     password: password
   }
    console.log('values', values);
    debugger;
    userLoginAttepmt(values).then(

    );

     // const user = JSON.stringify(res.data.user);
     // localStorage.setItem("token", res.data.access_token);
    //  localStorage.setItem("user", user);
      // <Redirect to="/home" />;
    //});
  };

    // const token = localStorage.getItem("token");
    // if (token) {
    //   return (<Redirect to="/home" />);
    // }
    return (
        <div>
      <Grid container component="main">
        {/* className={classes.root} */}
        <CssBaseline />
        <Grid item xs={false} sm={4} md={7} />
        {/* className={classes.image} */}
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <div>
            {/* className={classes.paper} */}
            <Avatar>
              {/* className={classes.avatar} */}
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Sign in
            </Typography>
            <form noValidate
                  onSubmit={handlesubmit}
            >
              {/* className={classes.form} */}
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
                onChange={handleChangeEmail}
              />
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                onChange={handleChangePassword}
              />
              <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Remember me"
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                // className={classes.submit}
              >
                Sign In
              </Button>
              <Grid container>
                <Grid item xs>
                  <Link href="#" variant="body2">
                    Forgot password?
                  </Link>
                </Grid>
                <Grid item>
                  <Link href="#" variant="body2">
                    {/* onClick={handleSignUp} */}
                    {"Don't have an account? Sign Up"}
                  </Link>
                </Grid>
              </Grid>
              <Box mt={5}>
                <Copyright />
              </Box>
            </form>
          </div>
        </Grid>
      </Grid>
        </div>
    );

}

export default LoginComponent;
