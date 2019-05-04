import React from "react";
import "../styles/button.css";

export default function Button({ children, href }) {
  return (
    <a className="btn" href={href}>
      {children}
    </a>
  );
}
