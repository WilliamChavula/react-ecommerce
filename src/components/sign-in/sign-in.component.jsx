import React, {Component} from 'react';
import FormInputComponent from "../form-input/form-input.component";
import CustomButtonComponent from "../custom-buttom/custom-button.component";

import { signInWithGoogle } from "../../firebase/firebase.utils";


import './sign-in.styles.scss'

class SignInComponent extends Component {
    state = {
        email: '',
        password: ''
    }

    handleSubmit = evt => {
        evt.preventDefault()

        this.setState({ email: '', password: ''})
    }

    handleChange = evt => {
        const { value, name } = evt.target
        this.setState({ [name]: value })
    }

    render() {
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
                        <CustomButtonComponent onClick={signInWithGoogle} isGoogleSignIn>
                            Sign in with Google
                        </CustomButtonComponent>
                    </div>
                </form>
            </div>
        );
    }
}

export default SignInComponent;