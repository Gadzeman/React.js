import {combineReducers} from "redux"
import counter from "./counter-reducer"
import products from "./products-reducer"

export const reducers = combineReducers({
    counter,
    products
})