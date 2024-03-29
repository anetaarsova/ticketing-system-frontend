import React from "react";
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
import store, { history } from "./store";
import Home from "./components/Home";
import LoginContainer from "./user/Login/LoginContainer";
import RegisterComponent from "./user/RegisterComponent";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Checkout from "./components/Checkout";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";
import Dashboard from "./Admin/Dashboard";
import UserDashboard from "./ticket/Dashboard/UserDashboard";
import TicketContainer from "./ticket/Dashboard/TicketContainer";
import { Provider } from "react-redux";

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
      <Provider store={store}>
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
                <LoginContainer />
              </Container>
            </Route>
            <Route path="/register">
              <RegisterComponent />
            </Route>
            <Route path="/checkout">
              <Checkout />
            </Route>
            <Route path="/dashboard">
              <UserDashboard />
            </Route>
            <Route path="/upload">
              <TicketContainer />
            </Route>
          </Switch>
          <Footer />
        </Router>
      </Provider>

      {/* </Container> */}
    </React.Fragment>
  );
}

export default App;
