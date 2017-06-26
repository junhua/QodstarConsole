import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { login } from '../actions';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';


class LoginForm extends React.Component {
    renderField(field){
        return (
            <div className="form-group">
                <label>{field.label}</label>
                <input
                    className="form-control"
                    type={field.type}
                    {...field.input}
                />
            </div>
        );
    }

    onSubmit(values) {
        this.props.login(values, () => {
            browserHistory.push("/jobs");
        });
    }

    render() {
        const { handleSubmit } = this.props;
        return (
            <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
                <Field
                    label="Email"
                    name="email"
                    component={this.renderField}
                    type="text"
                />
                <Field
                    label="Password"
                    name="password"
                    component={this.renderField}
                    type="password"
                />

                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        );
    }
}

export default reduxForm({
    form: 'PostsNewForm'
})(
    connect(null, { login })(LoginForm)
);
