import React from "react"
import "../App.css"
import {useSelector} from "react-redux"

export default function Header () {
    const {products} = useSelector(store => store.products)
    const {productsInCart} = useSelector(store => store.cart)
    const {productsInWishlist} = useSelector(store => store.wishlist)
    const calculatedCartSum = React.useMemo(() => {
        return products
            .filter(el => productsInCart.includes(el.id))
            .reduce((acc, el) => acc += el.price, 0)
    }, [products, productsInCart])
    const calculatedWishlistSum = React.useMemo(() => {
        return products
            .filter(el => productsInWishlist.includes(el.id))
            .reduce((acc, el) => acc += el.price, 0)
    }, [products, productsInWishlist])
    return (
        <div className={"header"}>
            <h1 className={"header-logo"}>Header</h1>
            <div className={"header-menu"}>
                <h4>Cart {productsInCart.length} (${calculatedCartSum})</h4>
                <h4>Wishlist {productsInWishlist.length} (${calculatedWishlistSum})</h4>
            </div>
        </div>
    )
}