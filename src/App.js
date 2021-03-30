import React from "react"
import {useState} from "react"

function App(){

    const [users, setUsers] = useState([
        {"id": 1, "name": "anya"},
        {"id": 2, "name": "vasya"},
        {"id": 3, "name": "petya"},
        {"id": 4, "name": "katya"},
        {"id": 5, "name": "dima"},
        {"id": 6, "name": "bogdan"}
    ])
    const [hidUsers, setHidUsers] = useState([])
    const filteredUsers = users.filter(user => !hidUsers.includes(user.id))
    const toRemoveUser = () => {
        let newArr = [...filteredUsers]
        let removedUser = newArr[0]
        if (!removedUser) return
        setHidUsers([...hidUsers, removedUser.id])
    }
    const toRevert = () => {
        setHidUsers([])
    }

    return(
        <div>
            <ul>
                <button onClick={toRemoveUser}> Remove user </button>
                <button onClick={toRevert}> Revert users </button>
                {filteredUsers.map(user => <li key={user.id}>{user.name}</li>)}
            </ul>
        </div>
    )
}

export default App
