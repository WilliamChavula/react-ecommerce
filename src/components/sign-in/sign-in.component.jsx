import React, {Component} from 'react';
import { signInWithEmailAndPassword } from "firebase/auth";


import FormInputComponent from "../form-input/form-input.component";
import CustomButtonComponent from "../custom-buttom/custom-button.component";

import { signInWithGoogle, auth } from "../../firebase/firebase.utils";

import './sign-in.styles.scss'

class SignInComponent extends Component {
    state = {
        email: '',
        password: ''
    }

    handleSubmit = async evt => {
        evt.preventDefault()

        const { email, password } = this.state

        try {
            await signInWithEmailAndPassword(auth, email, password)
            this.setState({ email: '', password: ''})
        } catch (e) {
            // create a component to display to the user what's going on
            console.error(e)
        }


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