import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Button from "@material-ui/core/Button";
import AddIcon from "@material-ui/icons/Add";
import operations from "../redux/operations";
import AddTicket from "./AddTicket";
import TicketDetails from "./TicketDetails";

function Ticket(props) {
  const dispatch = useDispatch();
  const [selectedRow, setSelectedRow] = React.useState(undefined);
  const [open, setOpen] = React.useState(false);
  const [view, setView] = React.useState(false);
  const [edit, setEdit] = React.useState(false);

  console.log("props in ticket", props);
  function openDialog(action, row) {
    if (action === "add") {
      setOpen(true);
      setSelectedRow({});
    } else if (action === "view") {
      setView(true);
      setSelectedRow(row);
    } else if (action === "edit") {
      setEdit(true);
      setSelectedRow(row);
    }
  }
  function closeDialog(action) {
    if (action === "add") setOpen(false);
    else if (action === "view") setView(false);
    else if (action === "edit") setEdit(false);
  }

  function saveTicket(ticketDetails) {
    console.log("ticketdetails", ticketDetails);
    dispatch(operations.createTicket(ticketDetails))
      .then(() => {
        console.log("entered to close dialog");
        closeDialog("add");
      })
      .catch((e) => {});
  }

  return (
    <div>
      <Button
        size="small"
        type="button"
        variant="contained"
        color="primary"
        onClick={() => {
          openDialog("add", {});
        }}
      >
        <AddIcon />
        {/* {translate("app.requestDetails.dodadiButton")} */}
      </Button>
      {/* {props.tickets !== undefined && props.tickets.length === 0} */}
      {open && (
        <AddTicket
          id={"AddTicketDialog"}
          onClose={() => {
            closeDialog("add");
          }}
          open={open}
          save={saveTicket}
          item={selectedRow}
        />
      )}
      {props.tickets !== undefined && props.tickets.length !== 0 && (
        <TicketDetails listing={props.tickets.data}></TicketDetails>
      )}
    </div>
  );
}

export default Ticket;
