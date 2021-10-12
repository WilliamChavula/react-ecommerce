import {Component} from "react";
import { Switch, Route } from "react-router-dom";
import { onSnapshot } from "firebase/firestore";
import HomePage from "./pages/homepage/homepage.component";
import ShopComponent from "./pages/shop/shop.component";
import HeaderComponent from "./components/header/header.component";
import AuthenticationPageComponent from "./pages/authentication-page/authentication-page.component";
import { auth, createUserProfileDocument } from "./firebase/firebase.utils";


import './App.css'

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentUser: null
        }
    }

    unSubscribribeFromAuth = null
    unsubscribeOnSnapshot = null

    componentDidMount() {
        this.unSubscribribeFromAuth = auth.onAuthStateChanged(async userAuth => {
            if (userAuth) {
                const userRef = await createUserProfileDocument(userAuth)

                this.unsubscribeOnSnapshot = onSnapshot(userRef, (documentSnap) => {
                    this.setState({
                        currentUser: {
                            id: documentSnap.id,
                            ...documentSnap.data()
                        }
                    })
                });
                this.setState({ currentUser: userAuth })
            }
        })
    }

    componentWillUnmount() {
        this.unsubscribeOnSnapshot();
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
