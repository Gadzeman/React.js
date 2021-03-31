import React, {Component} from "react";
import {useState} from "react"

export function App () {

    const [users, setUsers] = useState([
        {"id": 1, "name": "katya", "status": false},
        {"id": 2, "name": "petya", "status": true},
        {"id": 3, "name": "anya", "status": true},
        {"id": 4, "name": "kostya", "status": false},
        {"id": 5, "name": "alex", "status": true}
    ])

    const [arrUsers, setArrUsers] = useState([])
    const filteredUsers = users.filter(user => !arrUsers.includes(user))
    const handleUser = (user) => {
        if (!user) return
        setArrUsers([...arrUsers, user])
    }
    const toRevert = () => {
        setArrUsers([])
    }

    return(
        <div>
            <button onClick={toRevert}> Revert users </button>
            {filteredUsers.map(user => <h1 key={user.id}>{user.id} {user.name} <button onClick={() => handleUser(user)}> Remove user </button></h1>)}
        </div>
    )
}

export default App
