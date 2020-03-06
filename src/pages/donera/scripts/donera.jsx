import React from "react";
import Button from "../../../components/button/scripts/button";
import InfoBoxContainer from "../../../components/info-box/scripts/inf-box-container";
import InfoBoxHeader from "../../../components/info-box/scripts/info-box-header";
import InfoBoxInfo from "../../../components/info-box/scripts/info-box-info";
import Jumbotron from "../../../components/jumbotron/scripts/jumbotron.jsx";
import "../styles/donera.css";

export default function Donera() {
  const vipPlusContent = () => (
    <div className="donate-content">
      <InfoBoxContainer>
        <InfoBoxHeader className="text-center info-box-header-purple">
          <div className="donate-info-text">VIP+ förmåner</div>
        </InfoBoxHeader>
        <InfoBoxInfo>
          <div className="group-list">
            <ul className="fc-light-grey">
              <li className="padding color-gold">
                /ci - Rensar ditt inventory
              </li>
              <li className="padding color-gold">
                /hat - Ha ett block/item som hatt
              </li>
              <li className="padding color-gold">
                /tpa /tpahere - Teleportera dig till en vän eller den till dig
              </li>
              <li className="padding color-gold">
                /top - Tar dig till den högsta platsen ovanför dig
              </li>
              <li className="padding color-gold">
                /tpa /tpahere - Teleportera dig till en vän eller den till dig
              </li>
              <li className="padding color-gold">/trail - Kosmetisk effekt.</li>
              <li className="padding color-purple">
                /feed - fyll på din hunger (40 min cooldown)
              </li>
              <li className="padding color-purple">
                /enderchest - öppna en enderchest utan att ha en i ditt
                inventory
              </li>
              <li className="padding color-purple">
                /getpos - få koordinater till en spelare som är inne på servern
              </li>
              <li className="padding color-purple">
                /near - lista spelare i närheten
              </li>
              <li className="padding color-purple">
                /seen - se hur länge sedan en spelare var inne på servern
              </li>
              <li className="padding">
                Du får också 4 extra hem med /sethome, ett lila namn i vår
                discord-server och i chatten och du kan sälja 8 saker istället
                för 2 i /ah.
              </li>
            </ul>
          </div>
        </InfoBoxInfo>
      </InfoBoxContainer>
    </div>
  );

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
      <div className="donations-list">
        <div className="donate-content">
          <InfoBoxContainer>
            <InfoBoxHeader className="text-center info-box-header-gold">
              <div className="donate-info-text">VIP förmåner</div>
            </InfoBoxHeader>
            <InfoBoxInfo>
              <div className="group-list">
                <ul className="fc-light-grey">
                  <li className="padding">/ci - Rensar ditt inventory</li>
                  <li className="padding">/hat - Ha ett block/item som hatt</li>
                  <li className="padding">
                    /top - Tar dig till den högsta platsen ovanför dig
                  </li>
                  <li className="padding">
                    /tpa /tpahere - Teleportera dig till en vän eller den till
                    dig
                  </li>
                  <li className="padding">/trail - Kosmetisk effekt.</li>
                  <li className="padding">
                    /playerskull [namn]- ändra skin på spelarhuvuden
                  </li>
                  <li className="padding">
                    Modifiera armorstands med flint för att skapa dekorationer
                    och statyer!
                  </li>
                  <li className="padding">
                    Du får också 2 extra hem med /sethome, du kan sitta på
                    mattor, slabs och stairs med högherklick, du får ett guldigt
                    namn i chatten och vår discord-server och du kan sälja 5
                    saker istället för 2 i /ah.
                  </li>
                </ul>
              </div>
            </InfoBoxInfo>
          </InfoBoxContainer>
        </div>
      </div>
    </div>
  );
}
