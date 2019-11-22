import React, { useState, useEffect } from "react";
import axios from "axios";
import Jumbotron from "../../../components/jumbotron/scripts/jumbotron.jsx";
import "../styles/banned.css";

export default function Banned() {
  const [bannedList, setBannedList] = useState([]);
  const [hasFetched, setHasFetched] = useState(false);
  return (
    <div>
      <Jumbotron
        className="jumbotron-bg-home"
        title="Bannad?"
        text="På denna server har vi regler som man måste följa, precis som på andra servrar. Om man inte kan göra det så har man inget att göra på servern."
      />
      <div className="banned-content">
        <h2>Hur fungerar det?</h2>
        Vi har kraftfulla verktyg som loggar alla typer av aktivitet på servern,
        vi har också verktyg för att återställa all förstörelse med endast ett
        kommando.
        <br />
        <br />
      </div>
    </div>
  );
}
