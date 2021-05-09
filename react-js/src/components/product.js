import React from "react"
import "../App.css"

export const Product = ({product, onCartClick, onWishlistClick, isInCart, isInWishlist}) => (
        <div className={"product"}>
                <h2 className={"product-name"}>{product.title}</h2>
                <div style={{height: 200, display: "flex", justifyContent: "center"}}>
                    <img className={"product-image"} src={product.image} alt={product.title} />
                </div>
                <p className={"product-description"}>{product.description}</p>
                <h1 className={"product-price"}>{product.price}$</h1>
                <div className={"product-buttons"}>
                    <button
                        style={{background: isInCart ? "green" : ""}}
                        onClick={onCartClick}
                    >{isInCart ? "Remove from cart" : "Add to cart"}
                    </button>
                    <button
                        style={{background: isInWishlist ? "orange" : ""}}
                        onClick={onWishlistClick}
                    >{isInWishlist ? "Remove from wishlist" : "Add to wishlist"}
                    </button>
                </div>
        </div>)

export default Product