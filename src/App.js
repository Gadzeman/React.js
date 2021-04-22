import React from "react"
import {useSelector, useDispatch} from "react-redux";
import {
    incOne,
    decOne,
    updateOne,
    incTwo,
    decTwo,
    updateTwo,
    onUsersLoaded,
    onAddToBad,
    onRemoveFromBad
} from "./redux/action-creators/action-creators"

const PhotosList = () => {
    const dispatch = useDispatch()
    const fetchPhotos = async () => {
        const resp = await fetch("https://dummyapi.io/data/api/user?limit=10", {
            headers: {
                "app-id": "lTE5abbDxdjGplutvTuc"
            }
        })
        const json = await resp.json()
        dispatch(onUsersLoaded(json.data))
    }
    React.useEffect(() => {
        if(!users.length){
            fetchPhotos()
        }
    }, [])
    const users = useSelector(({userReducer: {users}}) => {
        return users
    })
    // console.log(users)
    const badEmployees = useSelector(({userReducer: {badEmployees}}) => {
        return badEmployees
    })
    // console.log(badEmployees)
    return (
        <div>
            <h1>PhotosList</h1>
            {users.map(user => (
                <img
                    style={{
                        filter: badEmployees.includes(user.id) ? "blur(3px)" : ""
                    }}
                    onClick={() => {
                        const alreadyInList = badEmployees.includes(user.id)
                        const answer = !alreadyInList && window.confirm("Are you sure?")
                        if(answer) {
                            dispatch(onAddToBad(user.id))
                        }else{
                            dispatch(onRemoveFromBad(user.id))
                        }
                    }}
                    key={user.id} src={user.picture}
                    alt={user.firstName}/>
            ))}
        </div>
    )
}

export default function App () {
    const counter1 = useSelector(({counter1: {counter}}) => {
        return counter
    })
    const counter2 = useSelector(({counter2: {counter}}) => {
        return counter
    })
    const dispatch = useDispatch()
    return (
        <div>
            {!!(counter1 % 2) && <PhotosList/>}
            <h1>{counter1}</h1>
            <button onClick={() => dispatch(updateOne(116))}>UPDATE</button>
            <button onClick={() => dispatch(incOne())}>INC</button>
            <button onClick={() => dispatch(decOne())}>DEC</button>
            <h1>{counter2}</h1>
            <button onClick={() => dispatch(updateTwo(1123))}>UPDATE</button>
            <button onClick={() => dispatch(incTwo())}>INC</button>
            <button onClick={() => dispatch(decTwo())}>DEC</button>
        </div>
    )
}

