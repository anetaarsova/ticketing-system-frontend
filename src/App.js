import React from 'react';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';
import Home from "./components/Home";
import Login from "./views/Login/Login";
import Register from "./views/Register/Register";
import NotFound from "./views/NotFound/NotFound";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  // root: {
  //   display: 'flex',
  //   flexDirection: 'column',
  //   minHeight: '100vh',
  // },
  // main: {
  //   marginTop: theme.spacing(8),
  //   marginBottom: theme.spacing(2),
  // },
  // footer: {
  //   padding: theme.spacing(3, 2),
  //   marginTop: 'auto',
  //   backgroundColor:
  //     theme.palette.type === 'light' ? theme.palette.grey[200] : theme.palette.grey[800],
  // },
}));

function App() {
  const classes = useStyles();
    return (
      <div>
        <Container component="main" className={classes.main} maxWidth="lg">
        <Router> 
      <Header/>
        <Switch>
           <Route exact path="/home">
             <Home/>
           </Route>
           <Route path="/login">
            <Login/>
           </Route>
           <Route path="/register">
              <Register/>
           </Route>
        </Switch>
      <Footer/>
      </Router>
      </Container>
      </div>
    );
  }

export default App;