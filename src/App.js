import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import {PostDetails, Posts, Users, UserDetails} from "./Components/Endpoints"
import _ from "./App.css"

export default function App() {
    return (
        <Router>
            <div className={"wrap"}>
                <nav className={"nav"}>
                    <div className={"logo"}>
                        <h1>JSON Placeholder</h1>
                    </div>
                    <div className={"endpoints"}>
                        <h2><Link to={"/posts"}>Posts</Link></h2>
                        <h2><Link to={"users"}>Users</Link></h2>
                    </div>
                </nav>
                <div className={"content"}>
                    <Switch>
                        <Route path={"/posts"} exact>
                            <Posts />
                        </Route>
                        <Route path={"/users"} exact>
                            <Users />
                        </Route>
                        <Route path={"/posts/:id"}>
                            <PostDetails />
                        </Route>
                        <Route path={"/users/:id"}>
                            <UserDetails />
                        </Route>
                    </Switch>
                </div>
            </div>
        </Router>
    );
}

