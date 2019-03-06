import React from "react";
//import axios from "axios";

import Following from "./Following";

class FollowingContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      users: [{ id: 1, name: "bouwe" }, { id: 2, name: "sjonnie" }]
    };
  }
  render() {
    return (
      <div>
        <Following users={this.state.users} />
      </div>
    );
  }
}

export default FollowingContainer;
