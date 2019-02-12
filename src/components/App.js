import React from "react";

import Assignments from "./Assignments";
import Assignment1 from "../assignment-1/components/App";
//import Assignment2 from "../assignment-2/components/App";
//import Assignment3 from "../assignment-3/components/App";

class App extends React.Component {
  render = () => (
    <div>
      <Assignments />
      <Assignment1 />
    </div>
  );
}

export default App;
