import actions from "./actions";

import {
  addTicket,
  getAllTickets,
  getAllTicketsByUser,
  editTicket,
  deleteTicket
} from "../../api/TicketApi";

const createTicket = (ticketDetails) => {
  console.log("ticketDetails", ticketDetails);
  return (dispatch, getState) => {
    dispatch(actions.addTicketRequest());
    return addTicket(ticketDetails)
      .then((returnedItem) => {
        console.log("returned item", returnedItem);
        dispatch(actions.addTicketSuccess(returnedItem));
        return Promise.resolve(returnedItem);
      })
      .catch((e) => {
        dispatch(actions.addTicketFail(e));
        // console.log("e", e);
        return Promise.reject(e);
      });
  };
};


const getTickets = () => {
  return (dispatch, getState) => {
    dispatch(actions.getTicketsRequest());
    return getAllTickets()
      .then((returnedItem) => {
        dispatch(actions.getTicketsSuccess(returnedItem));
        return Promise.resolve(returnedItem);
      })
      .catch((e) => {
        dispatch(actions.getTicketsFail(e));
        return Promise.reject(e);
      });
  };
};

// export const getAllTicketsByUser = (userId) => {
//   return instance
//     .get(`/tickets/${userId}`)
//     .then((response) => Promise.resolve(response));
// };
const getTicketsByUser = (userId) => {
  return (dispatch, getState) => {
    dispatch(actions.getTicketsByUserRequest(userId));
    return getAllTicketsByUser(userId)
      .then((returnedItem) => {
        console.log("returned item", returnedItem);
        dispatch(actions.getTicketsByUserSuccess(returnedItem));
        return Promise.resolve(returnedItem);
      })
      .catch((e) => {
        dispatch(actions.getTicketsByUserFail(e));
        // console.log("e", e);
        return Promise.reject(e);
      });
  };
};

const updateTicket = (ticketId, ticketDetails) => {
  return (dispatch, getState) => {
    dispatch(actions.updateTicketRequest());
    return editTicket(ticketId, ticketDetails)
      .then((returnedItem) => {
        dispatch(actions.updateTicketSuccess(returnedItem));
        return Promise.resolve(returnedItem);
      })
      .catch((e) => {
        dispatch(actions.updateTicketFail(e));
        return Promise.reject(e);
      });
  };
};

// export const addTicket = (ticket) => {
//   ticket.append("user_id", user.id);
//   console.log("ticket", ticket);
//   return instance
//     .post("/tickets", ticket)
//     .then((response) => Promise.resolve(response));
// };

const removeTicket = (id) => {
  return (dispatch, getState) => {
    dispatch(actions.deleteTicketRequest());
    return deleteTicket(id)
      .then((returnedItem) => {
        dispatch(actions.deleteTicketSuccess(id));
        return Promise.resolve(returnedItem);
      })
      .catch((e) => {
        dispatch(actions.deleteTicketFail(e));
        Promise.reject(e);
      });
  };
};

const resetTicket = () => {
  return (dispatch) => {
    return dispatch(actions.resetTicket());
  };
};

export default {
  createTicket,
  getTickets,
  updateTicket,
  removeTicket,
  resetTicket,
  getTicketsByUser,
};
