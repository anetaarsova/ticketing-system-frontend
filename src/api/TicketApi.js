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
    return instance
        .post("/tickets", ticket)
        .then((response) => Promise.resolve(response));
};

// headers: instance.headers,
// url: `${instance.baseURL}/tickets`,
// method: "GET",
export const getAllTickets = () => {
    return instance.get("/tickets").then((response) => Promise.resolve(response));
};

export const getAllTicketsByUser = (userId) => {
     userId = JSON.stringify(user.id);
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


export const editTicket = (ticketId, ticket) => {
    console.log("ticket in edit ticket function", ticketId);
    return axios
        .put({
            headers: {
                Authorization: "Bearer " + token,
                "content-type": "application/json",
                "X-Requested-With": "XMLHttpRequest",
            },
            url: `http://127.0.0.1:8000/api/tickets`,
            data: { ...ticketId, ticket },
        })
        .then((response) => Promise.resolve(response));
};

export const deleteTicket = (id) => {
    return instance
        .delete("tickets/${id}", id)
        .then((response) => Promise.resolve(response));
};