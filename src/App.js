import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Redirect,
    useLocation, useHistory, useParams, useRouteMatch
} from "react-router-dom";

export default function App() {
    return (
        <Router>
            <div>
                <nav>
                    <ol>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/posts">Posts</Link>
                        </li>
                    </ol>
                </nav>

                <Switch>
                    <Route path="/" component={Home} exact />

                    <Route path="/posts" exact>
                        <Posts />
                    </Route>

                    <Route path="/posts/:id">
                        <PostDetails />
                    </Route>

                    <Route>
                        <h1>Page not found</h1>
                    </Route>
                </Switch>
            </div>
        </Router>
    );
}

function Home(props) {
    return <h2>Home</h2>;
}

function Posts() {

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
            <ul>
                {posts.map(post => <Link to={`posts/${post.id}`} key={post.id}><li>{post.id} - {post.title}</li></Link>)}
            </ul>
        </div>
    )
}

function PostDetails() {

    const {id} = useParams()
    const history = useHistory()

    const [post, setPost] = React.useState()

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
            {post && (<div><h1>{post.title}</h1> <h4>{post.body}</h4></div>)}
            <button onClick={() => history.push(`/posts/${+id - 1}`)}>Go to back</button>
            <button onClick={() => history.push(`/posts/${+id + 1}`)}>Go to next post</button>
        </div>
    )
}


