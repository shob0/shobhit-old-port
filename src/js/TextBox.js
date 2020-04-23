import React, { useRef } from "react";

function TextBox() {
  const textShow = "";
  const textRef = useRef(null);

  const handleKeyPress = (e) => {
    e.preventDefault();
  };

  const handleButtonPress = (e) => {};

  return (
    <div className="sideDiv" style={Styles.textbox}>
      <input type="text" style={Styles.inputTitle} placeholder="title" />
      <div style={Styles.textboxHeader}>
        <button
          type="button"
          style={Styles.btn}
          title="Bold"
          className="textbox-btn"
          onClick={handleButtonPress}
        >
          <b style={Styles.boldText} title="Bold">
            B
          </b>
        </button>
        <button
          type="button"
          style={Styles.btn}
          title="Italic"
          className="textbox-btn"
          onClick={handleButtonPress}
        >
          <b style={Styles.boldText} title="Italic">
            <i title="Italic">i</i>
          </b>
        </button>
        <button
          type="button"
          style={Styles.btn}
          title="Underline"
          className="textbox-btn"
          onClick={handleButtonPress}
        >
          <b style={Styles.boldText} title="Underline">
            <u title="Underline">U</u>
          </b>
        </button>
        <select style={Styles.select} title="Make a heading">
          <option>Headings</option>
          <option>Heading 1</option>
          <option>Heading 2</option>
          <option>Heading 2</option>
        </select>
      </div>
      <div style={Styles.inputBox} contentEditable={false}>
        <textarea
          id="textarea"
          ref={textRef}
          style={Styles.textarea}
          value={textShow}
          className="text-area-textBox"
          onKeyDown={handleKeyPress}
        >
          {textShow}
        </textarea>
      </div>
    </div>
  );
}

const Styles = {
  textbox: {
    marginTop: "0px",
    padding: "0px",

    width: "72vw",
  },
  boldText: {
    fontSize: "22px",
  },
  btn: {
    width: "30px",
    height: "inherit",
    backgroundColor: "inherit",
    border: "none",
    borderRight: "1px solid white",
    color: "inherit",
    cursor: "pointer",
  },
  inputTitle: {
    width: "inherit",
    height: "30px",
    marginBottom: "20px",
    fontSize: "20px",
    fontWeight: "bold",
  },
  textboxHeader: {
    backgroundColor: "black",
    color: "white",
    width: "inherit",
    borderRight: "2px solid black",
    borderRadius: "2px",
    height: "30px",
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  inputBox: {
    width: "inherit",
    border: "1px solid black",
    height: "55vh",
    maxHeight: "55vh",
    overflow: "hidden",
  },
  select: {
    height: "inherit",
    color: "white",
    backgroundColor: "black",
  },
  textarea: {
    outline: "none",
    height: "inherit",
    width: "inherit",
    border: "none",
    resize: "none",
  },
};

export default TextBox;
