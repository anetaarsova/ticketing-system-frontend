import React, { Component } from "react";
import Container from "@material-ui/core/Container";
import Ticket from "./Ticket";
import { Redirect } from "react-router-dom";
class Home extends Component {
  constructor() {
    super();
    this.state = {
      isLoggedIn: false,
      user: {},
    };
  }

  render() {
    const token = localStorage.getItem("token");
    if (!token) {
      return <Redirect to="/login" />;
    }
    return (
      <Container>
        <div>
          <Ticket />
        </div>
      </Container>
    );
  }
}
export default Home;
