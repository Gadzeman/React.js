import {
    SET_PRODUCTS,
    TRUE_LOADING,
    FALSE_LOADING
} from "../action-types/action-types"

const initialState = {
    products: [],
    isLoading: false
}
export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_PRODUCTS: {
            return {...state, products: action.payload}
        }
        case TRUE_LOADING: {
            return {...state, isLoading: true}
        }
        case FALSE_LOADING: {
            return {...state, isLoading: false}
        }
        default: {
            return state
        }
    }
}

export default reducer