import React from "react"
import {useSelector, useDispatch} from "react-redux";
import {
    incOne,
    decOne,
    updateOne,
    incTwo,
    decTwo,
    updateTwo,
} from "./redux/action-creators/action-creators"

export default function App () {
    const counter1 = useSelector(({counter1: {counter}}) => {
        return counter
    })
    const counter2 = useSelector(({counter2: {counter}}) => {
        return counter
    })
    const dispatch = useDispatch()
    return (
        <div>
            <h1>{counter1}</h1>
            <button onClick={() => dispatch(updateOne(116))}>UPDATE</button>
            <button onClick={() => dispatch(incOne())}>INC</button>
            <button onClick={() => dispatch(decOne())}>DEC</button>
            <h1>{counter2}</h1>
            <button onClick={() => dispatch(updateTwo(1123))}>UPDATE</button>
            <button onClick={() => dispatch(incTwo())}>INC</button>
            <button onClick={() => dispatch(decTwo())}>DEC</button>
        </div>
    )
}

