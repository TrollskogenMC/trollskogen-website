import React from "react";
import "../styles/button.css";

export default function Button({ children, href }) {
  return (
    <a className="btn btn-default" href={href}>
      {children}
    </a>
  );
}
