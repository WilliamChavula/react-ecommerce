import { Switch, Route } from "react-router-dom";
import HomePage from "./pages/homepage/homepage.component";
import ShopComponent from "./pages/shop/shop.component";
import HeaderComponent from "./components/header/header.component";

import './App.css'
import AuthenticationPageComponent from "./pages/authentication-page/authentication-page.component";

function App() {
  return (
    <div>
        <HeaderComponent />
        <Switch>
            <Route path='/' component={ HomePage } exact />
            <Route path='/shop' component={ ShopComponent } />
            <Route path='/sign-in' component={ AuthenticationPageComponent } />
        </Switch>
    </div>
  );
}

export default App;
