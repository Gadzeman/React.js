import React, {Component} from 'react';
import {useState} from "react"

function App () {

    const [users, setUsers] = useState([
        {"id": 1, "name": "vasya", "age": 23},
        {"id": 2, "name": "petya", "age": 22},
        {"id": 3, "name": "anya", "age": 19},
        {"id": 4, "name": "katya", "age": 20}
    ])

    const [toHideUser, setToHideUser] = useState([])
    const filteredArr = users.filter(user => !toHideUser.includes(user.id))
    const toHide = () => {
        let newArr = [...filteredArr]
        let hidUser = newArr[0]
        if(!hidUser) return
        setToHideUser([...toHideUser, hidUser.id])
    }
    const toRevert = () => {
        setToHideUser([])
    }

    return(
        <div>
            <ul>
                <button onClick={toHide}> Remove user </button>
                <button onClick={toRevert}> Revert users</button>
                {filteredArr.map(user => <li key={user.id}>{user.name}</li>)}
            </ul>
        </div>
    )
}

export default App;
