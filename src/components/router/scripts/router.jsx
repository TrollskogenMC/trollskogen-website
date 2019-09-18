import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
import HomePage from "../../../pages/home/scripts/home.jsx";
import Rules from "../../../pages/rules-and-terms/scripts/rules.jsx";
import Navbar from "../../../components/navigation/scripts/navbar";
import NavButton from "../../../components/navigation/scripts/nav-button";
import Donera from "../../../pages/donera/scripts/donera";
import Help from "../../../pages/help/scripts/help";
import Racing from "../../../pages/racing/scripts/racing";
import Banned from "../../../pages/banned/scripts/banned";
export default function Router() {
  const [selectedNav, setSelectedNav] = useState(undefined);

  const notFound = () => {
    return <div>Den här sidan verkar inte finnas.</div>;
  };

  const handleItemClick = name => {
    setSelectedNav(name);
  };

  useEffect(() => {
    setSelectedNav(window.location.pathname);
  }, []);

  const getLinks = () => {
    return [
      {
        content: "Regler",
        type: "button",
        linkTo: "/regler",
        isActive: selectedNav === "/regler"
      },
      {
        content: "Donera",
        type: "button",
        linkTo: "/donera",
        isActive: selectedNav === "/donera"
      },
      {
        content: "Hjälp",
        type: "button",
        linkTo: "/hjalp",
        isActive: selectedNav === "/hjalp"
      },
      {
        content: "Racing",
        type: "button",
        linkTo: "/racing",
        isActive: selectedNav === "/racing"
      },
      {
        content: "Bannad?",
        type: "button",
        linkTo: "/bannad",
        isActive: selectedNav === "/bannad"
      }
    ];
  };
  return (
    <div className="App">
      <BrowserRouter>
        <div>
          <Navbar>
            <Link
              onClick={() => {
                handleItemClick("/");
              }}
              to={"/"}
              key={"/"}
            >
              <NavButton logo={true}>Trollskogen</NavButton>
            </Link>
            <div className="navbar-scorllable-section">
              {getLinks().map((link, index) => (
                <Link
                  onClick={() => {
                    handleItemClick(link.linkTo);
                  }}
                  to={link.linkTo}
                  key={link.linkTo}
                >
                  <NavButton
                    isActive={link.isActive}
                    logo={link.type === "logo"}
                  >
                    {link.content}
                  </NavButton>
                </Link>
              ))}
            </div>
          </Navbar>
          <div
            className="content-area"
            style={{
              height: "100%"
            }}
          >
            <Switch>
              <Route path="/" exact component={HomePage} />
              <Route path="/regler" exact component={Rules} />
              <Route path="/donera" exact component={Donera} />
              <Route path="/hjalp" exact component={Help} />
              <Route path="/racing" exact component={Racing} />
              <Route path="/bannad" exact component={Banned} />
              <Route component={notFound} />
            </Switch>
          </div>
        </div>
      </BrowserRouter>
    </div>
  );
}
