// External
import axios from "axios";

// Railway URL
axios.defaults.baseURL = "https://crepchat-api.up.railway.app/";

// COMMENT WHEN DEPLOYING
// axios.defaults.baseURL = "http://127.0.0.1:8000/";

axios.defaults.headers.post["Content-Type"] = "multipart/form-data";
axios.defaults.withCredentials = true;

export const axiosReq = axios.create();
export const axiosRes = axios.create();
