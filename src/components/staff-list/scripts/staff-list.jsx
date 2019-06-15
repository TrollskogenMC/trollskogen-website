import React from "react";
import "../styles/staff.css";
import philip from "../images/philip2096.png";
import hornta from "../images/hornta.png";

export default function StaffList() {
  return (
    <div className="staff-list">
      <div className="staff-member">
        <img
          className="staff-img"
          src={hornta}
          width="75px"
          height="75px"
          alt="hornta"
        />
        hornta
        <br /> Admin
      </div>
      <div className="staff-member">
        <img
          className="staff-img"
          src={philip}
          width="75px"
          height="75px"
          alt="philip2096"
        />
        Philip2096
        <br /> Admin
      </div>
    </div>
  );
}
