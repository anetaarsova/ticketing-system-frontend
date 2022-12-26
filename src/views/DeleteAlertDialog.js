import React from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";

export default function AlertDialog(props) {
  return (
    <div>
      <Dialog id="alerDialog" open={props.open} onClose={props.onClose}>
        <DialogTitle style={{ backgroundColor: "#3f51b5", color: "white" }}>
          {props.title}
        </DialogTitle>
        <DialogContent>
          <DialogContentText style={{ color: "black" }}>
            {props.text}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          {props.type !== "alert" ? (
            <>
              <Button
                id="yesButton"
                onClick={() => {
                  //</> props.config
                  //</DialogActions>  ? props.onDelete(props.item, props.config)
                  props.onDelete(props.item);
                  props.onClose();
                }}
                // onSubmit={(values) => {
                //   props.onFunction(props.item);
                //   props.onCloseYes();
                // }}
                color="primary"
                variant="contained"
                autoFocus
              >
                "Yes"
              </Button>
              <Button id="noButton" onClick={props.onClose} variant="contained">
                "No"
              </Button>
            </>
          ) : (
            <Button
              id="okButton"
              onClick={props.onClose}
              color="primary"
              variant="contained"
            >
              "OK"
            </Button>
          )}
        </DialogActions>
      </Dialog>
    </div>
  );
}
