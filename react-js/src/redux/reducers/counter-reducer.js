import {
    INC_COUNTER,
    DEC_COUNTER,
} from "../action-types/action-types"

const fromLocalStorage = localStorage.getItem("counter")
const initialState = fromLocalStorage ? JSON.parse(fromLocalStorage) : {
    counter: 0
}
export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case INC_COUNTER: {
            return {...state, counter: state.counter + 1}
        }
        case DEC_COUNTER: {
            return {...state, counter: state.counter - 1}
        }
        default: {
            return state
        }
    }
}

export default reducer