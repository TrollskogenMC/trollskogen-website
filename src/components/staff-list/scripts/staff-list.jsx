import React from "react";
import "../styles/staff.css";

export default function StaffList() {
  return (
    <div className="staff-list">
      <div className="staff-member">
        <img
          className="staff-img"
          src="https://minotar.net/armor/bust/hornta/100.png"
          width="75px"
          height="75px"
          alt="hornta"
        />
        hornta
        <br /> Ägare
      </div>
      <div className="staff-member">
        <img
          className="staff-img"
          src="https://minotar.net/armor/bust/philip2096/100.png"
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
