import React, {Component} from 'react';
import _ from "./App.css"

let Header = ({test}) => {
    let counter = 0
    return(
        <header>
            <h1>Test {test}</h1>
            <button className={"button"}>cart {counter}</button>
        </header>
    )
}

class App extends Component {
    render() {
        let test = this.props.test
        return (
            <div>
                {2 > Math.random() * 5 && <h1>Nice</h1>}
                {5 > Math.random() * 7 ? <h2>True</h2> : <h2>False</h2>}
                <Header test={test}/>
            </div>
        );
    }
}

export default App;
