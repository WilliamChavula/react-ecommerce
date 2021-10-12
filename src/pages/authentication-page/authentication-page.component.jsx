import React from 'react';
import SignInComponent from "../../components/sign-in/sign-in.component";
import SignUpComponent from '../../components/sign-up/sign-up.component'

import './authentication-page.styles.scss'

const AuthenticationPageComponent = () => (
    <div className="authentication">
        <SignInComponent />
        <SignUpComponent />
    </div>
);

export default AuthenticationPageComponent;