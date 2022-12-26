import React, { Component } from "react";
import Container from "@material-ui/core/Container";
import TicketComponent from "../ticket/Dashboard/TicketComponent";
import TicketContainer from "../ticket/Dashboard/TicketContainer";
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
          <TicketContainer />
        </div>
      </Container>
    );
  }
}
export default Home;
