import {Component} from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import {createStructuredSelector} from "reselect";

import HomePage from "./pages/homepage/homepage.component";
import ShopComponent from "./pages/shop/shop.component";
import CheckoutComponent from './pages/checkout/checkout.component'
import HeaderComponent from "./components/header/header.component";
import AuthenticationPageComponent from "./pages/authentication-page/authentication-page.component";

import { selectCurrentUser } from './redux/user/user.selectors'

import './App.css'

class App extends Component {
    render() {
        return (
            <div>
                <HeaderComponent />
                <Switch>
                    <Route path='/' component={HomePage} exact/>
                    <Route path='/shop' component={ShopComponent}/>
                    <Route path='/checkout' component={CheckoutComponent} />
                    <Route path='/sign-in' render={
                        () =>
                        this.props.currentUser ? (
                            <Redirect to='/' />
                        ) : (
                            <AuthenticationPageComponent />
                        )
                    } exact />
                </Switch>
            </div>
        );
    }
}
const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser
})


export default connect(mapStateToProps)(App);
