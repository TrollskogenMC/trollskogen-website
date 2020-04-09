import React from "react";
import "../styles/jumbotron.css";

export default function Jumbotron({ title, className, text, linkArea }) {
  return (
    <div className={`jumbotron ${className}`}>
      <div className="decription">
        <div className="transparent-bg">
          <h1>{title}</h1>
          <p>{text}</p>
        </div>
      </div>
      {!!linkArea && <div className="server-links">{linkArea}</div>}
    </div>
  );
}
