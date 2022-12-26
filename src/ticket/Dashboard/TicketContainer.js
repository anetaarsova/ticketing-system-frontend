import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import TicketComponent from "./TicketComponent";
import operations from "../redux/operations";

function TicketContainer(props) {
  const dispatch = useDispatch();
  const { ticket, tickets, loading } = useSelector((state) => state.ticketReducer);
  const [selectedItem, setSelectedItem] = useState(undefined);

  function saveItem(item) {
    if (item.id) {
      dispatch(operations.updateTicket(item))
          .then((res) => {
            setSelectedItem(undefined);
          })
          .catch((res) => {});
    } else
      dispatch(operations.createTicket(item))
          .then((res) => {
            setSelectedItem(res);
          })
          .catch((res) => {});
  }

  function deleteItem(item) {
    dispatch(operations.removeTicket(item)).then((res)=>{
      setSelectedItem(undefined)
    })
  }

  function fetchItems() {
    dispatch(operations.getTicketsByUser()).then((res)=>{
     // setSelectedItem(undefined)
    })
  }
  function reset() {
    dispatch(operations.resetTicket());
  }

  return (
    <TicketComponent
      tickets={tickets}
      ticket={ticket}
      loading={loading}
      saveItem={saveItem}
      deleteItem={deleteItem}
      fetchItems={fetchItems}
      selectedItem={selectedItem}
      setSelectedItem={setSelectedItem}
      reset={reset}
    />
  );
}

export default TicketContainer;
