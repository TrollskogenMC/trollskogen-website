import React from "react";
import "../styles/home.css";
import StaffList from "../../../components/staff-list/scripts/staff-list";
import Jumbotron from "../../../components/jumbotron/scripts/jumbotron.jsx";
export default function HomePage() {
  return (
    <div>
      <Jumbotron
        className="jumbotron-bg-home"
        title="Trollskogen - Ny svensk minecraft server"
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
        <div className="post post-left">
          <hr />
          <h2 className="post-title">
            Nu är det dag att uppdattera till 1.14!
          </h2>
          <p className="post-text">
            Med uppdateringen så kommer ett gängg nya funktioner till servern,
            förutom alla nya vannilla funktionerna så har vi passat på att
            uppdatera mcMMO, lagt till vårt nya plugin "racing".
            <br />
            <br />
            För att fira att 1.14 äntligen har kommit till Trollskogen så slår
            vi på <b>dubbel xp-event </b>
            för mcMMO från tisdag den 6e augusti till och med söndag 11e augusti
            (23.59). 
          </p>
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
        <div className="post post-right post-staff-area">
          <hr />
          <h2>Vi i staff</h2>
          <StaffList />
        </div>
      </div>
    </div>
  );
}
