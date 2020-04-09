import React from "react";
import Button from "../../../components/button/scripts/button";
import Jumbotron from "../../../components/jumbotron/scripts/jumbotron.jsx";
import VipTable from "../../../components/vip-table/scripts/vip-table.jsx";
import "../styles/donera.css";

export default function Donera() {
  return (
    <div>
      <Jumbotron
        className="jumbotron-bg-donate"
        title="Donationer"
        text="För att vi ska kunna utveckla servern och betala de utgifter som
            kommer med att driva en minecraftserver så är vi beroende av
            donationer. Som tack för hjälpen får du som donerar tillgång till
            cosmetics, 2 extra homes och några bekväma kommandon."
        linkArea={
          <span>
            <Button href="https://trollskogen.tebex.io" className="btn-gold">
              Donera här
            </Button>
          </span>
        }
      />

      <VipTable />
    </div>
  );
}
