import {
    SET_PRODUCTS,
    TRUE_LOADING,
    FALSE_LOADING,
} from "../action-types/action-types"

const setProducts = (payload) => ({type: SET_PRODUCTS, payload})
const trueLoading = () => ({type: TRUE_LOADING})
const falseLoading = () => ({type: FALSE_LOADING})
// thunk function:
const loadProducts = () => async (dispatch) => {
    try {
        dispatch(trueLoading())
        const resp = await fetch("https://fakestoreapi.com/products")
        const json = await resp.json()
        dispatch(setProducts(json))
    } catch (e) {
        console.log(e)
    } finally {
        dispatch(falseLoading())
    }
}

export {
    setProducts,
    trueLoading,
    falseLoading,
    loadProducts
}