import React from "react"
import "../App.css"

export default function Header () {
    console.log(2)
    return (
        <div className={"header"}>
            <h1 className={"header-logo"}>Header</h1>
            <div className={"header-menu"}>
                <h4>Cart</h4>
                <h4>Wishlist</h4>
            </div>
        </div>
    )
}