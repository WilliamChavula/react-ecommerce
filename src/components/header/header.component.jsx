import React from 'react';
import {Link} from "react-router-dom";
import { connect } from "react-redux";

import { auth } from "../../firebase/firebase.utils";

import {ReactComponent as Logo} from '../../assets/083 crown.svg'

import './header.styles.scss'

const HeaderComponent = ({ currentUser }) => (
    <div className='header'>
        <Link className='logo-container' to='/'>
            <Logo className='logo' />
        </Link>
        <div className="options">
            <Link to='/shop' className='option'>SHOP</Link>
            <Link to='/contact' className='option'>CONTACT</Link>
            {
                currentUser ?
                    <div className='option' onClick={() => auth.signOut()}>
                        SIGN OUT
                    </div> :
                    <Link className='option' to='/sign-in'> SIGN IN</Link>
            }
        </div>
    </div>
);

const mapStateToProps = state => ({
    currentUser: state.user.currentUser
})

export default connect(mapStateToProps)(HeaderComponent);