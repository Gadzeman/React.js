import {
    ADD_TO_CART,
    REMOVE_FROM_CART
} from "../action-types/cart-action-types";

const addToCart = (id) => ({type: ADD_TO_CART, payload: id})
const removeFromCart = (id) => ({type: REMOVE_FROM_CART, payload: id})
const toggleProductInCart = (id) => (dispatch, getState) => {
    const {cart: {productsInCart}} = getState()
    const alreadyInCart = productsInCart.find(el => el === id)
    dispatch(alreadyInCart ? removeFromCart(id) : addToCart(id))
}

export {
    toggleProductInCart
}