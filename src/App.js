import React, {Component, useState, useEffect} from 'react';

const App = () => {

    let url = "https://jsonplaceholder.typicode.com/users/"
    const [count, setCount] = useState(1)
    const nextUser = () => {
        setCount(count + 1)
    }
    const pervUser = () => {
        setCount(count - 1)
    }
    const [user, setUser] = useState(null)
    const fetchUsers = async () => {
        const response = await fetch(`${url}${count}`);
        const data = await response.json()
        setUser(data)
    }
    useEffect(() => {
        if (count >= 10){
            setCount(count === 1)
        }
        fetchUsers()
    }, [count])

    return(
        <>
            <button onClick={pervUser}> Perv user </button>
            <button onClick={nextUser}> Next user </button>


            {!!user && <div>
                {user.name}
            </div>}
        </>
    )
}



// ********************************HOW TO WORK WITH LIFECYCLE USING FUNC COMPONENTS********************************
// const Comp = () => {
//
//     let interval
//
//     useEffect(() => {
//         interval = setInterval(() => {
//             console.log("Interval was enabled and Child did mount")
//         }, 1000)
//
//         return () => console.log("Interval was stopped and Child did unmount", clearInterval(interval))
//     }, [])
//
//     return(
//         <div>
//             <h1>Child component</h1>
//         </div>
//     )
// }
//
// const App = () => {
//
//     const [counter, setCounter] = useState(0)
//
//     const handleCounter = () => {
//         setCounter(counter + 1)
//     }
//
//     useEffect(() => {
//         console.log("Parent did mount")
//     }, [])
//
//     useEffect(() => {
//         if (counter) {
//             console.log("Parent did update")
//         }
//     }, [counter])
//
//     return(
//         <div>
//             <h1 onClick={handleCounter}>HELLO React {counter}</h1>
//             {!!(counter % 2) && <Comp />}
//         </div>
//     )
// }



// ********************************HOW TO WORK WITH LIFECYCLE USING CLASS COMPONENTS********************************
// let interval;

// class Comp extends Component {
//
//     componentDidMount() {
//         interval = setInterval(() => {
//             console.log("checking out air ticket")
//         }, 2000)
//         console.log("child did mount")
//     }
//
//     componentDidUpdate(prevProps, prevState) {
//         console.log("child did update")
//     }
//
//     componentWillUnmount() {
//         console.log("child did Unmount")
//         clearInterval(interval)
//     }
//
//     render() {
//         console.log("child rerender")
//         return(
//             <div>
//                 <h1>child</h1>
//             </div>
//         )
//     }
// }
//
// class App extends Component {
//
//     state = {
//         counter: 0
//     }
//
//     incCounter = () => {
//         this.setState({counter: this.state.counter + 1})
//     }
//
//     componentDidMount() {
//         console.log("parent did mount")
//     }
//
//     componentDidUpdate(prevProps, prevState) {
//         console.log("parent did update")
//     }
//
//     render() {
//         console.log("parent rerender")
//         return (
//             <div>
//                 <h1 onClick={this.incCounter}>HELLO React {this.state.counter}</h1>
//                 {!!(this.state.counter % 2) && <Comp />}
//             </div>
//         );
//     }
// }

export default App;