import React from "react";
import "../styles/button.css";

export default function Button({ children, href, className }) {
  return (
    <a className={`btn ${className || ""}`} href={href}>
      {children}
    </a>
  );
}
