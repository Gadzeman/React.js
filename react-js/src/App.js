import './App.css';
import React from "react"
import { Header } from "./components"
import { Products } from "./components";
import { ProductDetails } from "./components"
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom"

export default function App() {
    return (
        <Router>
            <div>
                <div>
                    <Header />
                </div>
                <Switch>
                    <Route path="/" exact>
                        <Redirect to="/products" />
                    </Route>
                    <Route path="/products" exact>
                        <Products />
                    </Route>
                    <Route path="/products/:id">
                        <ProductDetails />
                    </Route>
                    <Route path="/cart">
                        <div>cart</div>
                    </Route>
                    <Route path="/wishlist">
                        <div>wishlist</div>
                    </Route>
                </Switch>
            </div>
        </Router>
  );
}

