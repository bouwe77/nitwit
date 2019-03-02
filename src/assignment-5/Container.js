import React from "react";
import axios from "axios";

import Timeline from "./Timeline";
import Compose from "./Compose";

class Container extends React.Component {
  constructor(props) {
    super(props);

    this.baseUrl = "https://nitwit-api.azurewebsites.net/users/bouwe";

    this.state = {
      isLoaded: false,
      timeline: []
    };
  }

  componentDidMount() {
    this.getTimeline();
  }

  getTimeline() {
    axios
      .get(`${this.baseUrl}/timeline`)
      .then(res => {
        const timeline = res.data;
        this.setState({ isLoaded: true, timeline });
      })
      .catch(error => {
        this.setState({ isLoaded: true, error });
      });
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
