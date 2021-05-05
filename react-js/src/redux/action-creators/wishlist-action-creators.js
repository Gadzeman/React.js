import {
    ADD_PRODUCT_TO_WISHLIST,
    REMOVE_PRODUCT_FROM_WISHLIST
} from "../action-types/action-types"

const addProductToCart = (id) => ({type: ADD_PRODUCT_TO_WISHLIST, payload: id})
const removeProductFromCart = (id) => ({type: REMOVE_PRODUCT_FROM_WISHLIST, payload: id})
const toggleItemInWishlist = (id) => (dispatch, getState) => {
    const {wishlist: {productsInWishlist}} = getState()
    const alreadyExists = productsInWishlist.find(el => el === id)
    dispatch(alreadyExists ? removeProductFromCart(id) : addProductToCart(id))
}

export {
    toggleItemInWishlist,
}