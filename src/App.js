import React from "react"
import {createContext, useContext} from "react"
import {BrowserRouter as Router, Link, Switch, Route} from "react-router-dom"

const TodoContext = createContext()

const TodoContextProvider = ({children}) => {

    const [todos, setTodos] = React.useState([])

    const onTodoCreate = (newTodo) => {
        if(!newTodo || !newTodo.title || !newTodo.description) {
            console.error("wrong arg for new todo, should ne something like {title: '...', description: '...'}")
            return
        }
        setTodos([newTodo, ...todos])
    }

    return (
        <div>
            <TodoContext.Provider value={{
                todos,
                onTodoCreate
            }}>
                {children}
            </TodoContext.Provider>
        </div>
    )
}

const TodosList = () => {
    const {todos} = useContext(TodoContext)
    return (
        <ul>
            {todos.map(todo => (
                <li key={todo.title + todo.description}>
                    <h4>{todo.title}</h4>
                    <p>{todo.description}</p>
                </li>
            ))}
        </ul>
    )
}
const AddTodo = () => {

    const {onTodoCreate} = useContext(TodoContext)

    const [todoValues, setTodoValues] = React.useState({
        title: "",
        description: ""
    })

    const onTodoChange = ({target: {name, value}}) => setTodoValues({...todoValues, [name]: value})

    const onCreate = () => {
        onTodoCreate(todoValues)
        setTodoValues({
            title: "",
            description: ""
        })
    }

    return (
        <div style={{marginLeft: 20, marginTop: 20}}>
            <input onChange={onTodoChange} value={todoValues.title} type="text" name="title" placeholder="Enter title"/>
            <br/>
            <br/>
            <input onChange={onTodoChange}  value={todoValues.description} type="text" name="description" placeholder="Enter description"/>
            <br/>
            <br/>
            <button onClick={onCreate}>Add todo</button>
        </div>
    )
}
const Header = () => {
    return (
        <header>
            <TodoContextProvider>
                <Link to={"/"}>List</Link>
                <Link to={"/create-todo"}>Add new todo</Link>
            </TodoContextProvider>
        </header>
    )
}

export default function App () {
    return (
       <TodoContextProvider>
           <main>
               <Router>
                   <Header />
                   <Switch>
                       <Route path={"/"} exact>
                           <TodosList />
                       </Route>
                       <Route path={"/create-todo"}>
                           <AddTodo />
                       </Route>
                   </Switch>
               </Router>
           </main>
       </TodoContextProvider>
    )
}














// ПРОСТИЙ ВАРІАНТ З COUNTER
// import React from "react"
//
// const CounterContext = React.createContext()
//
// const ContextProvider = ({children}) => {
//
//     const [counter, setCounter] = React.useState(0)
//
//     const incCounter = () => {
//         setCounter(counter + 1)
//     }
//
//     const decCounter = () => {
//         setCounter(counter - 1)
//     }
//
//     return(
//         <CounterContext.Provider value={{
//             counter,
//             incCounter,
//             decCounter
//         }}>
//             {children}
//         </CounterContext.Provider>
//     )
// }
//
// const Header = () => {
//     const {counter} = React.useContext(CounterContext)
//     return (
//         <div>
//             <h1>Header counter: {counter}</h1>
//         </div>
//     )
// }
//
// const Counter = () => {
//     const {counter, incCounter, decCounter} = React.useContext(CounterContext)
//     return (
//         <div>
//             <h3>Counter: {counter}</h3>
//             <button onClick={decCounter}>dec</button>
//             <button onClick={incCounter}>inc</button>
//         </div>
//     )
// }
//
// export function App () {
//     return (
//         <div>
//             <ContextProvider>
//                 <Header />
//                 <Counter />
//             </ContextProvider>
//         </div>
//     )
// }
//
// export default App

