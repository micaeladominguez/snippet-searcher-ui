import axios from 'axios';
import { getCookie } from "cookies-next";

const token = getCookie("token");

axios.defaults.baseURL = 'http://localhost:8080/'
axios.defaults.headers.common = {'Authorization': `bearer ${token}`}
export default axios;
