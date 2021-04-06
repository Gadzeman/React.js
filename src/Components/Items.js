import React from "react"

export const Posts = ({posts}) => {
    return (
        <div>
            {posts.map(post => <h3 key={post.id}>{post.id} - {post.title}</h3>)}
        </div>
    )
}

export const Users = ({users}) => {
    return (
        <div>
            {users.map(user => <h1 key={user.id}>{user.id} - {user.name}</h1>)}
        </div>
    )
}