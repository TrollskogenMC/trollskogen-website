import React from "react";
import "../styles/pulsing-button.css";

export default function PulsingButton({ text }) {
  const handleClick = e => {
    e.preventDefault();
    const range = document.createRange();
    const sel = window.getSelection();
    range.selectNodeContents(ref.current);
    sel.removeAllRanges();
    sel.addRange(range);
  };
  return (
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
        {text}
      </div>
    </div>
  );
}

const ref = React.createRef();
