import React from "react";
import "../styles/home.css";
import StaffList from "../../../components/staff-list/scripts/staff-list";
import Jumbotron from "../../../components/jumbotron/scripts/jumbotron.jsx";
export default function HomePage() {
  return (
    <div>
      <Jumbotron
        className="jumbotron-bg-home"
        title="Trollskogen - Svensk minecraft server 1.14"
        text="Kul att du kikar in! Trollskogen är ett nytt svenskt
    minecraft-community som startades i februari 2019. Vi värnar om att
    ha ett moget community och därför kommer vi att vara stränga med
    reglerna."
        linkArea={
          <React.Fragment>
            <span>Ip: mc.trollskogen.nu</span>
          </React.Fragment>
        }
      />

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
            <br />
            <br />
            På trollskogen kör vi på en svårare svårighetsgrad(hard), man får
            inte mycket gratisitems och vi har stängt av hp-regenerering i
            nether, allt för att göra minecraft lite mer utmanande!
            <br /> <br />
            Självklart trivs du som gillar lugn och ro och bara vill bygga i
            fred också! Då kan du gå med i en av våra towny städer, eller skapa
            en själv, i dessa kan man stänga av monster.
          </p>
        </div>
        <div className="post post-right post-staff-area">
          <hr />
          <h2>Vi i staff</h2>
          <StaffList />
        </div>
      </div>
    </div>
  );
}
