import React from "react"
import {useDispatch, useSelector} from "react-redux";
import { useParams } from "react-router-dom";
import { Product } from "./product"
import "../App.css"
import {toggleProductInCart} from "../redux/action-creators/cart-action-creators";
import {toggleProductInWishlist} from "../redux/action-creators/wishlist-action-creators";

export const ProductDetails = () => {
    const {productsInCart} = useSelector(store => store.cart)
    const {productsInWishlist} = useSelector(store => store.wishlist)
    const [isLoading, setIsLoading] = React.useState(false)
    const [product, setProduct] = React.useState(null)
    const dispatch = useDispatch()
    const params = useParams()
    const fetchProduct = async () => {
        if(!params.id) return
        try {
            setIsLoading(true)
            const resp = await fetch(`https://fakestoreapi.com/products/${params.id}`)
            const json = await resp.json()
            setProduct(json)
        } catch (e) {
            console.log(e)
        } finally {
            setIsLoading(false)
        }
    }
    React.useEffect(() => {
        fetchProduct()
    }, [])
    return (
       <div>
           <div className={"product"}>
               {isLoading && (<h1>Loading...</h1>)}
               {!isLoading && !!product && <Product
                   onCartClick={() => dispatch(toggleProductInCart(product.id))}
                   onWishlistClick={() => dispatch(toggleProductInWishlist(product.id))}
                   isInCart={productsInCart.includes(product.id)}
                   isInWishlist={productsInWishlist.includes(product.id)}
                   product={product}/>}
           </div>
       </div>
    )
}

export default ProductDetails