import React, {Component} from 'react';
import CardProduct from "./components/CardProduct";
import _ from "./components/news.css"
import {Car} from "./components/Car";

const News = (props) => {
    return(
        <div className={"news"}>
            <h1>{props.title}</h1>
            <p>{props.events}</p>
            <h3>{props.conslution}</h3>
        </div>
    )
}

class App extends Component {
    render() {
        return (
            <div>
                <div className={"cardProducts"}>
                    <CardProduct title={"iPhone"} represent={"Year: 2008. Memory: 16Gb"} price={"$ 13,99"} />
                    <CardProduct title={"Tomato"} represent={"It's red and tasty"} price={"$ 0,99"}/>
                </div>
                <div className={"news"}>
                    <News title={"TCH"} events={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias enim, excepturi illum itaque magnam nostrum ratione repellendus voluptatem?"} conslution={"Conslution"}/>
                </div>
                <div>
                    <Car model={"Opel"} year={2006} engine={1.7} km={"260 km"}/>
                </div>
            </div>
        );
    };
};

export default App;
