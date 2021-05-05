import {createStore, applyMiddleware} from "redux";
import {reducers} from "./reducers/combined-reducers"
import thunk from "redux-thunk"

// const logger = (store) => (next) => (action) => {
//     next(action)
//     console.log("action => ", action)
//     console.log("action.type => ", action.type)
//     console.log("store => ", store)
//     console.log("store.getState() => ", store.getState())
//     console.log("=====================================")
// }
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