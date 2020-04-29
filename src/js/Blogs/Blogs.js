import React, { useEffect, useState } from "react";
import Post from "./Post";
import Stub from "../Stub";

function Blogs() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const p = Stub.GetPosts();
    if (posts.length === 0) {
      setPosts(p);
    } //no else clause needed
  }, [posts]);

  const openModal = (e) => {
    console.log(e.content);
  };

  return (
    <div className="">
      <div style={styles.content}>
        {posts.map(function mapOverPosts(val) {
          return <Post key={val.id} post={val} clickHandler={openModal} />;
        })}
      </div>
    </div>
  );
}

const styles = {
  blogHeaderDiv: {
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  spanBold: {},
  btn: {
    borderRadius: "0",
    border: "1px solid black",
  },
  content: { paddingTop: "20px", paddingLeft: "20px" },
  posts: {
    display: "flex",
    // justifyContent: "flex-start",
    alignItems: "center",
  },
};

export default Blogs;
