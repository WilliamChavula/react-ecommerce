import React, {Component} from 'react';
import { connect } from "react-redux";
import { googleSIgnInStart, emailSIgnInStart } from "../../redux/user/user.actions";

import FormInputComponent from "../form-input/form-input.component";
import CustomButtonComponent from "../custom-buttom/custom-button.component";

import './sign-in.styles.scss'

class SignInComponent extends Component {
    state = {
        email: '',
        password: ''
    }

    handleSubmit = async evt => {
        evt.preventDefault()

        const { email, password } = this.state
        const { emailSIgnInStart } = this.props

        emailSIgnInStart(email, password)
    }

    handleChange = evt => {
        const { value, name } = evt.target
        this.setState({ [name]: value })
    }

    render() {
        const { googleSIgnInStart } = this.props
        return (
            <div className='sign-in'>
                <h2>I already have an account</h2>
                <span>Sign in with your email and password</span>
                <form onSubmit={ this.handleSubmit }>
                    <FormInputComponent
                        name='email'
                        label='Email'
                        value={this.state.email}
                        handleChange={this.handleChange}
                        required
                    />
                    <FormInputComponent
                        name='password'
                        label='Password'
                        type='password'
                        value={this.state.password}
                        handleChange={this.handleChange}
                        required
                    />
                    <div className="buttons">
                        <CustomButtonComponent type="submit"> Sign in </CustomButtonComponent>
                        <CustomButtonComponent type='button' onClick={googleSIgnInStart} isGoogleSignIn>
                            Sign in with Google
                        </CustomButtonComponent>
                    </div>
                </form>
            </div>
        );
    }
}

const mapDispatchToProps = dispatch => ({
    googleSIgnInStart: () => dispatch(googleSIgnInStart()),
    emailSIgnInStart: (email, password) => dispatch(emailSIgnInStart({email, password}))
})

export default connect(null, mapDispatchToProps)(SignInComponent);