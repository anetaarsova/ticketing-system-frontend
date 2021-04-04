import React, { Component } from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import { Redirect, useHistory } from "react-router-dom";
import axios from "axios";
import SelectType from "./Dashboard/SelectType";

export class AddTicket extends Component {
  constructor(props) {
    super(props);

    this.state = {
      caption: null,
      description: null,
      type: null,
      image: null,
      user_id: null,
    };
  }

  handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    console.log(name, value);
    this.setState({
      [name]: value,
    });
  };
  handlesubmit = (e) => {
    e.preventDefault();
    const data = this.state;

    const user = JSON.parse(localStorage.getItem("user"));
    data.user_id = user.id;

    const token = localStorage.getItem("token");
    const instance = axios.create({
      baseURL: "http://127.0.0.1:8000/api/",
      timeout: 1000,
      headers: { Authorization: "Bearer " + token },
    });

    instance.post("/tickets", data).then((response) => {
      console.log("response", response.data);
    });
  };

  render() {
    const token = localStorage.getItem("token");
    if (!token) {
      return <Redirect to="/home" />;
    }
    return (
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div>
          {/* className={classes.paper} */}
          <Typography component="h1" variant="h5">
            Upload ticket
          </Typography>
          <form noValidate onSubmit={this.handlesubmit}>
            {/* className={classes.form} */}
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
                  onChange={this.handleChange}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  id="description"
                  label="Description"
                  name="description"
                  autoComplete="description"
                  onChange={this.handleChange}
                />
              </Grid>
              <Grid item xs={12}>
                <SelectType />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  name="image"
                  label="image"
                  id="image"
                  onChange={this.handleChange}
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              // className={classes.submit}
            >
              Upload
            </Button>
            <Grid container justify="flex-end"></Grid>
          </form>
        </div>
      </Container>
    );
  }
}
export default AddTicket;
