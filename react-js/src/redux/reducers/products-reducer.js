import {
    SET_PRODUCTS,
    START_LOADING,
    FINISH_LOADING
} from "../action-types/action-types"

const initialState = {
    products: [],
    loading: false
}
export const reducer = (state = initialState, action) => {
    switch(action.type){
        case SET_PRODUCTS:{
            return {...state, products: action.payload}
        }
        case START_LOADING:{
            return {...state, loading: true}
        }
        case FINISH_LOADING:{
            return {...state, loading: false}
        }
        default: {
            return state
        }
    }
}

export default reducer