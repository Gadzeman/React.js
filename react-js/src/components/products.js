import React from "react"
import "../App.css"
import {Product} from "./"
import {useDispatch, useSelector} from "react-redux";
import {loadProducts} from "../redux/action-creators/action-creators"
import {toggleProductInCart} from "../redux/action-creators/cart-action-creators";
import {toggleProductInWishlist} from "../redux/action-creators/wishlist-action-creators";

export const Products = () => {
    const dispatch = useDispatch()
    const {products, loading} = useSelector(store => store.products)
    const {productsInCart} = useSelector(store => store.cart)
    const {productsInWishlist} = useSelector(store => store.wishlist)
    React.useEffect(() => {
        dispatch(loadProducts())
    }, [])
    return (
        <div className={"products"}>
            {loading && <h1 className={"loading"}>Loading...</h1>}
            {!loading && !!products.length && products.map(el => (
                <Product
                    product={el}
                    onCartClick={() => dispatch(toggleProductInCart(el.id))}
                    onWishlistClick={() => dispatch(toggleProductInWishlist(el.id))}
                    isInCart={productsInCart.includes(el.id)}
                    isInWishlist={productsInWishlist.includes(el.id)}
                    key={el.id}
                />
            ))}
        </div>
    )
}