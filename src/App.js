import React from "react";
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import Login from "./views/Login/Login";
import Register from "./views/Register/Register";
import NotFound from "./views/NotFound/NotFound";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Checkout from "./components/Checkout";
import Container from "@material-ui/core/Container";
import CssBaseline from "@material-ui/core/CssBaseline";
import { makeStyles } from "@material-ui/core/styles";
import Dashboard from "./views/Admin/Dashboard";

const useStyles = makeStyles((theme) => ({
  root: {
    // display: 'flex',
    // flexDirection: 'column',
    minHeight: "100vh",
  },
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
    <React.Fragment component="main" className={classes.root}>
      {/* <CssBaseline /> */}
      {/* <Container> */}
      <Router>
        <Header />
        <Switch>
          <Route path="/admin">
            <Dashboard />
          </Route>
          <Route exact path="/home">
            <Home />
          </Route>
          <Route path="/login">
            <Container>
              <Login />
            </Container>
          </Route>
          <Route path="/register">
            <Register />
          </Route>
          <Route path="/checkout">
            <Checkout />
          </Route>
        </Switch>
        <Footer />
      </Router>
      {/* </Container> */}
    </React.Fragment>
  );
}

export default App;
