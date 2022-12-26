import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Container from "@material-ui/core/Container";
import Button from "@material-ui/core/Button";
import AddIcon from "@material-ui/icons/Add";
import operations from "../redux/operations";
import AddTicket from "./AddTicket";
import EditTicket from "./EditTicket";
import DeleteAlertDialog from "../../views/DeleteAlertDialog";
import Ticket from "./Ticket";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Breadcrumbs from "@material-ui/core/Breadcrumbs";
import Link from "@material-ui/core/Link";

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    // width: "100%", // Fix IE 11 issue.
    display: "inline",
    // marginLeft: '20px'
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

function TicketComponent(props) {
  const dispatch = useDispatch();
  const classes = useStyles();
  const [selectedRow, setSelectedRow] = React.useState(undefined);
  const [open, setOpen] = React.useState(false);
  const [view, setView] = React.useState(false);
  const [add, setAdd] = React.useState(false);
  const [edit, setEdit] = React.useState(false);
  const [remove, setRemove] = React.useState(false);
  const [openAlertDialog, setOpenAlertDialog] = React.useState(false);

  function handleClick(event) {
    event.preventDefault();
    console.info("You clicked a breadcrumb.");
  }
  ///console.log("PROPS in ticket component", props);
  function openDialog(action, row) {
    if (action === "add") {
      setOpen(true);
      setAdd(true);
      setSelectedRow({});
    } else if (action === "view") {
      setView(true);
      setSelectedRow(row);
    } else if (action === "edit") {
      console.log("row in edit action", row);
      setEdit(true);
      setOpen(true);
      setSelectedRow(row);
    } else if (action === "remove") {
      setRemove(true);
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
      .then(closeDialog("add"))
      .catch((e) => {});
  }

  function editTicket(ticket) {
    console.log("ticket in edit ticket", ticket);
    dispatch(operations.updateTicket(ticket.id, ticket))
      .then(closeDialog("add"))
      .catch((e) => {});
  }

  function deleteTicket(ticket) {
    // console.log("ticket in delete ticket", ticket);
    dispatch(operations.removeTicket(ticket.id));
  }

  return (
    <div>
      <Breadcrumbs aria-label="breadcrumb">
        <Link color="inherit" href="/" onClick={handleClick}>
          Material-UI
        </Link>
        <Link
          color="inherit"
          href="/getting-started/installation/"
          onClick={handleClick}
        >
          Core
        </Link>
        <Typography color="textPrimary">Breadcrumb</Typography>
      </Breadcrumbs>
      <Typography variant="h3" gutterBottom>
        Dashboard
      </Typography>
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
      {open && add && (
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
        <Container>
          <Ticket
            listing={props.tickets.data.data}
            onEdit={openDialog}
            onDelete={(item) => {
              setOpenAlertDialog(item);
            }}
          ></Ticket>
        </Container>
      )}
      {edit && (
        <EditTicket
          id={"EditTicketDialog"}
          listing={props.tickets.data.data}
          onClose={() => {
            closeDialog("edit");
          }}
          action={edit}
          open={open}
          edit={editTicket}
          item={selectedRow}
        />
      )}
      {openAlertDialog && (
        <DeleteAlertDialog
          id={"ticketAlertDialog"}
          open={openAlertDialog}
          item={openAlertDialog}
          onClose={() => setOpenAlertDialog(false)}
          onDelete={deleteTicket}
          text={"Confirm to delete"}
        />
      )}
    </div>
  );
}

export default TicketComponent;
