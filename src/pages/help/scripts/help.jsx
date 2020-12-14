import React from "react";
import InfoBoxContainer from "../../../components/info-box/scripts/inf-box-container";
import InfoBoxHeader from "../../../components/info-box/scripts/info-box-header";
import InfoBoxInfo from "../../../components/info-box/scripts/info-box-info";
import ExpandableContainer from "../../../components/info-box/scripts/expandable-container";
import DownIcon from "../../../icons/down-icon";
import "../styles/help.css";

export default function Help() {
  return (
    <div>
      <div className="help-content">
        <InfoBoxContainer expandable>
          <ExpandableContainer
            headerContent={
              <InfoBoxHeader className="text-center">
                <div className="help-info-text">
                  Skapa en stad
                  <span
                    style={{ width: "25px" }}
                    className="float-right margin-right-2 expandable-rotate"
                  >
                    <DownIcon height="25" />
                  </span>
                </div>
              </InfoBoxHeader>
            }
            bodyContent={
              <InfoBoxInfo>
                Sugen på att skapa en stad med dina vänner på servern, eller
                vill du bara skydda ditt hem? Då kan du skapa en stad. <br />
                <br />
                Vi rekomenderar att gå ihop ett gäng om du ensam inte har
                tillräckligt med pengar, det är också viktigt att ha en stadig
                inkomst eftersom att det kostar minst 10 trollmynt per dag att
                ha en stad.
                <h3>Kommandon:</h3>
                <div className="group-list">
                  <ul className="fc-light-grey">
                    <li className="padding">
                      /towny help - listar hjälp på engelska för pluginet.
                    </li>
                    <li className="padding">
                      /town create [namn] - skapar en ny stad och drar 2500
                      trollmynt från ditt spelarkonto.
                    </li>
                    <li className="padding">
                      /t spawn - teleportera till din stads spawn.
                    </li>
                  </ul>
                </div>
              </InfoBoxInfo>
            }
          />
        </InfoBoxContainer>
        <InfoBoxContainer expandable>
          <ExpandableContainer
            headerContent={
              <InfoBoxHeader className="text-center">
                <div className="help-info-text">
                  Övriga kommandon
                  <span
                    style={{ width: "25px" }}
                    className="float-right margin-right-2 expandable-rotate"
                  >
                    <DownIcon height="25" />
                  </span>
                </div>
              </InfoBoxHeader>
            }
            bodyContent={
              <InfoBoxInfo>
                <div className="group-list">
                  <ul className="fc-light-grey">
                    <li className="padding">
                      /sethome [namn] - skapa ett hem som du kan teleportera dig
                      till. Som vanlig spelare har du ett hem, men du får också
                      ett extra om du verifierar dig på vår discord server.
                    </li>
                    <li className="padding">
                      /home [namn] - teleportera dig till ett av dina hem. (Se
                      Öppna hem för info om hur man öppnar sitt hem för andra
                      spelare)
                    </li>
                    <li className="padding">
                      /cpublic - ger andra spelare tillgång till en låst kista,
                      dörr eller annat.
                    </li>
                    <li className="padding">
                      /cprivate - sätt ett lås på en kista, dörr eller annat.
                    </li>
                    <li className="padding">
                      /cremove - ta bort ett lås på en kista, dörr eller annat.
                    </li>
                    <li className="padding">
                      /credstone off/on - tillåt redstonesignaler på låsta
                      dörrar, hoppers eller annat. annat.
                    </li>
                    <li className="padding">
                      /cmodify [spelarnamn] - tillåt en annan spelare att komma
                      åt kistan.
                    </li>
                    <li className="padding">
                      /ah för att komma åt serverns auctionhouse
                    </li>
                  </ul>
                </div>
              </InfoBoxInfo>
            }
          />
        </InfoBoxContainer>
        <InfoBoxContainer expandable>
          <ExpandableContainer
            headerContent={
              <InfoBoxHeader className="text-center">
                <div className="help-info-text">
                  Öppna ditt hem
                  <span
                    style={{ width: "25px" }}
                    className="float-right margin-right-2 expandable-rotate"
                  >
                    <DownIcon height="25" />
                  </span>
                </div>
              </InfoBoxHeader>
            }
            bodyContent={
              <InfoBoxInfo>
                Nu kan man öppna ett av sina hem så att vem som helst kan komma
                hem till dig. <br />
                Alla kan öppna sina hem så det är inte exklusivt för VIP. Man
                kan bara öppna 1 av sina hem just nu. Bra när man spelar med
                vänner som man vill dela sitt hem med eller om man vill bedriva
                gårdsförsäljning. <br />
                Bannade spelares öppna hem kommer man inte kunna gå till. <br />
                Nya kommandon är:
                <ul className="fc-light-grey">
                  <li className="padding">/openhome [hem] Öppna ditt hem</li>
                  <li className="padding">/closehome [hem] Stäng ditt hem</li>
                  <li className="padding">
                    /phome [spelare] [hem] Gå hem till en spelare. Kommandot
                    autocompletas med spelare som har öppna hem. Du kan se vilka
                    av dina hem är öppna med /homes
                  </li>
                  <li className="padding">
                    /togglehomecmds stänger av kommandon som /sethome, /tpahere
                    och /tpaccept
                  </li>
                </ul>
              </InfoBoxInfo>
            }
          />
        </InfoBoxContainer>
        <InfoBoxContainer expandable>
          <ExpandableContainer
            headerContent={
              <InfoBoxHeader className="text-center">
                <div className="help-info-text">
                  Skydda område
                  <span
                    style={{ width: "25px" }}
                    className="float-right margin-right-2 expandable-rotate"
                  >
                    <DownIcon height="25" />
                  </span>
                </div>
              </InfoBoxHeader>
            }
            bodyContent={
              <InfoBoxInfo>
                För att skydda dina byggen eller redstone-maskiner så
                rekomenderar vi att man skyddar det. Kistor är låsta automatiskt
                och vi rekommenderar inte att ta bort de låsen.
                <br />
                <br />
                För att skydda ett område så räcker det att spela en liten stund
                på servern och skaffa en guldspade.
                <br />
                Med guldspaden kan du därefter högerklicka för att markera 2
                hörn i en tredimensionell kub.
                <br />
                Nu är det klart och dina saker inom området är skyddade!
                <h3>Kommandon:</h3>
                <div className="group-list">
                  <ul className="fc-light-grey">
                    <li className="padding">
                      /trust [namn] - Tillåt en annan spelare bygga i dina
                      "claims".
                    </li>
                    <li className="padding">
                      /untrust [namn] - Tillåt inte längre en annan spelare
                      "claims".
                    </li>
                    <li className="padding">
                      /claimlist - listar dina skyddade områden.
                    </li>
                    <li className="padding">
                      /AbandonClaim - tar bort den claim du står i just nu
                    </li>
                    <li className="padding">
                      /AbandonAllClaims - tar bort all dina skyddade områden
                    </li>
                  </ul>
                </div>
              </InfoBoxInfo>
            }
          />
        </InfoBoxContainer>
      </div>
    </div>
  );
}
