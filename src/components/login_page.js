import React from 'react';
import { Field, reduxForm } from 'redux-form';
import LoginForm from './login_form';

export default class LoginPage extends React.Component {
    render() {
        return (
            <LoginForm />
        );
    }
}
