import React from "react";
import "../styles/info-box.css";

export default function InfoBoxHeader({ children, className }) {
  return <div className={`info-box-header ${className}`}>{children}</div>;
}
