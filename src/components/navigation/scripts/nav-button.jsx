import React from "react";
export default function NavButton({ children, logo, isActive }) {
  return (
    <span
      className={`nav-button ${logo ? "nav-button-logo" : ""}${
        isActive ? "nav-button-active" : ""
      }`}
    >
      {children}
    </span>
  );
}
