import "../App.css"
import React from "react"
import {loadProducts} from "../redux/action-creators/action-creators";
import {useSelector, useDispatch} from "react-redux";

export default function Products () {
    const dispatch = useDispatch()
    const {products, isLoading} = useSelector(store => store.products)
    // thunk function
    // *from action-creators
    React.useEffect(() => {
        dispatch(loadProducts())
    }, [])
    return (
        <div>
            {isLoading && (
                <h1 style={{color: "red"}}>LOADING...</h1>
            )}
            {products.map(el =>
                <div key={el.id} style={{
                    width: "1080px",
                    margin: "auto",
                    border: "solid 6px black",
                    marginTop: "20px"
                }}>
                    <h1>{el.title}</h1>
                    <img src={el.image} alt={el.title}/>
                    <h3>{el.description}</h3>
                    <hr/>
                    <h1 style={{textAlign: "left", paddingLeft: "50px"}}>{el.price}$</h1>
                    <br/>
                </div>
            )}
        </div>
    )
}