import {combineReducers} from "redux"
import products from "./products-reducer"
import cart from "./cart-reducer"
import wishlist from "./wishlist-reducer"

export const reducers = combineReducers({
    products,
    cart,
    wishlist
})