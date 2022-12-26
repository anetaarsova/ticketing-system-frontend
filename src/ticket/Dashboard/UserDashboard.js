import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import TicketContainer from "./TicketContainer";
import operations from "../redux/operations";
import { Container } from "@material-ui/core";

function UserDashboard(props) {
  const dispatch = useDispatch();
  const { ticket, tickets, loading } = useSelector((state) => state.ticketReducer);

  console.log("tickets", tickets);
  useEffect(() => {
    dispatch(operations.getTicketsByUser())
      .then(() => {})
      .catch((e) => {});
  }, []);
  return (
    <Container>
      <TicketContainer />
    </Container>
  );
}

export default UserDashboard;
