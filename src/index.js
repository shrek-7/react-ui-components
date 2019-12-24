import React from "react";
import ReactDOM from "react-dom";
import Navigation from "./navigation";

import "./styles.css";

function App() {
  return (
    <div className="App">
      <Navigation list={['one', 'two']}/>
      <br />
      <br />
      <br />
      <Navigation list={['one', 'two', 'three']}/>
      <br />
      <br />
      <br />
      <Navigation list={['one', 'two', 'three', 'four', 'five']}/>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
