import "../App.css"
import React from "react"
import {loadProducts} from "../redux/action-creators/action-creators";
import {useSelector, useDispatch} from "react-redux";
import {toggleItemInCart, toggleItemInWishlist} from "../redux/action-creators/action-creators";

export default function Products () {
    const dispatch = useDispatch()
    const {products, isLoading} = useSelector(store => store.products)
    const {productsInCart} = useSelector(store => store.cart)
    const {productsInWishlist} = useSelector(store => store.wishlist)
    // thunk function
    // *from action-creators
    React.useEffect(() => {
        dispatch(loadProducts())
    }, [])
    return (
        <div className={"product-wrapper"}>
            {isLoading && (
                <h1 style={{color: "red", alignText: "center"}}>LOADING...</h1>
            )}
            {products.map(el =>
                <div key={el.id} className={"product-item"}>
                    <h1>{el.title}</h1>
                    <img style={{width: "100%"}} src={el.image} alt={el.title}/>
                    <h3>{el.description}</h3>
                    <hr/>
                    <h1 style={{textAlign: "left", paddingLeft: "50px"}}>{el.price}$</h1>
                    <button
                        style={{background: productsInWishlist.includes(el.id) ? "red" : "", color: productsInWishlist.includes(el.id) ? "white" : ""}}
                        onClick={() => dispatch(toggleItemInWishlist(el.id))}>
                        {productsInWishlist.includes(el.id) ? "remove from wishlist" : "add to wishlist"}
                    </button>
                    <button
                        style={{background: productsInCart.includes(el.id) ? "red" : "", color: productsInCart.includes(el.id) ? "white" : ""}}
                        onClick={() => dispatch(toggleItemInCart(el.id))}>
                        {productsInCart.includes(el.id) ? "remove from cart" : "add to cart"}
                    </button>
                    <br/>
                </div>
            )}
        </div>
    )
}