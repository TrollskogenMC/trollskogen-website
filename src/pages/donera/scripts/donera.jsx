import React from "react";
import Button from "../../../components/button/scripts/button";
import InfoBoxContainer from "../../../components/info-box/scripts/inf-box-container";
import InfoBoxHeader from "../../../components/info-box/scripts/info-box-header";
import InfoBoxInfo from "../../../components/info-box/scripts/info-box-info";
import Jumbotron from "../../../components/jumbotron/scripts/jumbotron.jsx";

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
            <Button href="https://trollskogen.tebex.io">Donera här</Button>
          </span>
        }
      />
      <div className="donate-content">
        <InfoBoxContainer>
          <InfoBoxHeader className="text-center">
            <div className="donate-info-text">Förmåner</div>
          </InfoBoxHeader>
          <InfoBoxInfo>
            <div className="group-list">
              <ul className="fc-light-grey">
                <li className="padding">
                  /top - tar dig till den högsta platsen ovanför dig
                </li>
                <li className="padding">
                  /effects - få en animation som roterar runt ditt huvud
                </li>
                <li className="padding">
                  /tpa /tpahere - teleportera dig till en vän eller den till dig
                </li>
                <li className="padding">/sethome(2 extra)</li>
                <li className="padding">/ci - rensar ditt inventory</li>
                <li className="padding">
                  Du kan använda silk touch för att hugga ner spawners
                </li>
                <li className="padding">
                  Du får ett guldigt namn i vår discord server
                </li>
              </ul>
            </div>
          </InfoBoxInfo>
        </InfoBoxContainer>
      </div>
    </div>
  );
}
