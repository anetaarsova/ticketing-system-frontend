import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Ticket from "./Ticket";
import operations from "../redux/operations";

function TicketContainer(props) {
  const dispatch = useDispatch();
  const { tickets, loading } = useSelector((state) => ({
    tickets: state.tickets.tickets,
    loading: state.tickets.loading,
  }));

  useEffect(() => {
    //debugger;
    // dispatch(operations.getTicketsByUser());
    dispatch(operations.getTicketsByUser())
      .then(() => {})
      .catch((e) => {});
    // dispatch(operations.resetRequestDetails())

    // dispatch(operations.getOrganizationalUnits());
  }, []);
  console.log("tickets", tickets);
  return (
    <Ticket
      tickets={tickets}
      loading={loading}
      //   resetRequestDetails={resetRequestDetails}
    />
  );
}

export default TicketContainer;
