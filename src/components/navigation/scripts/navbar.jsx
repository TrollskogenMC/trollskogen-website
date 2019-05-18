import React from "react";
import "../styles/navbar.css";
export default function Navbar({ children }) {
  const hasTouch = () =>
    "ontouchstart" in document.documentElement ||
    navigator.maxTouchPoints > 0 ||
    navigator.msMaxTouchPoints > 0;

  return (
    <div className={`navbar${!hasTouch() ? " is-desktop" : ""}`}>
      {children}
    </div>
  );
}
