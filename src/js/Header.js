import React from "react";
import { useHistory } from "react-router-dom";

function Header() {
  let history = useHistory();

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
            <div className="nav">
              <button
                type="button"
                className="nav-bar-button textColor"
                onClick={() => {
                  history.push("/blogs");
                }}
              >
                <span>blogs</span>
              </button>
              <button
                type="button"
                className="nav-bar-button textColor"
                onClick={() => {
                  history.push("/projects");
                }}
              >
                <span>projects</span>
              </button>
              <button
                type="button"
                className="nav-bar-button textColor"
                onClick={() => {
                  history.push("/contact");
                }}
              >
                <span>contact</span>
              </button>
            </div>
          </nav>
        </div>
      </header>
    </div>
  );
}

export default Header;
