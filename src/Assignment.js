import React from "react";

import Assignment1 from "./assignment-1/App";
import Assignment2 from "./assignment-2/App";
import Assignment3 from "./assignment-3/App";
import Assignment4 from "./assignment-4/App";
import Assignment5 from "./assignment-5/App";
import Assignment6 from "./assignment-6/App";

const Assignment = props => {
  const assignments = [
    Assignment1,
    Assignment2,
    Assignment3,
    Assignment4,
    Assignment5,
    Assignment6
  ];
  const SelectedAssignment = assignments[props.selectedAssignmentIndex];
  return <SelectedAssignment />;
};

export default Assignment;
