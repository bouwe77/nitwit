import React from "react";

import Header from "./Header";
import TimelineContainer from "./TimelineContainer";
import FollowingContainer from "./FollowingContainer";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { renderFollowing: false };
  }

  renderTimeline = () => {
    this.setState({ renderFollowing: false });
  };

  renderFollowing = () => {
    this.setState({ renderFollowing: true });
  };

  render() {
    return (
      <div>
        <Header
          renderTimeline={this.renderTimeline}
          renderFollowing={this.renderFollowing}
        />

        {this.state.renderFollowing ? (
          <FollowingContainer />
        ) : (
          <TimelineContainer />
        )}
      </div>
    );
  }
}
