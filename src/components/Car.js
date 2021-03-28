import React from "react";
import _ from "./Car.css"

export let Car = (props) => {
    return(
        <div className={"car"}>
            <h1>{props.model}</h1>
            <p>
                Year: {props.year} <br/>
                Engine: {props.engine} <br/>
                Km/h: {props.km}
            </p>
        </div>
    )
}

export default Car;