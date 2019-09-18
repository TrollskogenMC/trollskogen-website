import React from "react";
import Jumbotron from "../../../components/jumbotron/scripts/jumbotron.jsx";
import "../styles/banned.css";

export default function Banned() {
  return (
    <div>
      <Jumbotron
        className="jumbotron-bg-home"
        title="Bannad?"
        text="På denna server precis som på andra servrar som man måste följa. Om man inte kan göra det så har man inget att göra på servern."
      />
      <div className="banned-content">
        <h2>Hur fungerar det?</h2>
        Vi har kraftfulla verktyg som loggar alla typer av aktivitet på servern,
        vi har också verktyg för att rollbacka potentiellt grief eller annan
        förstörelse med endast ett kommando.
        <br />
        <br />
        Beroende på allvarsgrad kan du få en varning, temporär bannlysning eller
        parmanent bannlysning. Parmanenta bannlysningar kommer inte att lyftas
        på, men de andra straffen kan du göra en appeal för på
        trollskogenmc@gmail.com.
      </div>
    </div>
  );
}
