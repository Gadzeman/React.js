import {
    INC_TWO,
    DEC_TWO,
    UPDATE_TWO
} from "../action-types/action-types"

const initialState = {
    counter: 0
}

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case INC_TWO: {
            return {...state, counter: state.counter + 1}
        }
        case DEC_TWO: {
            return {...state, counter: state.counter - 1}
        }
        case UPDATE_TWO: {
            return {...state, counter: state.counter + action.payload}
        }
        default:
            return state
    }
}

export default reducer