import React from "react";

function App () {

    const [firstName, setFirstName] = React.useState("")

    const handleSubmit = () => {
        alert(JSON.stringify({firstName}, null, 2))
    }

    return (
        <div style={{
            textAlign: "center"
        }}>
            <h1>Inputs</h1>
            <input value={firstName} onChange={({target: {value}}) => setFirstName(value)} type="text" name="firstName" placeholder="enter your first name"/>
            <br/>
            <br/>
            <input type="text" name="lastName"  placeholder="enter your last name"/>
            <br/>
            <br/>
            <input type="email" name="email"  placeholder="enter your email"/>
            <br/>
            <br/>
            <input type="number" name="age"  placeholder="enter your age"/>
            <br/>
            <br/>
            <input type="password" name="pass"  placeholder="enter your password"/>
            <br/>
            <br/>
            <button onClick={handleSubmit}>Submit</button>
        </div>
    )
}



// ****************************Controlled Inputs***************************
// function App () {
//
//     const firstName = React.useRef()
//
//     const onSubmit = (event) => {
//         event.preventDefault() // prevent - запобігати (в даному випадку запогіаємо перезагрузки сторінки)
//         console.log(firstName.current.value)
//         firstName.current.value = ""
//     }
//
//     return (
//         <div style={{
//             textAlign: "center"
//         }}>
//             <h1>Lecture: Inputs and type of inputs</h1>
//             <form onSubmit={onSubmit}>
//                 <input ref={firstName} type="text" name="firstName" placeholder="enter your first name"/>
//                 <br/>
//                 <br/>
//                 <input type="text" name="lastName"  placeholder="enter your last name"/>
//                 <br/>
//                 <br/>
//                 <input type="email" name="email"  placeholder="enter your email"/>
//                 <br/>
//                 <br/>
//                 <input type="number" name="age"  placeholder="enter your age"/>
//                 <br/>
//                 <br/>
//                 <input type="password" name="pass"  placeholder="enter your password"/>
//                 <br/>
//                 <br/>
//                 <button type="submit">Submit</button>
//             </form>
//         </div>
//     )
// }

export default App