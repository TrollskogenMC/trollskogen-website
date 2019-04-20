import React from "react";
import "../styles/staff.css";
import philip from "../images/philip2096.png";
import hornta from "../images/hornta.png";

export default function StaffList({ text }) {
  return (
    <div className="staff-list">
      <div className="staff-member">
        <img src={hornta} width="75" height="75" alt="hornta" />
        Hornta
        <br /> Admin
      </div>
      <div className="staff-member">
        <img src={philip} width="75" height="75" alt="philip2096" />
        Philip2096
        <br /> Admin
      </div>
    </div>
  );
}
