import React from "react"
import _ from "./App.css"
import {Posts} from "./Components/Items"
import {Users} from "./Components/Items"

const BASE_URL = "https://jsonplaceholder.typicode.com"

export function App () {

    const [endpoint, setEndPoint] = React.useState("")
    const [id, setId] = React.useState("")

    const [items, setItems] = React.useState([])
    const [singleItem, setSingleItem] = React.useState(null)

    const fetchData = async () => {
        const response = await fetch(`${BASE_URL}/${endpoint}/${id}`)
        const json = await response.json()

        if(id){
            setSingleItem(json)
            setItems([])
            return
        }else{
            setSingleItem(null)
            setItems(json)
        }
    }

    return (
        <div className={"app"}>
            <div>
                <br/>
                <br/>
                <input value={endpoint} onChange={({target: {value}}) => setEndPoint(value)} type="text" placeholder="enter endpoint"/>
                <br/>
                <br/>
                <input value={id} onChange={({target: {value}}) => setId(value)} type="number" placeholder="enter id"/>
                <br/>
                <br/>
                <button onClick={fetchData}>Get Data</button>
            </div>
            <div>
                {singleItem && (<hr/>)}
                <pre style={{width: 200, textAlign: "left", padding: 20}}>
                    {singleItem && JSON.stringify(singleItem, null, 2)}
                </pre>
            </div>
            <hr/>
            <div>
                {items && <Posts posts={items} />}
                {items && <Users users={items} />}
            </div>
        </div>
    )
}

export default App