import {
    SET_PRODUCTS,
    START_LOADING,
    FINISH_LOADING,
} from "../action-types/action-types"

const setProducts = (payload) => ({type: SET_PRODUCTS, payload})
const startLoading = () => ({type: START_LOADING})
const finishLoading = () => ({type: FINISH_LOADING})
const loadProducts = () => async (dispatch) => {
    try {
        dispatch(startLoading())
        const resp = await fetch("https://fakestoreapi.com/products")
        const json = await resp.json()
        dispatch(setProducts(json))
    } catch (e) {
        console.log(e)
    } finally {
        dispatch(finishLoading())
    }
}

export {
    loadProducts
}