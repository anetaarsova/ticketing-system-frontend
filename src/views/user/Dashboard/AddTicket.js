import React, { Component, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Link from "@material-ui/core/Link";
import { makeStyles } from "@material-ui/core/styles";
import { Redirect, useHistory } from "react-router-dom";
import SelectType from "./ticketTypes";
import IconButton from "@material-ui/core/IconButton";
import PhotoCamera from "@material-ui/icons/PhotoCamera";
import operations from "../redux/operations";
import ticketTypes from "./ticketTypes";
import { Formik, Form, Field } from "formik";
import { FilePond, File, registerPlugin } from "react-filepond";
import "filepond/dist/filepond.css";
import FilePondPluginImagePreview from "filepond-plugin-image-preview";
import "filepond-plugin-image-preview/dist/filepond-plugin-image-preview.min.css";
import {
  DialogContent,
  Grid,
  DialogActions,
  Button,
  Dialog,
  DialogTitle,
  Container,
  Tabs,
  Tab,
  Box,
  Typography,
} from "@material-ui/core";
registerPlugin(FilePondPluginImagePreview);
const token = localStorage.getItem("token");

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
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));
export default function AddTicket(props) {
  const classes = useStyles();
  const history = useHistory();
  const dispatch = useDispatch();
  const { tickets, loading } = useSelector((state) => ({
    tickets: state.tickets.tickets,
    loading: state.tickets.loading,
  }));
  const [image, setImage] = React.useState({});
  const [allValues, setValues] = React.useState({
    caption: "",
    description: "",
    type: "",
    image: "",
  });

  const formData = new FormData();

  const changeHandler = (event) => {
    setImage(event.target.files[0]);
    // setIsSelected(true);

    // formData.append("file", file);
    // formData.append("caption", allValues.caption);
    // formData.append("description", allValues.description);
    // formData.append("type", y)
  };
  console.log("image", image);
  console.log("formData image", formData.get("image"));

  // function onFileUpload() {
  //   // Update the formData object
  //   formData.append("image", file);
  //   formData.append("caption", allValues.caption);
  //   formData.append("description", allValues.description);
  //   //dispatch(operations.uploadDocument(file)).then(() => {});
  //   // Details of the uploaded file
  //   //console.log(this.state.file);
  //   // Request made to the backend api
  //   // Send formData object
  //   //axios.post("api/uploadfile", formData);
  //   console.log("formdata", formData);
  //   return formData;
  // }
  const set = (name) => {
    return ({ target: { value } }) => {
      setValues((oldValues) => ({ ...oldValues, [name]: value }));
    };
  };

  const initialValues = { ...props.item };
  return (
    <Dialog
      id={props.id ? props.id : "AddTicketDialog"}
      fullWidth={true}
      maxWidth="md"
      open={props.open}
    >
      <DialogTitle>
        {" "}
        {/* {translate(`app.roles.${props.item.roleId ? "edit" : "add"}`)} */}
      </DialogTitle>
      <Formik
        enableReinitialize
        initialValues={{ initialValues }}
        // onSubmit={(e) => {
        //   handleSubmit(e);
        // }}
        onSubmit={(values) => {
          const formData = new FormData();
          formData.append("image", image);
          formData.append("caption", allValues.caption);
          formData.append("description", allValues.description);
          formData.append("type", allValues.type);
          //values = { ...allValues, image: file };
          //debugger;
          // if (!props.item.id) values.active = true;
          // if (!tab)
          // values.user_id = ;

          console.log("onSubmit: ", formData);
          props.save(formData);
          // setOpenAlertDialog(values);
        }}
      >
        {(formikProps) => (
          <Form id={"ticketsDialogForm"} noValidate>
            <DialogContent>
              <Container>
                <Grid container spacing={2}>
                  <Grid item xs={12}>
                    <TextField
                      autoComplete="caption"
                      name="caption"
                      variant="outlined"
                      required
                      fullWidth
                      id="caption"
                      label="Caption"
                      autoFocus
                      value={allValues.caption}
                      onChange={set("caption")}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      variant="outlined"
                      required
                      fullWidth
                      multiline
                      rows={5}
                      id="description"
                      label="Description"
                      name="description"
                      value={allValues.description}
                      autoComplete="description"
                      onChange={set("description")}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      id="filled-select-currency-native"
                      select
                      label="Type"
                      value={allValues.type}
                      onChange={set("type")}
                      SelectProps={{
                        native: true,
                      }}
                      helperText="Please select type of the ticket"
                      variant="outlined"
                    >
                      {ticketTypes.map((option) => (
                        <option key={option.value} value={option.value}>
                          {option.label}
                        </option>
                      ))}
                    </TextField>
                    {/* <label htmlFor="icon-button-file">
                      <IconButton
                        color="primary"
                        aria-label="upload picture"
                        component="span"
                      >
                        <PhotoCamera />
                      </IconButton>
                    </label> */}
                  </Grid>
                  <Grid item xs={12}>
                    <input type="file" name="image" onChange={changeHandler} />
                  </Grid>
                </Grid>
              </Container>
            </DialogContent>
            <DialogActions>
              <Button color="primary" type="submit">
                Save
              </Button>
              <Button color="default" onClick={props.onClose}>
                Close
              </Button>
            </DialogActions>
            <Grid container justify="flex-end"></Grid>
          </Form>
        )}
      </Formik>
    </Dialog>

    // {/* {openAlertDialog && (
    // <AlertDialog
    //   id={"AddTicketAlertDialog"}
    //   open={openAlertDialog}
    //   item={openAlertDialog}
    //   onCloseYes={() => setOpenAlertDialog(false)}
    //   onClose={() => setOpenAlertDialog(false)}
    //   onFunction={props.save}
    //   //text={translate("app.notifications.saveConfirm")}
    // />
    // )} */}
  );
}
