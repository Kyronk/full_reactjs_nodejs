import axios from "axios";

const BASE_URL = "http://localhost:5000/api/";
const TOKEN = 
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzM2RjNjdlMGYzZmVhMTI4N2NiZmRjMCIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY2NTMzNjgyMywiZXhwIjoxNjY1NTk2MDIzfQ.ckF0vmzj-S9GDq1htFf4FThYjw7DbCfSQODUUMCPPNg";


export const publicRequest = axios.create({
    baseURL: BASE_URL,
})

export const userRequest = axios.create({
    baseURL: BASE_URL,
    headers: {
        // token: `Bearer ${TOKEN}`,
        token : `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzM2RjNjdlMGYzZmVhMTI4N2NiZmRjMCIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY2NTMzNjgyMywiZXhwIjoxNjY1NTk2MDIzfQ.ckF0vmzj-S9GDq1htFf4FThYjw7DbCfSQODUUMCPPNg`
    },
})
