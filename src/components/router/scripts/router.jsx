import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
import HomePage from "../../../pages/home/scripts/home.jsx";
import Rules from "../../../pages/rules-and-terms/scripts/rules.jsx";
import Navbar from "../../../components/navigation/scripts/navbar";
import NavButton from "../../../components/navigation/scripts/nav-button";
import Donera from "../../../pages/donera/scripts/donera";
import Help from "../../../pages/help/scripts/help";
export default function Router() {
  const [selectedNav, setSelectedNav] = useState(0);

  const notFound = () => {
    return <div>Den här sidan verkar inte finnas.</div>;
  };

  const handleItemClick = name => {
    setSelectedNav(name);
  };

  useEffect(() => {
    setSelectedNav(window.location.pathname);
  });

  const getLinks = () => {
    return [
      {
        content: "Trollskogen",
        type: "logo",
        linkTo: "/"
      },
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
      }
    ];
  };
  return (
    <div className="App">
      <BrowserRouter>
        <div>
          <Navbar>
            {getLinks().map((link, index) => (
              <Link
                onClick={() => {
                  handleItemClick(link.linkTo);
                }}
                to={link.linkTo}
                key={index}
              >
                <NavButton isActive={link.isActive} logo={link.type === "logo"}>
                  {link.content}
                </NavButton>
              </Link>
            ))}
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
              <Route component={notFound} />
            </Switch>
          </div>
        </div>
      </BrowserRouter>
    </div>
  );
}
