import React from 'react';
import { connect } from "react-redux";
import {createStructuredSelector} from "reselect";


import { auth } from "../../firebase/firebase.utils";
import {selectCartHidden} from "../../redux/cart/cart.selectors";
import {selectCurrentUser} from "../../redux/user/user.selectors";


import CartDropDownComponent from '../cart-dropdown/cart-dropdown.component'
import CartIconComponent from '../cart-icon/cart-icon.component'
import {ReactComponent as Logo} from '../../assets/083 crown.svg'

import { HeaderContainer,LogoContainer, OptionsContainer, OptionLink } from './header.styles'

const HeaderComponent = ({ currentUser, hidden }) => (
    <HeaderContainer>
        <LogoContainer to='/'>
            <Logo className='logo' />
        </LogoContainer>
        <OptionsContainer>
            <OptionLink to='/shop' >SHOP</OptionLink>
            {
                currentUser ?
                    <OptionLink as='div' onClick={() => auth.signOut()}>
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

export default connect(mapStateToProps)(HeaderComponent);