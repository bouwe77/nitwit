import React from "react";

import Timeline from "./Timeline";
import Compose from "./Compose";

class Container extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      timeline: []
    };
  }

  savePost = content => {
    this.setState(prevState => ({
      timeline: [{ content: content, user: "bouwe" }, ...prevState.timeline]
    }));
  };

  render = () => (
    <div className="container">
      <Compose savePost={this.savePost} />
      <Timeline timeline={this.state.timeline} />
    </div>
  );
}

export default Container;
