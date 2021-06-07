import constants from "./constants";
import { Redirect } from "react-router-dom";

const addTicketRequest = (request) => {
  return {
    type: constants.ADD_TICKET_REQUEST,
    payload: request,
  };
};

const addTicketSuccess = (ticket) => {
  return {
    type: constants.ADD_TICKET_SUCCESS,
    payload: ticket,
  };
};

const addTicketFail = (error) => {
  return {
    type: constants.ADD_TICKET_FAILURE,
    payload: error,
  };
};

const getTicketsRequest = (request) => {
  return {
    type: constants.GET_TICKETS_REQUEST,
    payload: request,
  };
};

const getTicketsSuccess = (tickets) => {
  return {
    type: constants.GET_TICKETS_SUCCESS,
    payload: tickets,
  };
};

const getTicketsFail = (error) => {
  return {
    type: constants.GET_TICKETS_FAILURE,
    payload: error,
  };
};

const getTicketsByUserRequest = (request) => {
  return {
    type: constants.GET_TICKETS_BY_USER_REQUEST,
    payload: request,
  };
};

const getTicketsByUserSuccess = (tickets) => {
  return {
    type: constants.GET_TICKETS_BY_USER_SUCCESS,
    payload: tickets,
  };
};

const getTicketsByUserFail = (error) => {
  return {
    type: constants.GET_TICKETS_BY_USER_FAILURE,
    payload: error,
  };
};

const updateTicketRequest = (request) => {
  return {
    type: constants.UPDATE_TICKET_REQUEST,
    payload: request,
  };
};

const updateTicketSuccess = (ticket) => {
  return {
    type: constants.UPDATE_TICKET_SUCCESS,
    payload: ticket,
  };
};

const updateTicketFail = (error) => {
  return {
    type: constants.UPDATE_TICKET_FAILURE,
    payload: error,
  };
};

const deleteTicketRequest = (request) => {
  return {
    type: constants.DELETE_TICKET_REQUEST,
    payload: request,
  };
};

const deleteTicketSuccess = (ticket) => {
  return {
    type: constants.DELETE_TICKET_SUCCESS,
    payload: ticket,
  };
};

const deleteTicketFail = (error) => {
  return {
    type: constants.DELETE_TICKET_FAILURE,
    payload: error,
  };
};

const resetTicket = () => {
  return <Redirect to="/home" />;
  // return {
  //   type: constants.RESET_TICKET,
  //   payload: {},
  // };
};

export default {
  addTicketRequest,
  addTicketSuccess,
  addTicketFail,
  getTicketsRequest,
  getTicketsSuccess,
  getTicketsFail,
  getTicketsByUserRequest,
  getTicketsByUserSuccess,
  getTicketsByUserFail,
  updateTicketRequest,
  updateTicketSuccess,
  updateTicketFail,
  deleteTicketRequest,
  deleteTicketSuccess,
  deleteTicketFail,
  resetTicket,
};
