import React, {Component} from 'react';
import _ from "./CardProduct.css";

class CardProduct extends Component {

    render() {
        let {title, represent, price} = this.props
        return (
            <div className={"card"}>
                <h1>{title}</h1>
                <p>{represent}</p>
                <h2>{price}</h2>
            </div>
        );
    }
}

export default CardProduct;