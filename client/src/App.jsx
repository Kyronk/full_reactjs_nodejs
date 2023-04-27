import React from "react";
import Cart from "./Pages/Cart";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Product from "./Pages/Product";
import ProductList from "./Pages/ProductList";
import Register from "./Pages/Register";

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Redirect
} from "react-router-dom";
import { useSelector } from "react-redux";

const App = () => {
    const user = useSelector((state) => state.user.currentUser);
    return (
        <Router>
            <Switch>
                <Route path="/" exact>
                    <Home />
                </Route>
                <Route path="/products/:category" >
                    <ProductList />
                </Route>
                <Route path="/product/:id" exact>
                    <Product />
                </Route>
                <Route path="/cart" exact>
                    <Cart />
                </Route>
                <Route path="/login" exact>
                    {user ? <Redirect to="/" /> : <Login />}
                </Route>
                <Route path="/register" exact>
                    {user ? <Redirect to="/" /> : <Register />}
                </Route>
            </Switch>
            {/* <ProductList /> */}
            {/* <Product /> */}
            {/* <Register /> */}
            {/* <Login /> */}
            {/* <Cart /> */}
        </Router>
    )
}

export default App;
