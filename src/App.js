import { Switch, Route } from "react-router-dom";
import HomePage from "./pages/homepage/homepage.component";
import ShopComponent from "./pages/shop/shop.component";
import HeaderComponent from "./components/header/header.component";

import './App.css'

function App() {
  return (
    <div>
        <HeaderComponent />
        <Switch>
            <Route path='/' component={ HomePage } exact />
            <Route path='/shop' component={ ShopComponent } />
        </Switch>
    </div>
  );
}

export default App;
