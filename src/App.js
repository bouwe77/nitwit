import React from "react";

import Header from "./Header";
import Assignment from "./Assignment";

export default class App extends React.Component {
  constructor(props) {
    super(props);

    const initialSelectedIndex = 4;
    this.state = { selectedAssignmentIndex: initialSelectedIndex };
  }

  handleChange = event => {
    this.setState({
      selectedAssignmentIndex: parseInt(event.target.value, 10)
    });
  };

  render = () => {
    return (
      <div>
        <Header
          selectedAssignmentIndex={this.state.selectedAssignmentIndex}
          handleChange={this.handleChange}
        />
        <Assignment
          selectedAssignmentIndex={this.state.selectedAssignmentIndex}
        />
      </div>
    );
  };
}
