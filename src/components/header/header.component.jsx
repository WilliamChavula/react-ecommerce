import React from 'react';
import { connect } from "react-redux";
import {createStructuredSelector} from "reselect";

import {selectCartHidden} from "../../redux/cart/cart.selectors";
import {selectCurrentUser} from "../../redux/user/user.selectors";


import CartDropDownComponent from '../cart-dropdown/cart-dropdown.component'
import CartIconComponent from '../cart-icon/cart-icon.component'
import {ReactComponent as Logo} from '../../assets/083 crown.svg'

import { HeaderContainer,LogoContainer, OptionsContainer, OptionLink } from './header.styles'
import {signOutStart} from "../../redux/user/user.actions";

const HeaderComponent = ({ currentUser, hidden, signOUtStart }) => (
    <HeaderContainer>
        <LogoContainer to='/'>
            <Logo className='logo' />
        </LogoContainer>
        <OptionsContainer>
            <OptionLink to='/shop' >SHOP</OptionLink>
            {
                currentUser ?
                    <OptionLink as='div' onClick={signOUtStart}>
                        SIGN OUT
                    </OptionLink> :
                    <OptionLink to='/sign-in'> SIGN IN</OptionLink>
            }
            <CartIconComponent />
        </OptionsContainer>
        {
            hidden ? null : <CartDropDownComponent />
        }
    </HeaderContainer>
);

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
    hidden: selectCartHidden
})

const mapDispatchToProps = dispatch => ({
  signOUtStart: () => dispatch(signOutStart())
})

export default connect(mapStateToProps, mapDispatchToProps)(HeaderComponent);