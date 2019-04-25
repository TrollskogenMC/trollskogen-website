import React from "react";
import "../styles/staff.css";
import philip from "../images/philip2096.png";
import hornta from "../images/hornta.png";
import vixaan from "../images/vixaan.png";
import mistresslilith from "../images/mistresslilith.png";

export default function StaffList({ text }) {
  return (
    <div className="staff-list">
      <div className="staff-member">
        <img src={hornta} width="75" height="75" alt="hornta" />
        hornta
        <br /> Admin
      </div>
      <div className="staff-member">
        <img src={philip} width="75" height="75" alt="philip2096" />
        Philip2096
        <br /> Admin
      </div>
      <div className="staff-member">
        <img src={vixaan} width="75" height="75" alt="vixaan" />
        vixaan
        <br /> Moderator
      </div>
      <div className="staff-member">
        <img src={mistresslilith} width="75" height="75" alt="mistresslilith" />
        mistresslilith
        <br /> Moderator
      </div>
    </div>
  );
}
