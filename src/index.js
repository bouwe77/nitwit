import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";

import Assignments from "./components/Assignments";
import Assignment1 from "./assignment1/components/App";
//import Assignment2 from "./assignment2/components/App";
//import Assignment3 from "./assignment3/components/App";

class App extends React.Component {
  render = () => (
    <div>
      <Assignments />
      <Assignment1 />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
