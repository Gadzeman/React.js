import './App.css';
import React from "react"
import {useSelector, useDispatch} from "react-redux";
import {incCounter, decCounter} from "./redux/action-creators/action-creators";
import Products from "./components/products"


export default function App() {
    const dispatch = useDispatch()
    const counter = useSelector(({counter: {counter}}) => {
        return counter
    })
  return (
    <div>
        <h1>Redux MiddleWares</h1>
        <h1>{counter}</h1>
        <button onClick={() => dispatch(incCounter())}>INC</button>
        <button onClick={() => dispatch(decCounter())}>DEC</button>
        <hr/>
        <Products />
    </div>
  );
}

