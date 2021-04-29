import {createStore, applyMiddleware} from "redux";
import {reducers} from "./reducers/combined-reducers"
import thunk from "redux-thunk"

const logger = (store) => (next) => (action) => {
    next(action)
    console.log("action => ", action)
    console.log("action.type => ", action.type)
    console.log("store => ", store)
    console.log("store.getState() => ", store.getState())
    console.log("=====================================")
}
const toLocalStorage = (store) => (next) => (action) => {
    next(action)
    const {counter} = store.getState()
    localStorage.setItem("counter", JSON.stringify(counter))
}
export const store = createStore(
    reducers,
    applyMiddleware(thunk, logger, toLocalStorage)
)