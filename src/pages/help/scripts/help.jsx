import React from "react";
import InfoBoxContainer from "../../../components/info-box/scripts/inf-box-container";
import InfoBoxHeader from "../../../components/info-box/scripts/info-box-header";
import InfoBoxInfo from "../../../components/info-box/scripts/info-box-info";
import ExpandableContainer from "../../../components/info-box/scripts/expandable-container";
import DownIcon from "../../../icons/down-icon";

export default function Help() {
  return (
    <div>
      <div className="help-content">
        <InfoBoxContainer expandable>
          <ExpandableContainer
            headerContent={
              <InfoBoxHeader className="text-center">
                <div className="donate-info-text">
                  Skapa en shop
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
                Sugen på att tjäna lite pengar genom att skapa en shop? I spawn
                har vi marknadsplatsen där du kan köpa ett stånd för att sälja
                dina dyrbarheter till andra spelare.
                <br />
                <br />
                För att köpa ett stånd så högerklickar du på skylten som finns
                utanför varje tomt stånd. Det kommer att dras 1500 trollmynt
                från ditt spelarkonto. Var uppmärksam på att vi i staff säljer
                vidare shopen om din shop står tom i några veckor, självklart
                får du en del av dina pengar tillbaka.
                <br />
                <br />
                När du har köpt ett stånd så är det dags att sätta upp din
                första chestshop. Genom att sätta ut en kista med en skylt
                ovanför eller på kistan så skapas din shop. Var nogrann med att
                skylten är rätt formatterad enligt följande exempel:
                <br />
                <br />
                [ditt användarnamn]
                <br />
                [antal]
                <br />
                [Item]
                <br />
                [köp: sälj kostnad]
                <br />
                <br />
                philip2096
                <br />
                64
                <br />
                Diamond
                <br />
                B:10 S:20 - där b står för buy och S för sell
                <h3>Kommandon:</h3>
                <div className="group-list">
                  <ul className="fc-light-grey">
                    <li className="padding">
                      /iteminfo - ger information om vad saken som du håller i
                      handen heter och annan info.
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
                <div className="donate-info-text">
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
                vill du bara skydda ditt hem? Då är det bara att skapa en stad.{" "}
                <br />
                <br />
                Vi rekomenderar att gå ihop ett gäng om inte du som spelare har
                lyckats samla ihhop tillräckligt med pengar, det är också
                viktigt att ha en stadig inkomst eftersom att det kostar minst
                10 trollmynt per dag att ha en stad.
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
                <div className="donate-info-text">
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
                      /home [namn] - teleportera dig till ett av dina hem.
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
                <div className="donate-info-text">
                  Verifiera dig på discord
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
                För att få tillåtelse att prata på discord så måste du verifiera
                ditt discord konto via minecraft-servern.
                <br />
                <br />
                Först och främst måste du gå in på discord-servern, länken får
                du alltid när du loggar in på trollskogen eller under kommandot
                /help.
                <br />
                <br />
                När du har hittat till discord-servern så kan du skriva in
                kommandot /verify i trollskogens minecraft-server. Du kommer att
                få en serie bokstäver och siffror i chatten och instruktion hur
                du ska verifiera dig på servern.
                <br />
                <br />
                Leta upp BOT:en "Troll Zeke" i medlemslistan på discor-servern
                och skicka ett privat meddelande till honom med texten: "verify
                [bokstavs- och siffer-kombinationen du fick i
                minecraft-chatten]".
                <br />
                <br />
                Om allt har gått rätt till så ska du nu ha fått ett svar från
                Troll Zeke och du har nu ett grönt namn i discord-servern och du
                ligger under kategorien "medlemmar".
              </InfoBoxInfo>
            }
          />
        </InfoBoxContainer>
      </div>
    </div>
  );
}
