import React from "react";
export default function NavButton({ children, logo }) {
  return (
    <span className={`nav-button ${logo ? "nav-button-logo" : ""}`}>
      {children}
    </span>
  );
}
