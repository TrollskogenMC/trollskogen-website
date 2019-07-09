import React, { useState, useEffect } from "react";
import axios from "axios";
import InfoBoxContainer from "../../../components/info-box/scripts/inf-box-container";
import InfoBoxHeader from "../../../components/info-box/scripts/info-box-header";
import Jumbotron from "../../../components/jumbotron/scripts/jumbotron.jsx";
import "../styles/racing.css";

export default function Racing() {
  const [races, setRaces] = useState(undefined);
  const [hasFetched, setHasFetched] = useState(false);
  const fetchRaces = callback => {
    axios
<<<<<<< HEAD
      .get("https://api.trollskogen.nu/users", { crossdomain: true })
      .then(response => {
        console.log(response);
        return "success";
      })
      .catch(err => {
        console.log(err);
=======
      .get("https://api.trollskogen.nu/races")
      .then(response => {
        setHasFetched(true);
        callback(response.data.races);
      })
      .catch(err => {
        setHasFetched(true);
        callback(undefined, err);
>>>>>>> added new racing page and fixed and added scroll for touch devices for the navbar
      });
  };

  const raceTypeObject = {
    player: "spring-race",
    elytra: "elytra-race",
    horse: "häst-race",
    boat: "båt",
    pig: "gris"
  };

  useEffect(() => {
    fetchRaces((response, error) => {
      if (response) setRaces(response);
      else console.log("Error", error);
    });
  }, []);

  const renderRace = race => {
    return (
      <li key={race.name} className="capitalize race-list-item">
        {`${race.name} (${raceTypeObject[race.type]})`}
      </li>
    );
  };

  return (
    <div>
      <Jumbotron
        className="jumbotron-bg-racing"
        title="Racing (kommer snart)"
        text="Racing är ett egetutvecklat plugin som vi använder för events på servern, pluginet är skapat för att du ska kunna utmana dig och andra spelare på servern"
      />
      <div className="racing-content">
        <h2>Hur fungerar det?</h2>
        När ett race-event startar så är det bara att klicka på texten eller
        skriva /rc join [race-namn]. När racet har startat så är ditt mål att ta
        dig från checkpoint(röda cirklar som du ser längs bannan) till
        checkpoint tills du kommer i mål. <br />
        <br />
        Vi har fem olika typer av race, båt, elytra, gris, häst och spring. I de
        races som du rider på något så kommer du automatiskt att sitta på djuret
        eller båten vid racestart och du kommer inte att kunna lämna racet
        förrens racet är slut. I elytra race så spawnar du självklart med en
        elytra, om du vill starta om från början under racets gång så är det
        bara att vänsterklicka eller högerklicka på din mus så teleporteras du
        tillbaka till din startpunkt.
        <h2>Våra race</h2>
        {hasFetched && races ? (
          <div className="group-list">
            <ul className="race-list">{races.map(race => renderRace(race))}</ul>
          </div>
        ) : (
          <div>Något gick fel..</div>
        )}
      </div>
    </div>
  );
}
