import React from "react";

import Timeline from "./Timeline";
import Compose from "./Compose";

class TimelineContainer extends React.Component {
  constructor(props) {
    super(props);

    this.user = "bouwe";

    this.state = {
      timeline: []
    };
  }

  savePost = content => {
    const newPost = { content: content, user: this.user };
    this.setState(prevState => ({
      timeline: [newPost, ...prevState.timeline]
    }));
  };

  render = () => (
    <div className="container">
      <Compose savePost={this.savePost} />
      <Timeline timeline={this.state.timeline} />
    </div>
  );
}

export default TimelineContainer;
