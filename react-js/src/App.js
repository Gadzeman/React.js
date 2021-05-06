import './App.css';
import React from "react"
import Header from "./components/header"
import Products from "./components/products";

export default function App() {
    return (
        <div>
            <div>
                <Header />
            </div>
            <div>
                <Products />
            </div>
        </div>
  );
}

