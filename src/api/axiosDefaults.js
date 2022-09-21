// External
import axios from "axios";

axios.defaults.baseURL = "https://crepchat-api.herokuapp.com/";
axios.defaults.headers.post["Content-Type"] = "multipart/form-data";
// ! Uncomment this line when going to production!
axios.defaults.withCredentials = true;
