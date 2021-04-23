import React, { useState, useEffect } from "react";
import Jumbotron from "../../../components/jumbotron/scripts/jumbotron.jsx";
import "../styles/quests.css";
import Ripple from "../../../components/loading/scripts/ripple.jsx";
//import DownIcon from "../../../icons/down-icon.jsx";
//import { format } from "date-fns";
//import { sv } from "date-fns/locale";
import axios from "axios";

export default function Quests() {
  const [questList, setQuestListtBannedList] = useState([]);
  const [hasFetched, setHasFetched] = useState(false);

  const fetchQuests = callback => {
    axios
      .get("https://api.trollskogen.hornta.se/ongoingquests/top")
      .then(response => {
        setHasFetched(true);
        callback(response.data.ongoingQuests);
      })
      .catch(err => {
        setHasFetched(true);
        callback(undefined, err);
      });
  };

  const renderUser = ({ user_name, total_quests }, placement) => {
    return (
      <div className="toplist-user" key={user_name}>
        <div className={`toplist-placement toplist-placement-${placement}`}>
          <div className="toplist-placement-number">{placement}</div>
          {placement < 4 && (
            <img
              src={`https://minotar.net/avatar/${user_name}/50.png`}
              width="30px"
              height="30px"
              alt={user_name}
            />
          )}
        </div>
        <div className="toplist-name">{user_name}</div>
        <div className="toplist-total">{total_quests}</div>
      </div>
    );
  };

  const compareBanlist = (a, b) => {
    if (a.total_quests > b.total_quests) {
      return -1;
    }
    if (a.total_quests < b.total_quests) {
      return 1;
    }
    return 0;
  };

  useEffect(() => {
    fetchQuests((response, error) => {
      if (response) {
        setQuestListtBannedList(response.sort(compareBanlist));
      } else {
        console.log("error while fetching quests", error);
      }
    });
  }, []);

  return (
    <div>
      <Jumbotron
        className="jumbotron-bg-quests"
        title="Quests (BETA)"
        text="Vårt mål är att man alltid ska ha något nytt att göra och något att kämpa mot, därför lanserar vi nu quests."
      />
      <div className="banned-content">
        <br />
        <br />
        <h2>Hur fungerar det?</h2>
        Varje dag kommer du att automatiskt tilldelas 2 dagliga quester som du
        kan utföra.
        <br />
        <br />
        Varje vecka kommer du också att tilldelas 1 veckoquest
        <br />
        <br />
        Observera att quests är något helt nytt och kommer att fortsätta byggas
        på i framtiden, vi har lite idéer för hur man kan bygga vidare på
        pluginet om intresset för pluginet är tillräckligt stort.
        <br />
        <br />
        <h2>Topplistan</h2>
        {hasFetched && questList && questList.length > 0 ? (
          <div className="quest-top">
            <div className="toplist-user">
              <div className={`toplist-placement`}>Placering</div>
              <div className="toplist-name">Spelare</div>
              <div className="toplist-total">Avklarade quests</div>
            </div>
            {questList.map((user, key) => renderUser(user, key + 1))}
          </div>
        ) : !hasFetched ? (
          <div>
            <Ripple />
          </div>
        ) : (
          <div className="fc-light-grey">
            Tekniskt fel, vi kunde inte ladda in topplistan just nu..
          </div>
        )}
      </div>
    </div>
  );
}
