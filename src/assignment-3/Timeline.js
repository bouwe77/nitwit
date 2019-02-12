import React from "react";

import Post from "./Post";

const Timeline = () => {
  const post1 = { content: "this is my first post ever! :)", user: "bouwe" };
  const post2 = { content: "yet another post, w00t \\m/", user: "bouwe" };

  return (
    <div className="timeline">
      <Post post={post1} />
      <Post post={post2} />
    </div>
  );
};

export default Timeline;
