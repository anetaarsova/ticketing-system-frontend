import axios from "axios";

const user = JSON.parse(localStorage.getItem("user"));
const token = localStorage.getItem("token");
// console.log("user id", user.id);
// console.log("token in operations", token);
const instance = axios.create({
    baseURL: "http://127.0.0.1:8000/api/auth/",
    //timeout: 1000,
    headers: {
        Authorization: "Bearer " + token,
        "content-type": "application/json",
        "X-Requested-With": "XMLHttpRequest",
    },
});

// axios.post("http://127.0.0.1:8000/api/auth/login", data).then((res) => {
//     console.log(res);
//     const user = JSON.stringify(res.data.user);
//     localStorage.setItem("token", res.data.access_token);
//     localStorage.setItem("user", user);

// axios.post("http://127.0.0.1:8000/api/auth/register", data).then((res) => {
//     console.log(res);
//     console.log(res.data.user);
//     const user = JSON.stringify(res.data.user);
//     localStorage.setItem("token", res.data.access_token);
//     localStorage.setItem("user", user);

 export const userLogin = (user) => {
   return instance
         .post("/login", user)
         .then((response) => Promise.resolve(response));
    };

export const userRegister = (user) => {
    return instance
        .post("/register", user)
        .then((response) => Promise.resolve(response));
};