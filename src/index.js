import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import * as serviceWorker from "./serviceWorker";

const ref = React.createRef();

function handleClick(e) {
  e.preventDefault();
  const range = document.createRange();
  const sel = window.getSelection();
  range.selectNodeContents(ref.current);
  sel.removeAllRanges();
  sel.addRange(range);
}

ReactDOM.render(
  <>
    <div
      className="App"
      style={{
        fontSize: 40,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "100%",
        textAlign: "center"
      }}
    >
      <div
        style={{
          paddingBottom: 40
        }}
      >
        🌲 Under konstruktion 🏗️
      </div>
      <div
        style={{
          color: "#FF851B",
          backgroundColor: "#001f3f",
          padding: "6px 14px",
          borderRadius: 10,
          fontSize: 34
        }}
        className="pulse"
        onClick={handleClick}
        ref={ref}
      >
        mc.trollskogen.nu
      </div>
    </div>
  </>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
