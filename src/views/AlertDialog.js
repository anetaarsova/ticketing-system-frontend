import React from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import TextField from "@material-ui/core/TextField";
import { Field, Form, Formik } from "formik";

export default function AlertDialog(props) {
  return (
    <div>
      <Dialog
        id={props.id ? props.id : "alertDialog"}
        open={props.open}
        fullWidth={props.maxWidth ? true : false}
        maxWidth={props.maxWidth ? props.maxWidth : false}
      >
        <DialogTitle style={{ backgroundColor: "#3f51b5", color: "white" }}>
          {props.title}
        </DialogTitle>
        <DialogContent style={{ paddingRight: "20px", paddingLeft: "20px" }}>
          <DialogContentText style={{ color: "black" }}>
            {props.text}
          </DialogContentText>
          {props.textField ? (
            <Formik
              initialValues={{ comment: null }}
              //   validationSchema={Yup.object().shape({
              //     comment: Yup.string()
              //       .required(translate("app.notifications.errorRequired"))
              //       .max(120, translate("app.notifications.maxLength120"))
              //       .nullable(),
              //   })}
              onSubmit={(values) => {
                props.onFunction(props.open, props.item, values.comment);
                props.onCloseYes();
              }}
            >
              {(formikProps) => (
                <Form
                  id={props.id ? props.id + "Form" : "alertDialogForm"}
                  autoComplete="off"
                  noValidate="novalidate"
                >
                  <TextField
                    style={{ marginTop: "15px" }}
                    name="comment"
                    id="outlined-basic"
                    label="Outlined"
                    variant="outlined"
                  />

                  <DialogActions>
                    <Button color="primary" variant="contained" type="submit">
                      {props.yesButton ? props.yesButton : "ДА"}
                    </Button>
                    <Button
                      color="default"
                      variant="contained"
                      onClick={props.onClose}
                    >
                      {props.noButton ? props.noButton : "НЕ"}
                    </Button>
                  </DialogActions>
                </Form>
              )}
            </Formik>
          ) : null}
        </DialogContent>
        {props.textField === undefined || props.textField === null ? (
          <DialogActions>
            <Button
              onClick={() => {
                if (props.orgUnits) {
                  let item = { ...props.item, withSubOU: true };
                  props.onFunction(props.orgUnits, item);
                } else {
                  if (props.status !== undefined)
                    props.item.active = props.status === "true" ? true : false;
                  if (props.active !== undefined) {
                    props.item.activeToDate =
                      props.active === "null" ? null : props.active;
                  }

                  props.extra
                    ? props.onFunction(props.item, props.extra)
                    : props.onFunction(props.item);
                }
                props.onCloseYes();
              }}
              color="primary"
              variant="contained"
              autoFocus
            >
              {props.yesButton ? props.yesButton : "YES"}
            </Button>
            <Button
              onClick={() => {
                if (props.orgUnits)
                  props.onFunction(props.orgUnits, props.item);
                props.onClose();
              }}
              variant="contained"
            >
              {props.noButton ? props.noButton : "NO"}
            </Button>
          </DialogActions>
        ) : null}
      </Dialog>
    </div>
  );
}
