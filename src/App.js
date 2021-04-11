import React from "react"
import {BrowserRouter as Router, Link, Switch, Route} from "react-router-dom";
import {createContext, useContext} from "react"
import {useState} from "react"

const CreatedContext = createContext()
const TodosContext = ({children}) => {
    const [todos, setTodos] = useState([])
    const addTodo = (newTodo) => {
        if (!newTodo || !newTodo.title || !newTodo.description) return
        setTodos([newTodo, ...todos])
    }
    const onTodoRemove = (todoId) => {
        setTodos(todos.filter(todo => todo.id !== todoId))
    }
    const [counterTodos, setCounterTodos] = useState(0)
    return (
        <div>
            <CreatedContext.Provider value={{
                todos,
                addTodo,
                counterTodos,
                setCounterTodos,
                onTodoRemove
            }}>
                {children}
            </CreatedContext.Provider>
        </div>
    )
}

const AddTodo = () => {
    const {addTodo, counterTodos, setCounterTodos} = useContext(CreatedContext)
    const [todoValues, setTodoValues] = useState({
        title: "",
        description: "",
        id: null
    })
    const onChange = ({target: {name, value}}) => setTodoValues({...todoValues, [name]: value})
    const onCreate = () => {
        addTodo(todoValues)
        setTodoValues({
            title: "",
            description: "",
            id: Math.random()
        })
        setCounterTodos(counterTodos + 1)
    }
    return (
        <div style={{marginLeft: "66px"}}>
            <br/>
            <br/>
            <input onChange={onChange} name="title" value={todoValues.title} type="text" placeholder="Enter title"/>
            <br/>
            <br/>
            <input onChange={onChange} name="description" value={todoValues.description} type="text" placeholder="Enter description"/>
            <br/>
            <br/>
            <button onClick={onCreate}>Add Todo</button>
        </div>
    )
}

const TodosList = () => {
    const {todos, onTodoRemove, counterTodos, setCounterTodos} = useContext(CreatedContext)
    const onDone = (des) => {

    }
    const onDeleteTodo = (todo) => {
        const answer = window.confirm("Are you sure you want to delete this Todo?")
        if (answer) {
            onTodoRemove(todo)
        }
        setCounterTodos(counterTodos - 1)
    }
    return (
        <div>
            <ul>
                {todos.map(todo => (
                    <li key={todo.title + todo.description}>
                        <h2>{todo.title}</h2>
                        <p>{todo.description}</p>
                        <br/>
                        <button onClick={() => onDeleteTodo(todo.id)}>Delete</button>
                        <hr/>
                    </li>
                ))}
            </ul>
        </div>
    )
}

const CounterTodos = () => {
    const {counterTodos} = useContext(CreatedContext)
    return (
        <div>
            Todos List ({counterTodos})
        </div>
    )
}

export default function App () {
    return (
        <div>
            <TodosContext>
            <Router>
                <header>
                    <Link to="/"><CounterTodos /></Link>
                    <Link to="/add-todo">Add Todo</Link>
                </header>
                <main>
                    <Switch>
                        <Route path="/" exact>
                            <TodosList/>
                        </Route>
                        <Route path="/add-todo">
                            <AddTodo />
                        </Route>
                        <Route>
                            <h1>Page not found</h1>
                        </Route>
                    </Switch>
                </main>
            </Router>
            </TodosContext>
        </div>
    )
}




























// import React from "react"
// import {BrowserRouter as Router, Link, Switch, Route} from "react-router-dom";
// import {useState, useContext, createContext} from "react"
//
// const TodosContext = createContext()
// const TodosContextProvider = ({children}) => {
//
//     const [todos, setTodos] = useState([])
//
//     const checkingTodo = (newTodo) => {
//         if (!newTodo || !newTodo.title || !newTodo.description){
//             console.log("Fill in the inputs")
//             return
//         }
//         setTodos([newTodo, ...todos])
//     }
//
//     return (
//         <div>
//             <TodosContext.Provider value={{
//                 todos,
//                 checkingTodo
//             }}>
//                 {children}
//             </TodosContext.Provider>
//         </div>
//     )
// }
//
// const Header = () => {
//     return (
//         <header>
//                 <Link to={"/"}>Todos List</Link>
//                 <Link to={"add-todo"}>Add Todo</Link>
//         </header>
//     )
// }
//
// const TodosList = () => {
//
//     const {todos} = useContext(TodosContext)
//
//     return (
//         <div>
//             {todos.map(todo => (<div key={todo.title + todo.description}>
//                 <h4>{todo.title}</h4>
//                 <p>{todo.description}</p>
//             </div>))}
//         </div>
//     )
// }
//
// const AddTodo = () => {
//
//     const {checkingTodo} = useContext(TodosContext)
//
//     const [todoValues, setTodoValues] = React.useState({
//         title: "",
//         description: ""
//     })
//
//     const changeTodo = ({target: {name, value}}) => setTodoValues({...todoValues, [name]: value})
//
//     const createTodo = () => {
//         checkingTodo(todoValues)
//         setTodoValues({
//             title: "",
//             description: ""
//         })
//     }
//
//     return (
//         <div style={{marginLeft: "20px"}}>
//             <br/>
//             <br/>
//             <input onChange={changeTodo} value={todoValues.title} type="text" name="title" placeholder="Enter title"/>
//             <br/>
//             <br/>
//             <input onChange={changeTodo} value={todoValues.description} type="text" name="description" placeholder="Enter description"/>
//             <br/>
//             <br/>
//             <button onClick={createTodo}>Add new todo</button>
//         </div>
//     )
// }
//
//
// export default function App () {
//     return (
//         <TodosContextProvider>
//             <Router>
//                 <div>
//                     <Header />
//                 </div>
//                 <div>
//                     <Switch>
//                         <Route path={"/"} exact>
//                             <TodosList />
//                         </Route>
//                         <Route path={"/add-todo"}>
//                             <AddTodo />
//                         </Route>
//                         <Route>
//                             <h1>Page not found</h1>
//                         </Route>
//                     </Switch>
//                 </div>
//             </Router>
//         </TodosContextProvider>
//     )
// }