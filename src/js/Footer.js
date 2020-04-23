import React from "react";

function Footer() {
  return (
    <div id="contact">
      <div>
        <hr className="divider" />
      </div>
      <strong>talk to me by</strong>
      <div id="contact-content">
        <div style={{ display: "inline-block" }} id="email">
          <a href="" id="email-btn">
            <div style={{ padding: "20px; font-size: 23px" }}>
              <span>email me at:</span>
              <p>shobhit5@hotmail.com</p>
            </div>
          </a>
        </div>
        <div id="contact-btn">
          <a style={{ marginTop: "2.5em" }}>GIT</a>
          <a style={{ marginTop: "2.5em" }}>GIT</a>
          <a style={{ marginTop: "2.5em" }}>GIT</a>
        </div>
      </div>
      <hr style={{ borderRadius: "5px" }} />
    </div>
  );
}

export default Footer;
