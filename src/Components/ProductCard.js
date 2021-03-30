import React from "react";
import _ from "./ProductCard.css"
import {useState} from "react"

export function Product (props){

    let {title, represent, price} = props

    const [del, setDel] = useState(true)
    const delProduct = () => {
        setDel(!del)
    }

    return(
        <div>
            <div>
                <button onClick={
                    delProduct
                }> Delete </button>
            </div>
            <hr/>
            {del &&
            <div className={"wrapProduct"}>
                <div>
                    <h3>Product Name: {title}</h3>
                    <h4>Represent: {represent}</h4>
                    <h3>Price: ${price}</h3>
                </div>
            </div>}
        </div>
    )
}

export default Product;