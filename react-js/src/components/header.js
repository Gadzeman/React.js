import React from "react"
import "../App.css"
import {useSelector} from "react-redux"
import {useHistory} from "react-router"

export const Header = () => {
    const history = useHistory()
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
            <h1 className={"header-logo"} onClick={() => history.push("/products")}>Header</h1>
            <div className={"header-menu"}>
                <h4>Cart {productsInCart.length} (${calculatedCartSum})</h4>
                <h4>Wishlist {productsInWishlist.length} (${calculatedWishlistSum})</h4>
            </div>
        </div>
    )
}