import React, { useEffect } from "react";

function Modal(props) {
  useEffect(() => {
    document.getElementById("modal-text").innerHTML = props.post.content;
  });

  return (
    <div className="modal-bg">
      <div className="modal">
        <div className="modal-header">
          <div className="modal-header-title">{props.post.title}</div>
          <div className="modal-header-close-btn">
            <button
              type="button"
              className="modal-close-btn"
              onClick={props.closeModal}
            >
              <span>&times;</span>
            </button>
          </div>
        </div>
        <hr />
        <div className="modal-content">
          <div className="modal-body" id="modal-text"></div>
        </div>
      </div>
    </div>
  );
}

export default Modal;
