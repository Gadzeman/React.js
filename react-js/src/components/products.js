import React from "react"
import "../App.css"
import {useDispatch, useSelector} from "react-redux";
import {loadProducts} from "../redux/action-creators/action-creators"

export default function Products () {
    const dispatch = useDispatch()
    const {products, loading} = useSelector(store => store.products)
    console.log(1)
    React.useEffect(() => {
        dispatch(loadProducts())
    }, [])
    return (
        <div>

        </div>
    )
}