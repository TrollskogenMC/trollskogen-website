import React from "react";
export default function NavButton({ children, logo, isActive }) {
  return (
    <div
      className={`nav-button ${logo ? "nav-button-logo" : ""}${
        isActive ? "nav-button-active" : ""
      }`}
    >
      {children}
    </div>
  );
}
