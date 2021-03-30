import React from "react";
import {useState} from "react";

export function App() {

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
    const toHideUser = () => {
        let removedUser = filteredUsers[0]
        if (!removedUser) return
        setHidUsers([...hidUsers, removedUser.id])
    }
    const toRevertUsers = () => {
        setHidUsers([])
    }

    return(
        <div>
            <button onClick={toHideUser}> Remove user </button>
            <button onClick={toRevertUsers}> Revert users </button>
            {filteredUsers.map(user => <h4 key={user.id}>{user.id} {user.name}</h4>)}
        </div>
    )
}

export default App