import React from "react";

import Timeline from "./Timeline";
import Compose from "./Compose";

class Container extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      timeline: [],
      user: "bouwe"
    };
  }

  savePost = content => {
    this.setState(prevState => ({
      timeline: [
        { content: content, user: this.state.user },
        ...prevState.timeline
      ]
    }));
  };

  render = () => (
    <div className="container">
      <br /> hier heb ik nog helemaal niks aan gedaan, dit is een kopie van
      Assignment 4
      <Compose savePost={this.savePost} />
      <Timeline timeline={this.state.timeline} />
    </div>
  );
}

export default Container;
