import React from "react";
import Experience from "./Experience";
import ME from "../../../resources/img/Me_OOty.jpg";
import { impacts } from "../../../resources/Impact";

function Main() {
  const [experienceImpact, volunteerImpact] = impacts;
  return (
    <div className="textColor route-div">
      <div id="intro" className="intro-header">
        <div>
          <hr className="divider" />
        </div>
        <strong>about</strong>
        <div id="intro-content">
          <div style={{ marginLeft: "70px" }}>
            <hr className="divider" style={{ transform: "scale(0.6)" }} />
            {/* <span className="light-content">about me</span> */}
            <p className="light-content">
              I'm Shobhit, front end developer, Poetry lover, Yogi, loves to
              explore <em>JavaScript, HTML/CSS.</em>
            </p>
          </div>
        </div>
        <img src={ME} alt="Shobhit Singh" className="full-width-img" />
      </div>

      <Experience
        title="i`ve worked at"
        company="Infosys Limited"
        roleName="front end dev"
        impact={experienceImpact}
      />
      <Experience
        title="also volunteered at"
        company="the Indian Stammering Assosiation"
        roleName="volunteer"
        impact={volunteerImpact}
      />
    </div>
  );
}

export default Main;
