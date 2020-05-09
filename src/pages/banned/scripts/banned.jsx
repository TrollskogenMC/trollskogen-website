import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Jumbotron from "../../../components/jumbotron/scripts/jumbotron.jsx";
import "../styles/banned.css";
import Ripple from "../../../components/loading/scripts/ripple.jsx";
import DownIcon from "../../../icons/down-icon.jsx";
import { format } from "date-fns";
import { sv } from "date-fns/locale";

export default function Banned() {
  const [bannedList, setBannedList] = useState([]);
  const [hasFetched, setHasFetched] = useState(false);

  const renderBanHeader = ban => (
    <div className="ban-item-header-container">
      <div className="ban-list-field ban-list-banned-name">
        {ban.banned_user_name}
      </div>
      <div className="ban-list-field ban-list-expire">
        {ban.expiry_date
          ? format(Date.parse(ban.expiry_date), "PPPPpp", {
              locale: sv
            })
          : "permanent"}
      </div>
      <div className="ban-list-field ban-list-more">
        <span className="float-right margin-right-2 right-arrow">
          <DownIcon height="25" />
        </span>
      </div>
    </div>
  );

  const renderBans = ban => {
    return (
      <Link
        className="capitalize ban-list-item"
        key={ban.id}
        to={`/bannad/${ban.user_id}`}
      >
        <li>{renderBanHeader(ban)}</li>
      </Link>
    );
  };

  const fetchBannList = callback => {
    axios
      .get("https://api.trollskogen.nu/bans")
      .then(response => {
        setHasFetched(true);
        callback(response.data.bans);
      })
      .catch(err => {
        setHasFetched(true);
        callback(undefined, err);
      });
  };

  useEffect(() => {
    fetchBannList((response, error) => {
      if (response) {
        const sortedResponse = response.sort((user, userTwo) => {
          if (user.issued_date > userTwo.issued_date) return -1;
          if (user.issued_date < userTwo.issued_date) return 1;
          return 0;
        });

        const filteredRes = sortedResponse.reduce((ban, current) => {
          const x = ban.find(item => current.user_id === item.user_id);
          if (!x) {
            return ban.concat([current]);
          } else {
            return ban;
          }
        }, []);
        setBannedList(filteredRes);
      } else console.log("Error", error);
    });
  }, []);

  return (
    <div>
      <Jumbotron
        className="jumbotron-bg-ban"
        title="Bannad?"
        text="På denna server har vi regler som man måste följa, precis som på andra servrar. Om man inte kan göra det så får man inte spela hos oss."
      />
      <div className="banned-content">
        <h2>Hur fungerar det?</h2>
        Vi har kraftfulla verktyg som loggar alla typer av aktivitet på servern,
        vi har också verktyg för att återställa all förstörelse med endast ett
        kommando.
        <br />
        <br />
        Vi tar inte emot några överklagningar av bannlysningar, men om du känner
        att du har blivit oschysst bedömd så kan du kontakta en admin på discord
        eller in-game.
        <br />
        <br />
        <h2>Utfärdade bannlysningar</h2>
        {hasFetched && bannedList && bannedList.length > 0 ? (
          <div className="group-list">
            <ul className="ban-list">
              <li className="capitalize ban-item-header-container ban-list-item-header">
                <div className="ban-list-field ban-list-banned-name f-bold">
                  Användare
                </div>
                <div className="ban-list-field ban-list-expire f-bold">
                  Utgår
                </div>
              </li>
              {bannedList.map(ban => renderBans(ban))}
            </ul>
          </div>
        ) : !hasFetched ? (
          <div>
            <Ripple />
          </div>
        ) : (
          <div className="fc-light-grey">
            Tekniskt fel, vi kunde inte ladda in bans just nu..
          </div>
        )}
      </div>
    </div>
  );
}
