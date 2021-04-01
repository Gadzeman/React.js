import React, {Component, useState, useEffect} from 'react';

const Tabs = ({tabs, selectedTab}) => {
    return (
        <div style={{
            display: "flex"
        }}>
            {tabs.map(tab =>
                <button
                    key={tab.title}
                    style={{
                        background: selectedTab === tab.title ? "green" : "silver",
                        flex: 1,
                        height: "45px",
                        fontSize: "20px"
                    }}
                    onClick={tab.tabHandle}
                >
                    {tab.title}
                </button>
            )}
        </div>
    )
}

function App () {

    const PostsList = ({posts}) => {
        return (
            <div>
                {posts.map(post => (
                    <div key={post.id}>
                        <h3>{post.title}</h3>
                        <p>{post.body}</p>
                    </div>
                ))}
            </div>
        )
    }
    const CommentsList = ({comments}) => {
        return (
            <div>
                {comments.map(comment => (
                    <div key={comment.id}>
                        <h3>{comment.name}</h3>
                        <p>{comment.email}</p>
                    </div>
                ))}
            </div>
        )
    }
    const AlbumsList = ({albums}) => {
        return (
            <div>
                {albums.map(album => (
                    <div key={album.id}>
                        <h3>{album.userId} - {album.id}</h3>
                        <p>{album.title}</p>
                    </div>
                ))}
            </div>
        )
    }
    const PhotosList = ({photos}) => {
        return (
            <div>
                {photos.map(photo => (
                    <div key={photo.id}>
                        <h3>{photo.id}</h3>
                        <p>{photo.title}</p>
                    </div>
                ))}
            </div>
        )
    }
    const TodosList = ({todos}) => {
        return (
            <div>
                {todos.map(todo => (
                    <div key={todo.id}>
                        <h3>{todo.id} (User: {todo.userId})</h3>
                        <p>{todo.title}</p>
                        <h4>Status: {todo.completed.toString()}</h4>
                    </div>
                ))}
            </div>
        )
    }
    const UsersList = ({users}) => {
        return (
            <div>
                {users.map(user => (
                    <div key={user.id}>
                        <h3>User: {user.name} --> {user.username}</h3>
                        <p>{user.email}</p>
                    </div>
                ))}
            </div>
        )
    }

    const [list, setList] = useState([])

    const tabs = [
        {title: 'posts', tabHandle: () => {setSelectedTab(tabs[0].title, setList([]))}},
        {title: 'comments', tabHandle: () => {setSelectedTab(tabs[1].title, setList([]))}},
        {title: 'albums', tabHandle: () => {setSelectedTab(tabs[2].title, setList([]))}},
        {title: 'photos', tabHandle: () => {setSelectedTab(tabs[3].title, setList([]))}},
        {title: 'todos', tabHandle: () => {setSelectedTab(tabs[4].title, setList([]))}},
        {title: 'users', tabHandle: () => {setSelectedTab(tabs[5].title, setList([]))}}
    ]

    const [selectedTab, setSelectedTab] = useState(tabs[0].title)

    const urlBuilder = (resource) => `https://jsonplaceholder.typicode.com/${resource}`

    const fetchData = async () => {
        const url = urlBuilder(selectedTab)
        const response = await fetch(url)
        const data = await response.json()
        setList(data)
    }

    useEffect(() => {
        fetchData()
    }, [selectedTab])

    return (
        <div>
            <Tabs tabs={tabs} selectedTab={selectedTab}/>

            {selectedTab === tabs[0].title && <PostsList posts={list} />}
            {selectedTab === tabs[1].title && <CommentsList comments={list}/>}
            {selectedTab === tabs[2].title && <AlbumsList albums={list}/>}
            {selectedTab === tabs[3].title && <PhotosList photos={list}/>}
            {selectedTab === tabs[4].title && <TodosList todos={list}/>}
            {selectedTab === tabs[5].title && <UsersList users={list}/>}

        </div>
    )
}

export default App;