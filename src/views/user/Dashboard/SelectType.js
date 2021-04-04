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

const ticketTypes = [
  {
    value: "theater",
    label: "theater",
  },
  {
    value: "concert",
    label: "concert",
  },
  {
    value: "football game",
    label: "football game",
  },
  {
    value: "basketball game",
    label: "basketball game",
  },
  {
    value: "gallery exibition",
    label: "gallery exibiton",
  },
  {
    value: "museum visit",
    label: "museum visit",
  },
  {
    value: "other",
    label: "other",
  },
];

export default function SelectType() {
  const [type, setType] = React.useState("concert");

  const handleChange = (event) => {
    setType(event.target.value);
  };

  return (
    <TextField
      id="filled-select-currency-native"
      select
      label="Type"
      value={type}
      onChange={handleChange}
      SelectProps={{
        native: true,
      }}
      helperText="Please select type of the ticket"
      variant="filled"
    >
      {ticketTypes.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </TextField>
  );
}
