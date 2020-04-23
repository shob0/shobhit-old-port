import React from "react";
import Experience from "./Experience";

function Main() {
  return (
    <div className="content">
      <div id="intro">
        <div>
          <hr className="divider" />
        </div>
        <strong>I'm A</strong>
        <div id="intro-header">
          <h1>Software</h1>
          <h1 style={{ marginLeft: "90px" }}>Developer</h1>
        </div>
        <div id="intro-content">
          <div style={{ marginLeft: "70px" }}>
            <hr className="divider" style={{ transform: "scale(0.6)" }} />
            <span className="light-content">about me</span>
            <p className="light-content">
              I'm Shobhit, front end developer, Poetry lover, Yogi, loves to
              explore <em>JavaScript, HTML/CSS.</em>
            </p>
          </div>
        </div>
      </div>

      <Experience
        title="i`ve worked at"
        company="Infosys Limited"
        roleName="front end dev"
      />
      <Experience
        title="also volunteered at"
        company="the Indian Stammering Assosiation"
        roleName="volunteer"
      />
    </div>
  );
}

export default Main;
