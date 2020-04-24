import React from "react";

function Contact() {
  return (
    <div>
      <div className="contact">
        <div>
          <a
            href="mailto:shobhit5@hotmail.com"
            title="shobhit5@hotmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="btn textColor contact-btn">
              <span className="large-text">Email</span>
            </button>
          </a>
        </div>
        <div>
          <a href="tel:+31644777939" title="Call: +31 644 777 939">
            <button className="btn  textColor contact-btn">
              <span className="large-text">Phone</span>
            </button>
          </a>
        </div>
      </div>
      <div className="contact">
        <div className="btn-div">
          <a href="https://github.com/shob0" title="https://github.com/shob0">
            <button className="btn  textColor contact-btn">
              <span className="large-text">Github</span>
            </button>
          </a>
        </div>
        <div>
          <a
            href="https://facebook.com/shob0"
            title="https://facebook.com/shob0"
          >
            <button className="btn  textColor contact-btn">
              <span className="large-text">Facebook</span>
            </button>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Contact;
