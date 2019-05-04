import React from "react";
import "../styles/navbar.css";
export default function Navbar({ children }) {
  return (
    <div className="navbar">
      <div className="btn-group">{children}</div>
    </div>
  );
}
