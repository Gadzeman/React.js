import './App.css';
import React from "react"
import { Header } from "./components"
import { Products } from "./components";

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

