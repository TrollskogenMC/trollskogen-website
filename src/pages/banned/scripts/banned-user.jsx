import React, { useState, useEffect } from "react";
import "../styles/banned.css";
import axios from "axios";
import Ripple from "../../../components/loading/scripts/ripple";
import { format } from "date-fns";
import { sv } from "date-fns/locale";
import { Link } from "react-router-dom";
import Button from "../../../components/button/scripts/button";

export default function BannedUser({ match }) {
  console.log(match.params.userId);

  const [bannedUser, setBannedUser] = useState({});
  const [hasFetched, setHasFetched] = useState(false);
  const [isErrored, setIsErrored] = useState(false);

  const fetchUser = (userId, callback) => {
    axios
      .get(`https://api.trollskogen.nu/user/${userId}`)
      .then(response => {
        setHasFetched(true);
        callback(response.data.user);
      })
      .catch(err => {
        setHasFetched(true);
        callback(undefined, err);
      });
  };

  useEffect(() => {
    fetchUser(match.params.userId, (res, err) => {
      if (res) setBannedUser(res);
      else {
        setIsErrored(true);
        console.log("Error", err);
      }
    });
  }, []);

  const renderBanData = ban => (
    <div className="ban-container" key={ban.id}>
      <div>Utfärdad av {ban.issued_user_name || "Okänd"}</div>
      {ban.issued_date && (
        <div>
          Utfärdades{" "}
          {format(Date.parse(ban.issued_date), "PPPPpp", {
            locale: sv
          })}
        </div>
      )}
      {ban.expiry_date ? (
        <div>
          Utgår{" "}
          {format(Date.parse(ban.expiry_date), "PPPPpp", {
            locale: sv
          })}
        </div>
      ) : (
        <div>Permanent avstängd</div>
      )}

      <div>Anledning: {ban.reason}</div>
    </div>
  );

  const renderUser = user => (
    <div>
      <div className="banned-user-header">
        <h2 className="grow-1">{user.name}</h2>
        <Link className="back-link float-right" to={`/bannad`}>
          <Button className="btn-green">Tillbaka</Button>
        </Link>
      </div>
      <h3>Bans</h3>
      {user && user.bans && user.bans.length > 0 ? (
        <div className="user-ban-list">
          {user.bans.map(ban => renderBanData(ban))}
        </div>
      ) : (
        "Inga bannlysningar utfärdade på denna spelare"
      )}
    </div>
  );

  return (
    <div>
      {hasFetched && !isErrored ? (
        renderUser(bannedUser)
      ) : isErrored ? (
        <div>
          <Link className="back-link" to={`/bannad`}>
            <Button className="btn-green">Tillbaka</Button>
          </Link>
          <p>Användare kunde inte hittas..</p>
        </div>
      ) : (
        <Ripple />
      )}
    </div>
  );
}
