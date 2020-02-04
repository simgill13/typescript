import React, { Component } from "react";
import { render } from "react-dom";
import Hello from "./Hello";
import "./style.css";

interface AppProps {}
interface AppState {
  name: string;
}

class App extends Component<AppProps, AppState> {
  constructor(props) {
    super(props);
    this.state = {
      name: "React"
    };
  }

  add = (a: number, b: number): number => {
    return a + b;
  };

  concatString = (a: string, b: {number:number}) => {
    return a + b.number;
  };



  render() {
    //declare varable
    let age: number;
    let name: string;
    let hobbies: string[] = [];
   
    hobbies.push('s',3)
     console.log(hobbies)
    return (
      <div>
        <Hello name={this.state.name} />
        <p>Start editing to see some magic happen :)</p>
        <button onClick={()=>console.log(this.add(3,2))}> add </button>
        <button onClick={()=>console.log(this.concatString('hello ',{number:3}))}> concatString </button>
      </div>
    );
  }
}

render(<App />, document.getElementById("root"));
