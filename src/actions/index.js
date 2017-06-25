export const LOGIN = "login";

export const DUMMY_LOGIN = {
    user: "user",
    password: "password"
}

export function login() {
    console.log('hi');
    return {
        type: LOGIN,
        payload: DUMMY_LOGIN
    };
}
