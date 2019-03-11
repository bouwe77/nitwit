import React from "react";

const Header = props => {
  const assignments = [
    "Assignment 1 - Components",
    "Assignment 2 - Props",
    "Assignment 3 - State",
    "Assignment 4 - Events and Forms",
    "Assignment 5 - Syncing state with an API"
    //"Assignment 6 - Follow users"
  ];

  return (
    <div className="header">
      <select
        value={props.selectedAssignmentIndex}
        onChange={props.handleChange}
      >
        {assignments.map((assignment, index) => (
          <option key={index} value={index}>
            {assignment}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Header;
