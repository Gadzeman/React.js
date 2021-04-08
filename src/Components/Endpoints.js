import React from "react"
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useParams,
    useHistory
} from "react-router-dom";

// --------------------------POSTS-------------------------
export function Posts () {

    const [posts, setPosts] = React.useState([])

    const fetchData = async () => {
        const response = await fetch("https://jsonplaceholder.typicode.com/posts")
        const json = await response.json()
        setPosts(json)
    }

    React.useEffect(() => {
        fetchData()
    }, [])

    return (
        <div>
            {posts.map(post => <Link to={`posts/${post.id}`}><h3 key={post.id}>{post.id} - {post.title}</h3></Link>)}
        </div>
    )
}

// --------------------------USERS-------------------------
export function Users () {

    const [users, setUsers] = React.useState([])

    const fetchData = async () => {
        const response = await fetch("https://jsonplaceholder.typicode.com/users")
        const json = await response.json()
        setUsers(json)
    }

    React.useEffect(() => {
        fetchData()
    }, [])

    return (
        <div>
            {users.map(user => <Link to={`/users/${user.id}`}><h3 key={user.id}>{user.id} - {user.name}</h3></Link>)}
        </div>
    )
}

// --------------------------POST_DETAILS-------------------------
export function PostDetails () {

    const [post, setPost] = React.useState([])
    const {id} = useParams()
    const history = useHistory()

    const fetchData = async () => {
        const response = await fetch("https://jsonplaceholder.typicode.com/posts/" + id)
        const json = await response.json()
        setPost(json)
    }

    React.useEffect(() => {
        fetchData()
    }, [id])

    return (
        <div>
            <button onClick={() => history.push("/posts")}>Back to Posts</button>
            <h1>{post.id} - {post.title}</h1>
            <h4>{post.body}</h4>
            <button onClick={() => history.push(`/posts/${+id - 1}`)}>Back</button>
            <button style={{marginLeft: 796}} onClick={() => history.push(`/posts/${+id + 1}`)}>Next</button>
        </div>
    )
}

// --------------------------USER_DETAILS-------------------------
export function UserDetails () {

    const [user, setUser] = React.useState([])
    const {id} = useParams()
    const history = useHistory()

    const fetchData = async () => {
        const response = await fetch("https://jsonplaceholder.typicode.com/users/" + id)
        const json = await response.json()
        setUser(json)
    }

    React.useEffect(() => {
        fetchData()
    }, [id])

    return (
        <div>
            <button onClick={() => history.push("/users")}>Back to Users</button>
            <h1>{user.username}</h1>
            <h4>{user.id} - {user.name}</h4>
            <button onClick={() => history.push(`/users/${+id - 1}`)}>Back</button>
            <button style={{marginLeft: 100}} onClick={() => history.push(`/users/${+id + 1}`)}>Next</button>
        </div>
    )
}