import React from "react";

import Timeline from "./Timeline";

class Container extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      timeline: [
        {
          content: "Deze post is afkomstig uit state",
          user: "bouwe"
        },
        {
          content: "En deze ook",
          user: "bouwe"
        }
      ]
    };
  }

  render = () => (
    <div className="container">
      <Timeline timeline={this.state.timeline} />
    </div>
  );
}

export default Container;
