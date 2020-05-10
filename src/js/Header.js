import React from "react";
import { useHistory } from "react-router-dom";

import resume from "../../resources/resume.pdf";

function Header() {
  let history = useHistory();

  const downloadResume = () => {
    window.open(resume, "_blank", "");
  };

  return (
    <div className="header">
      <header>
        <button
          type="button"
          className="nav-bar-button textColor btn-hover"
          style={{ transform: "scale(1)" }}
          onClick={() => {
            history.push("/");
          }}
        >
          <div style={{ display: "inline-block" }}>
            <div className="name">
              <p>shobhit</p>
            </div>
            <div style={{ marginLeft: "60px" }} className="name">
              <p>singh</p>
            </div>
          </div>
        </button>
        <div>
          <nav>
            <div className="nav" id="nav">
              <div>
                <button
                  type="button"
                  className="nav-bar-button textColor"
                  onClick={() => {
                    history.push("/blogs");
                  }}
                  aria-label="blogs button"
                >
                  <span>blogs</span>
                </button>
              </div>
              <div>
                <button
                  type="button"
                  className="nav-bar-button textColor"
                  onClick={() => {
                    history.push("/projects");
                  }}
                  aria-label="projects button"
                >
                  <span>projects</span>
                </button>
              </div>
              <div>
                <button
                  type="button"
                  className="nav-bar-button textColor"
                  onClick={() => {
                    history.push("/contact");
                  }}
                  aria-label="contact button"
                >
                  <span>contact</span>
                </button>
              </div>
              <div>
                <button
                  type="button"
                  style={{ color: "red", transform: "scale(1.12)" }}
                  className="nav-bar-button textColor"
                  onClick={downloadResume}
                  aria-label="resume download button"
                >
                  <span>
                    <b>resume</b>
                  </span>
                </button>
              </div>
            </div>
          </nav>
        </div>
      </header>
    </div>
  );
}

export default Header;
