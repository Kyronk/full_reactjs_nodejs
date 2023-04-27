import axios from "axios";

const BASE_URL = "http://localhost:5000/api/";
const TOKEN =   JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user).currentUser


// console.log(JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user).currentUser.accessToken);

export const publicRequest = axios.create({
    baseURL: BASE_URL,
})

export const userRequest = axios.create({
    baseURL: BASE_URL,
    headers: {
        //token: `Bearer ${TOKEN}`
        token : `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzM2RjNjdlMGYzZmVhMTI4N2NiZmRjMCIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY2NjE3MzcxOSwiZXhwIjoxNjY2NDMyOTE5fQ.nbwwZ1r0TiEfQnaUwME3Bw5qbODUSn9MZkOpCClvQN8`
    },
})

// import axios from "axios";

// const BASE_URL = "http://localhost:5000/api/";
// // const TOKEN =
// //   JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user).currentUser
// //     .accessToken || "";

// const user = JSON.parse(localStorage.getItem("persist:root"))?.user;
// const currentUser = user && JSON.parse(user).currentUser;
// const TOKEN = currentUser?.accessToken;

// export const publicRequest = axios.create({
//     baseURL: BASE_URL,
// });

// export const userRequest = axios.create({
//     baseURL: BASE_URL,
//     header: { token: `Bearer ${TOKEN}` },
// });
