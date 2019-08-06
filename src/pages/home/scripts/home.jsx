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
          <h2 className="post-title">Om 1.14</h2>
          <p className="post-text">
            Vi känner äntligen att det är dags att uppdattera servern nu när de
            nödvändigaste pluginsen är uppdatterade och när mojang och Spigot
            har släppt en stabil uppdattering.
            <br />
            <br />
            En nyhet för servern är vårt egna plugin "Racing", vår förhoppning
            är att vi ska använda det som ett enkelt sätt att skapa events och
            för att ge er utmaningar på servern. Pluginet uppdatteras löpande
            med nya funktioner, så håll utkik här och på vår discord-server!
            <br />
            <br />
            Något annat som vi kommer att testa är ett <b>dubbel xp-event </b>
            för mcmmo under första helgen som vi har 1.14.
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
