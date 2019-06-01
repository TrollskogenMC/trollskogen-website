import React from "react";
import "../styles/info-box.css";

export default function InfoBoxInfo({ children, className }) {
  return <div className={`info-box-body ${className}`}>{children}</div>;
}
