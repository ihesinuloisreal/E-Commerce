import axios from "axios";

const BASE_URL = "http://localhost:5000/api/";
const TOKEN = 
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzOGRjNjE0NDQ2OTcwZmE3MTE2NDQ2YyIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY3MjAyMTA0MCwiZXhwIjoxNjcyMjgwMjQwfQ.ViyiRO7e9gPZyTofyBcvJPL8ZNmfCx41iCCn_cKeBEw";

export const publicRequest = axios.create({
    baseURL: BASE_URL,
});

export const userRequest = axios.create({
    baseURL: BASE_URL,
    headers: { token: `Bearer ${TOKEN}` },
});