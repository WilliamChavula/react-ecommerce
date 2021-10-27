import React, { Component } from 'react';
import {connect} from "react-redux";

import FormInput from '../form-input/form-input.component'
import CustomButton from '../custom-buttom/custom-button.component'

import { signUpStart} from "../../redux/user/user.actions";

import { Title, SignUpContainer } from "./sign-up.styles";


class SignUpComponent extends Component {
    state = {
        displayName: '',
        email: '',
        password: '',
        confirmPassword: ''
    }

    handleSubmit = async evt => {
        evt.preventDefault()
        const { signUpStart } = this.props
        const { displayName, email, password, confirmPassword } = this.state

        if (password !== confirmPassword) {
            alert("passwords don't match")
            return
        }

        signUpStart({ displayName, email, password })
    }

    handleChange = evt => {
        const { name, value } = evt.target

        this.setState({
            [name]: value
        })
    }

    render() {
        const { displayName, email, password, confirmPassword } = this.state
        return (
            <SignUpContainer>
                <Title>I do not have an account</Title>
                <span className="subtitle">Sign up with your email and password</span>
                <form className='sign-up-form' onSubmit={this.handleSubmit}>
                    <FormInput
                        type='text'
                        name='displayName'
                        value={displayName}
                        label='Display Name'
                        handleChange={this.handleChange}
                        required
                    />
                    <FormInput
                        type='email'
                        name='email'
                        value={email}
                        label='Email'
                        handleChange={this.handleChange}
                        required
                    />
                    <FormInput
                        type='password'
                        name='password'
                        value={password}
                        label='Password'
                        handleChange={this.handleChange}
                        required
                    />
                    <FormInput
                        type='password'
                        name='confirmPassword'
                        value={confirmPassword}
                        label='Confirm Passowrd'
                        handleChange={this.handleChange}
                        required
                    />
                    <CustomButton type='submit'>SIGN UP</CustomButton>
                </form>
            </SignUpContainer>
        )
    }
}

const mapDispatchToProps = dispatch => ({
  signUpStart: userCredentials => dispatch(signUpStart(userCredentials))
})

export default connect(null, mapDispatchToProps)(SignUpComponent);