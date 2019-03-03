import React from "react";

import Assignment1 from "./assignment-1/App";
import Assignment2 from "./assignment-2/App";
import Assignment3 from "./assignment-3/App";
import Assignment4 from "./assignment-4/App";
import Assignment5 from "./assignment-5/App";
import Assignment6 from "./assignment-6/App";

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
    let assignmentComponent;
    switch (this.state.selectedAssignmentIndex) {
      case 0:
        assignmentComponent = <Assignment1 />;
        break;
      case 1:
        assignmentComponent = <Assignment2 />;
        break;
      case 2:
        assignmentComponent = <Assignment3 />;
        break;
      case 3:
        assignmentComponent = <Assignment4 />;
        break;
      case 4:
        assignmentComponent = <Assignment5 />;
        break;
      case 5:
        assignmentComponent = <Assignment6 />;
        break;
      default:
        assignmentComponent = null;
        break;
    }

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

        <div className="assignment">{assignmentComponent}</div>
      </div>
    );
  };
}

export default App;
