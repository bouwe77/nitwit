import React from "react";

import Post from "./Post";

const Timeline = () => {
  const post1 = "this is my first post ever! :)";
  const post2 = "yet another post, w00t \\m/";

  return (
    <div className="timeline">
      <Post post={post1} />
      <Post post={post2} />
    </div>
  );
};

export default Timeline;
