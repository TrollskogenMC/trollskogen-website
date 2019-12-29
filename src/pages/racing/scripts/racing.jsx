import React, { useState, useEffect } from "react";
import axios from "axios";
import Jumbotron from "../../../components/jumbotron/scripts/jumbotron.jsx";
import Ripple from "../../../components/loading/scripts/ripple.jsx";
import "../styles/racing.css";

export default function Racing() {
  const [races, setRaces] = useState(undefined);
  const [hasFetched, setHasFetched] = useState(false);
  const fetchRaces = callback => {
    axios
      .get("https://api.trollskogen.nu/races")
      .then(response => {
        setHasFetched(true);
        callback(response.data.races);
      })
      .catch(err => {
        setHasFetched(true);
        callback(undefined, err);
      });
  };

  const removeDisabled = races => {
    return races.filter(race => race.is_enabled === true);
  };

  useEffect(() => {
    fetchRaces((response, error) => {
      if (response) setRaces(removeDisabled(response));
      else console.log("Error", error);
    });
  }, []);

  const renderRace = race => {
    return (
      <li key={race.name} className="capitalize race-list-item">
        <span className={`race-icon race-icon-${race.type}`} />
        <span className="race-text">{`${race.name}`}</span>
      </li>
    );
  };

  return (
    <div>
      <Jumbotron
        className="jumbotron-bg-racing"
        title="Racing"
        text="Racing är ett egetutvecklat plugin som vi använder för events på servern. Pluginet är skapat för att du ska kunna utmana dig och andra spelare på servern"
      />
      <div className="racing-content">
        <h2>Hur fungerar det?</h2>
        När ett race-event startar så är det bara att klicka på texten,
        högerklicka på en raceskylt i spawn eller skriva /rc join [race-namn].
        När racet har startat så är ditt mål att ta dig från checkpoint(röda
        cirklar som du ser längs bannan) till checkpoint tills du kommer i mål.{" "}
        <br />
        <br />
        Vi har fem olika typer av race, båt, elytra, gris, häst och spring.
        Självklart spawnar du med det du behöver när ett race påbörjas.
        <br />
        <br />
        Med races kommer också leaderboards som du kan tävla mot dig själv eller
        andra med. Använd kommandot /rc top [racenamn].
        {hasFetched && races && races.length > 0 ? (
          <React.Fragment>
            <h2>Våra race</h2>
            <div className="group-list">
              <ul className="race-list">
                {races.map(race => renderRace(race))}
              </ul>
            </div>
          </React.Fragment>
        ) : !hasFetched ? (
          <div>
            <Ripple />
          </div>
        ) : null}
      </div>
    </div>
  );
}
