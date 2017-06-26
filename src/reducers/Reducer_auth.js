import _ from 'lodash';
import { LOGIN_AUTH } from '../actions';

export default function (state = {}, action) {
    switch (action.type) {
        case LOGIN_AUTH:
            return state;

        default:
            return state;
    }
}
