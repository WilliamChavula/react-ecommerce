import React from 'react';
import SignInComponent from "../../components/sign-in/sign-in.component";
import SignUpComponent from '../../components/sign-up/sign-up.component'

import './authentication-page.styles.scss'
import {AuthenticationPageContainer} from "./authentication-page.styles";


const AuthenticationPageComponent = () => (
    <AuthenticationPageContainer>
        <SignInComponent />
        <SignUpComponent />
    </AuthenticationPageContainer>
);

export default AuthenticationPageComponent;