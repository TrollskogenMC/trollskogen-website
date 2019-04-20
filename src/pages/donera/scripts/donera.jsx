import React from "react";
import Button from "../../../components/button/scripts/button";
export default function Donera() {
  return (
    <div>
      <h1>Donationer</h1>
      <p>
        För att vi ska kunna utveckla servern och betala de utkomster som kommer
        med att driva en minecraft server så är vi beroende av donationer. Som
        tack för hjälpen får du som donerar tillgång till cosmetics, 2 extra
        homes och tillgång till teleport-kommando.
      </p>
      <div class="text-center">
        <Button href="https://trollskogen.tebex.io">Donera här</Button>
      </div>
    </div>
  );
}
