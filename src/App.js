import React, {Component} from 'react';
import {useState} from 'react';

function App () {

    const [count, setCount] = useState(0)
    const [isHeaderVisible, setIsHeaderVisible] = useState(true)
    const countHandle = () => {
        setCount(count + 1)
    }
    const hideHeader = () => {
        setIsHeaderVisible(!isHeaderVisible)
    }

    const [array, setArray] = useState(["hello", "react"])
    const changeArrayValue = () => {
        let newArray = [...array]
        newArray[0] = Math.random()
        setArray(newArray)
    }

    const [list, setList] = useState([
        {"id": 1, "title": "hello", "text": "react"},
        {"id": 2, "title": "what`s up", "text": "react"},
        {"id": 3, "title": "how`s is going", "text": "react"},
        {"id": 4, "title": "bye", "text": "react"}
    ])

    const Map = () => {
        return(
            <div>
                {list.map((value, index) => (
                    <div>
                        <h4>{value.title}</h4>
                        <h6>{value.text}</h6>
                    </div>
                ))}
            </div>
        )
    }

    return(
        <div>
            <div>
                {isHeaderVisible && <h1>{count}</h1>}
                <button onClick={
                    countHandle
                }> Click on me </button>
                <button onClick={
                    hideHeader
                }> Hide me </button>
                <hr/>
            </div>

            <div>
                <button onClick={
                    changeArrayValue
                }> Change value </button> <br/>
                {array[0]} <br/>
                {array[1]}
                <hr/>
            </div>

            <div>
                <Map />
            </div>

        </div>
    )
}

export default App;
