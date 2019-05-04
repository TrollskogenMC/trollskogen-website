import React from "react";
import "../styles/staff.css";
import philip from "../images/philip2096.png";
import vixaan from "../images/vixaan.png";
import hornta from "../images/hornta.png";
import mistresslilith from "../images/mistresslilith.png";

export default function StaffList({ text }) {
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
      <div className="staff-member">
        <img
          className="staff-img"
          src={vixaan}
          width="75px"
          height="75px"
          alt="vixaan"
        />
        vixaan
        <br /> Moderator
      </div>
      <div className="staff-member">
        <img
          className="staff-img"
          src={mistresslilith}
          width="75px"
          height="75px"
          alt="mistresslilith"
        />
        mistresslilith
        <br /> Moderator
      </div>
    </div>
  );
}
