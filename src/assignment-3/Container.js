import React from "react";

import Timeline from "./Timeline";

class Container extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      timeline: [
        {
          content: "Cold is a state of mind.",
          user: "bouwe"
        },
        {
          content: "I think I'm constantly in a state of adjustment.",
          user: "bouwe"
        }
      ]
    };
  }

  render = () => (
    <div>
      <Timeline timeline={this.state.timeline} />
    </div>
  );
}

export default Container;
