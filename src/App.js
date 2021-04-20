import React from "react"
import {useSelector, useDispatch} from "react-redux";
import {
    incCustomAction,
    incAction,
    decAction,
    resetAction,
    incCustomActionTwo,
    incActionTwo,
    decActionTwo,
    resetActionTwo,
} from "./redux/action-creators"

export default function App () {
    // const counter = useSelector(({counter1: {counter}}) => {
    //     console.log(counter)
    // })
    const counter1 = useSelector(({counter1: {counter}}) => {
        return counter
    })
    const counter2 = useSelector(({counter2: {counter}}) => {
        return counter
    })
    const dispatch = useDispatch()
    return (
        <div>
            <h1>{counter1} - 1</h1>
            <button onClick={() => dispatch(incCustomAction(102))}>INC CUSTOM</button>
            <button onClick={() => dispatch(incAction())}>INC</button>
            <button onClick={() => dispatch(decAction())}>DEC</button>
            <button onClick={() => dispatch(resetAction())}>RESET</button>
            <h1>{counter2} - 2</h1>
            <button onClick={() => dispatch(incCustomActionTwo(102))}>INC CUSTOM</button>
            <button onClick={() => dispatch(incActionTwo())}>INC</button>
            <button onClick={() => dispatch(decActionTwo())}>DEC</button>
            <button onClick={() => dispatch(resetActionTwo())}>RESET</button>
        </div>
    )
}