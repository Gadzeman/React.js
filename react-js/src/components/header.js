import React from "react"
import "../App.css"
import {useSelector} from "react-redux";

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
        <header>
            <h1>HEADER</h1>
            <div className={"counters"}>
                <span>
                    Wishlist: {productsInWishlist.length} ($ {calculatedWishlistSum})
                </span>
                <span>
                    Cart: {productsInCart.length} ($ {calculatedCartSum})
                </span>
            </div>
        </header>
    )
}