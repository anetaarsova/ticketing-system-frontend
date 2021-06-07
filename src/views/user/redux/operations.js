import actions from "./actions";
import axios from "axios";

const user = JSON.parse(localStorage.getItem("user"));
const token = localStorage.getItem("token");
// console.log("user id", user.id);
// console.log("token in operations", token);
const instance = axios.create({
  baseURL: "http://127.0.0.1:8000/api/",
  //timeout: 1000,
  headers: {
    Authorization: "Bearer " + token,
    "content-type": "application/json",
    "X-Requested-With": "XMLHttpRequest",
  },
});

export const addTicket = (ticket) => {
  ticket.append("user_id", user.id);
  console.log("ticket", ticket);
  return instance.post("/tickets", ticket).then((response) => {
    console.log("response", response);
    Promise.resolve(response);
    if (response) return response.data.data;
  });
};

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

export const getAllTickets = () => {
  return axios
    .post({
      headers: instance.headers,
      url: `${instance.baseURL}/tickets`,
      method: "GET",
    })
    .then((response) => Promise.resolve(response));
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

export const getAllTicketsByUser = (userId) => {
  console.log("user id", userId);
  return axios({
    headers: {
      Authorization: "Bearer " + token,
      "content-type": "application/json",
      "X-Requested-With": "XMLHttpRequest",
    },
    url: `http://127.0.0.1:8000/api/tickets/user/${userId}`,
    method: "GET",
  }).then((response) => Promise.resolve(response));
};

// export const getAllTicketsByUser = (userId) => {
//   return instance
//     .get(`/tickets/${userId}`)
//     .then((response) => Promise.resolve(response));
// };
const getTicketsByUser = () => {
  const userId = JSON.stringify(user.id);
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

export const editTicket = (ticket) => {
  return axios
    .post({
      headers: instance.headers,
      url: `${instance.baseURL}/tickets`,
      method: "PUT",
      data: { ...ticket },
    })
    .then((response) => Promise.resolve(response));
};

const updateTicket = (ticketDetails) => {
  return (dispatch, getState) => {
    dispatch(actions.updateTicketRequest());
    return editTicket(ticketDetails)
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

export const deleteTicket = (id) => {
  return axios
    .post({
      headers: instance.headers,
      url: `${instance.baseURL}/tickets`,
      method: "DELETE",
      data: { ...id },
    })
    .then((response) => Promise.resolve(response));
};

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
