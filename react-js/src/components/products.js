import React from "react"
import "../App.css"
import {useDispatch, useSelector} from "react-redux";
import {loadProducts} from "../redux/action-creators/action-creators"
import {toggleProductInCart} from "../redux/action-creators/cart-action-creators";
import {toggleProductInWishlist} from "../redux/action-creators/wishlist-action-creators";

export default function Products () {
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
            {products.map(el =>
                <div className={"product"} key={el.id}>
                    <h2 className={"product-name"}>{el.title}</h2>
                    <img className={"product-image"} src={el.image} alt={el.title} />
                    <p className={"product-description"}>{el.description}</p>
                    <h1 className={"product-price"}>{el.price}$</h1>
                    <div className={"product-buttons"}>
                        <button
                            style={{background: productsInCart.includes(el.id) ? "green" : ""}}
                            onClick={() => dispatch(toggleProductInCart(el.id))}
                            >{productsInCart.includes(el.id) ? "Remove from cart" : "Add to cart"}
                        </button>
                        <button
                            style={{background: productsInWishlist.includes(el.id) ? "orange" : ""}}
                            onClick={() => dispatch(toggleProductInWishlist(el.id))}
                            >{productsInWishlist.includes(el.id) ? "Remove from wishlist" : "Add to wishlist"}
                        </button>
                    </div>
                </div>)}
        </div>
    )
}