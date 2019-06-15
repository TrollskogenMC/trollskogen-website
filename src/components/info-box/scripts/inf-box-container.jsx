import React from "react";
import "../styles/info-box.css";

export default function InfoBoxContainer({ children, expandable }) {
  return (
    <div className={`info-box-container${expandable ? " expandable" : ""}`}>
      {children}
    </div>
  );
}
