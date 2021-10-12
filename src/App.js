import {Component} from "react";
import { Switch, Route } from "react-router-dom";
import HomePage from "./pages/homepage/homepage.component";
import ShopComponent from "./pages/shop/shop.component";
import HeaderComponent from "./components/header/header.component";
import AuthenticationPageComponent from "./pages/authentication-page/authentication-page.component";
import { auth } from "./firebase/firebase.utils";


import './App.css'

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentUser: null
        }
    }

    unSubscribribeFromAuth = null

    componentDidMount() {
        this.unSubscribribeFromAuth = auth.onAuthStateChanged(user => {
            this.setState({ currentUser: user },
                () => console.log(this.state.currentUser))
        })
    }

    componentWillUnmount() {
        this.unSubscribribeFromAuth();
    }

    render() {
        return (
            <div>
                <HeaderComponent currentUser={ this.state.currentUser }/>
                <Switch>
                    <Route path='/' component={HomePage} exact/>
                    <Route path='/shop' component={ShopComponent}/>
                    <Route path='/sign-in' component={AuthenticationPageComponent}/>
                </Switch>
            </div>
        );
    }
}

export default App;
