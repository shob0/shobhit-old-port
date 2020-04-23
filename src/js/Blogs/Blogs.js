import React, { useEffect, useState } from "react";
import Post from "./Post";

import Stub from "../Stub";
import { useHistory } from "react-router-dom";

function Blogs() {
  const [posts, setPosts] = useState([]);
  const history = useHistory();

  useEffect(() => {
    const p = Stub.GetPosts();
    if (posts.length === 0) {
      setPosts(p);
    } //no else clause needed
  }, [posts]);

  return (
    <div className="sideDiv">
      <h4 style={{ color: "red" }}>
        <u>Please note that this section is stil not complete. Thnanks</u>
      </h4>
      <div style={styles.blogHeaderDiv}>
        <div>
          <button
            type="button"
            style={styles.btn}
            className="btn btn-hover"
            onClick={() => {
              history.push("/blogs/create");
            }}
          >
            <span style={styles.spanBold}>write new post</span>
          </button>
          <button type="button" style={styles.btn} className="btn btn-hover">
            <span>drafts</span>
          </button>
        </div>
      </div>
      <div style={styles.content}>
        {posts.map(function mapOverPosts(val) {
          return <Post key={val.id} post={val} />;
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
