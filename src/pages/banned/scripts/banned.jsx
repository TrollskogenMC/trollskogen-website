import React, { useState, useEffect } from "react";
import axios from "axios";
import Jumbotron from "../../../components/jumbotron/scripts/jumbotron.jsx";
import "../styles/banned.css";
import Ripple from "../../../components/loading/scripts/ripple.jsx";
import DownIcon from "../../../icons/down-icon.jsx";
import ExpandableContainer from "../../../components/info-box/scripts/expandable-container";

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
        <span className="float-right margin-right-2 expandable-icon">
          <DownIcon height="25" />
        </span>
      </div>
    </div>
  );

  const renderBanBody = ban => (
    <div className="ban-item-body">
      <div className="ban-item-body-content">
        <div className="padding-top">Utfärdad av: {ban.issued_user_name}</div>
        <div>Anledning: {ban.ban_reason}</div>
      </div>
    </div>
  );

  const renderBans = ban => {
    return (
      <li key={ban.ban_id} className="capitalize ban-list-item">
        <ExpandableContainer
          headerContent={renderBanHeader(ban)}
          bodyContent={renderBanBody(ban)}
        />
      </li>
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
      if (response) setBannedList(response);
      else console.log("Error", error);
    });
  }, []);

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
