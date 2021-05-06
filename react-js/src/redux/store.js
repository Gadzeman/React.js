import {reducers} from "./reducers/combined-reducers"
import {createStore, applyMiddleware} from "redux";
import thunk from "redux-thunk"

const persister = (store) => (next) => (action) => {
    next(action)
    const {cart, wishlist} = store.getState()
    localStorage.setItem("cart", JSON.stringify(cart))
    localStorage.setItem("wishlist", JSON.stringify(wishlist))
}
export const store = createStore(
    reducers,
    applyMiddleware(thunk, persister)
)