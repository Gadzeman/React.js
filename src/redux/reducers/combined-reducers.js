import {combineReducers} from "redux";
import reducerOne from "./counter-one-reducer"
import reducerTwo from "./counter-two-reducer"
import userReducer from "./users-reducer"

export const reducer = combineReducers({
    counter1: reducerOne,
    counter2: reducerTwo,
    userReducer
})