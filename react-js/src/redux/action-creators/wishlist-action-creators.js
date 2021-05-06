import {
    ADD_TO_WISHLIST,
    REMOVE_FROM_WISHLIST
} from "../action-types/wishlist-action-types";

const addToWishlist = (id) => ({type: ADD_TO_WISHLIST, payload: id})
const removeFromWishlist = (id) => ({type: REMOVE_FROM_WISHLIST, payload: id})
const toggleProductInWishlist = (id) => (dispatch, getState) => {
    const {wishlist: {productsInWishlist}} = getState()
    const alreadyInWishlist = productsInWishlist.find(el => el === id)
    dispatch(alreadyInWishlist ? removeFromWishlist(id) : addToWishlist(id))
}

export {
    toggleProductInWishlist
}