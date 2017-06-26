import axios from 'axios';
export const LOGIN_AUTH = "login_auth";
const ROOT_URL = "http://192.168.3.38:8000/v1";

// export const DUMMY_LOGIN = {
//     user: "user",
//     password: "password"
// }

export function login(values, callback) {
    const request = axios.post(`${ROOT_URL}/auth/login/`, values)
    .then(() => callback());
    return {
        type: LOGIN_AUTH,
        payload: request
    };
}
