import React, {Component} from 'react';
import {useState} from 'react';
import Product from "./Components/ProductCard"
import _ from "./App.css"

function App () {

    const [arr, setArr] = useState([
        {"id": 1, "title": "tomato", "represent": "It add in salat and pasta", "price": 1.99},
        {"id": 2, "title": "apple", "represent": "It gives more energy", "price": 2.99},
        {"id": 3, "title": "orange", "represent": "Citrus. There's people who don't like it", "price": 0.99},
        {"id": 4, "title": "bananas", "represent": "It's yellow usually", "price": 4.99}
    ])

    // let products = [
    //     {"id": 1, "title": "tomato", "represent": "It add in salat and pasta", "price": 1.99},
    //     {"id": 2, "title": "apple", "represent": "It gives more energy", "price": 2.99},
    //     {"id": 3, "title": "orange", "represent": "Citrus. There's people who don't like it", "price": 0.99},
    //     {"id": 4, "title": "bananas", "represent": "It's yellow usually", "price": 4.99}
    // ]

    // const removeItem = (itemToRemove) => {
    //     if(itemToRemove !== "first" && itemToRemove !== "last") return
    //
    //     let newArr = [...arr]
    //     itemToRemove === "first" && newArr.shift()
    //     itemToRemove === "last" && newArr.pop()
    //     setArr(newArr)
    // }
    // or check the second variant
    // const removeItem = (itemToRemove) => {
    //     let newArr = [...arr]
    //     itemToRemove === "first" ? newArr.shift() : newArr.pop()
    //     setArr(newArr)
    // }

    // Завдання 2
    const [itemsToHide, setItemsToHide] = useState([])
    const filteredArr = arr.filter(value => !itemsToHide.includes(value.id))
    const handleArrChange = () => {
        const newArr = [...filteredArr]
        const itemToRemove = newArr[0]
        if(!itemToRemove) return
        setItemsToHide([...itemsToHide, itemToRemove.id])
    }
    const onRevert = () => {
        setItemsToHide([])
    }


    return(
        <div>

            {/* Моя спроба */}
            <div className={"wrapProductApp"}>
                {/*{products.map(product => <Product title={product.title} represent={product.represent} price={product.price}/>)}*/}
            </div>
            <br/>

            {/* По відео */}
            <div>
                {/*<button onClick={*/}
                {/*    () => removeItem("first")*/}
                {/*}> Remove first </button>*/}
                {/*<button onClick={*/}
                {/*    () => removeItem("last")*/}
                {/*}> Remove last </button>*/}
                {/*<ul>*/}
                {/*    {arr.map(value => (<li key={value.id}>{value.title}</li>))}*/}
                {/*</ul>*/}
                {/*<hr/>*/}
            </div>

            {/*Завдання 2*/}
            <div>
                <button onClick={handleArrChange}> Hide Element </button>
                <button onClick={onRevert}> Revert Elements </button>
                <ul>
                    {filteredArr.map(value => <li key={value.id}>{value.id} {value.title}</li>)}
                </ul>
            </div>
        </div>
    )
}

export default App;
