import React from "react";
import "../styles/jumbotron.css";

export default function Jumbotron({ title, className, text, linkArea }) {
  return (
    <div className={`jumbotron ${className}`}>
      <div className="decription">
        <h1>{title}</h1>
        <p>
          {text}
          <br />
          <br />
          <br />
        </p>
      </div>
      {!!linkArea && <div className="server-links">{linkArea}</div>}
    </div>
  );
}
