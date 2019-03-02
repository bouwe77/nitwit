import React from "react";

import Post from "./Post";

const Timeline = props => {
  return (
    <div className="timeline">
      {props.timeline.map(post => (
        <Post key={post.id} post={post} />
      ))}
    </div>
  );
};

export default Timeline;
