import React from "react";
import PulsingButton from "../../../components/pulsing-button/scripts/pulsing-button";
import DownIcon from "../../../icons/down-icon.jsx";
import "../styles/home.css";
import StaffList from "../../../components/staff-list/scripts/staff-list";
export default function HomePage() {
  return (
    <div>
      <div className="jumbotron">
        <div className="decription">
          <h1>Trollskogen - Ny svensk minecraft server</h1>
          <p>
            Kul att du kikar in! Trollskogen är ett nytt svenskt
            minecraft-comunity som startades i februari 2019. Vi värnar om att
            ha ett moget community och därför kommer vi att vara stränga med
            reglerna. <br />
            <br />
            <br />
          </p>
        </div>
        <div className="server-links">
          <span>Ip: mc.trollskogen.nu</span>
          <span>
            Discord:{" "}
            <a href="https://discord.gg/wPxz8pD">https://discord.gg/wPxz8pD</a>
          </span>
        </div>
      </div>
      <div className="post-area">
        <br />
        <div className="post post-left">
          <hr />
          <h2 className="post-title">Om oss</h2>
          <p className="post-text">
            Trollskogen är en vänskaplig towny-server utan whitelist. Vi kör med
            ett gäng plugin för att skapa en bättre speluplevelse, bl.a.{" "}
            <b>Lwc</b>, <b>towny</b> och <b>chestshops</b>. På trollskogen har
            vi nolltollerans mot griefing, fusk och trakasserier och vi är hårda
            med att alla ska följa de regler vi har satt upp.
          </p>
        </div>
        <div className="post post-right">
          <hr />
          <h2>Vi i staff</h2>
          <StaffList />
        </div>
      </div>
    </div>
  );
}
