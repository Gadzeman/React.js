import {
    INC_ONE,
    DEC_ONE,
    UPDATE_ONE
} from "../action-types/action-types"

const initialState = {
    counter: 0
}

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case INC_ONE: {
            return {...state, counter: state.counter + 1}
        }
        case DEC_ONE: {
            return {...state, counter: state.counter - 1}
        }
        case UPDATE_ONE: {
            return {...state, counter: state.counter + action.payload}
        }
        default:
            return state
    }
}

export default reducer