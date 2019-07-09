import React from "react";
import "../styles/navbar.css";
export default function Navbar({ children }) {
  const hasTouch = () =>
    "ontouchstart" in document.documentElement ||
    navigator.maxTouchPoints > 0 ||
    navigator.msMaxTouchPoints > 0;

  /*todo: add useEffect, onmount check if this overflows 

  if it overflows to left set a overflow opacity transition to the left and vice versa

  also scroll to selected item in navbar

  function isOverflown(element) {
      return element.scrollHeight > element.clientHeight || element.scrollWidth > element.clientWidth;
  }
  */

  return (
    <div className={`navbar${!hasTouch() ? " is-desktop" : ""}`}>
      {children}
    </div>
  );
}
