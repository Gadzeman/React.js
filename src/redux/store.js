import {createStore} from "redux"
import {reducer} from "./reducers/combined-reducers"

export const store = createStore(reducer)