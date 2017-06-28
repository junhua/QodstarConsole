import axios from 'axios';
export const LOGIN_AUTH = "login_auth";
const ROOT_URL = "http://119.23.151.225:8000/v1";

export const FETCH_POSTS = 'fetch_posts';
export const FETCH_JOBS = "fetch_jobs";

const DUMMY_JOBS = [
    {
        id: 1,
        title: "title 1",
        description: "description 1"
    },
    {
        id: 2,
        title: "title 2",
        description: "description 2"
    }
]

export function login(values, callback) {
    const request = axios.post(`${ROOT_URL}/auth/login/`, values)
    .then(() => callback());
    return {
        type: LOGIN_AUTH,
        payload: request
    };
}


export function fetchJobs() {
//     const request = axios.post(`${ROOT_URL}/jobs/`);
    console.log(DUMMY_JOBS);
    return {
        type: FETCH_JOBS,
        payload: DUMMY_JOBS
    };
}



export function fetchPosts() {
    const request = axios.get(`${ROOT_URL}/posts${API_KEY}`);

    return {
        type: FETCH_POSTS,
        payload: request
    };
}
