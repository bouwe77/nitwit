import React from "react";

import Assignment from "./Assignment";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.assignments = [
      "Assignment 1 - Components",
      "Assignment 2 - Props",
      "Assignment 3 - State",
      "Assignment 4 - Events and Forms",
      "Assignment 5 - Syncing state with an API",
      "Assignment 6 - Follow users"
    ];
    const initialSelectedIndex = this.assignments.length - 1;
    //const initialSelectedIndex = 3;
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
        <div className="header">
          <select
            value={this.state.selectedAssignmentIndex}
            onChange={this.handleChange}
          >
            {this.assignments.map((assignment, index) => (
              <option key={index} value={index}>
                {assignment}
              </option>
            ))}
          </select>
        </div>

        <Assignment index={this.state.selectedAssignmentIndex} />
      </div>
    );
  };
}

export default App;
