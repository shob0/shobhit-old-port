import React from "react";

/**
 *Title: String
 *Company: String
 *roleName: String
 *Impacts: []
 */
function Experience(props) {
  return (
    <div id="experience">
      <div>
        <hr className="divider" />
      </div>
      <strong>{props.title}</strong>
      <div style={{ margin: "8px 0 0 70px" }} className="light-content">
        <span>{props.company}</span>
        <h6 style={{ margin: "0 0 0 24px" }}>{props.roleName}</h6>
      </div>
      <div id="experiene-content" className="light-content">
        <ul>
          <li>one</li>
          <li>Two</li>
          <li>Three</li>
        </ul>
      </div>
    </div>
  );
}

export default Experience;
