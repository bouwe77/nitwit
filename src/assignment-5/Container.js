import React from "react";

import Timeline from "./Timeline";
import Compose from "./Compose";

class Container extends React.Component {
  constructor(props) {
    super(props);

    this.user = "bouwe";

    this.state = {
      isLoaded: false,
      timeline: []
    };
  }

  componentDidMount() {
    fetch("https://nitwit.azurewebsites.com/users/" + this.user + "/timeline")
      .then(res => res.json())
      .then(
        result => {
          this.setState({
            isLoaded: true,
            timeline: result
          });
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        error => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      );
  }

  savePost = content => {
    this.setState(prevState => ({
      timeline: [
        { content: content, user: this.state.user },
        ...prevState.timeline
      ]
    }));
  };

  render = () => {
    if (this.state.error) {
      return <div>Error: {this.state.error.message}</div>;
    } else if (!this.state.isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <div className="container">
          <Compose savePost={this.savePost} />
          <Timeline timeline={this.state.timeline} />
        </div>
      );
    }
  };
}

export default Container;
