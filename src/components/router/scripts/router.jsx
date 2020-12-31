import React, { useState, useEffect, Suspense, lazy } from "react";
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
import Ripple from "../../../components/loading/scripts/ripple.jsx";
import logo from "../../../components/router/images/logo.png";
import Navbar from "../../../components/navigation/scripts/navbar";
import NavButton from "../../../components/navigation/scripts/nav-button";

const HomePage = lazy(() => import("../../../pages/home/scripts/home.jsx"));
const Rules = lazy(() =>
  import("../../../pages/rules-and-terms/scripts/rules.jsx")
);
const Donera = lazy(() => import("../../../pages/donera/scripts/donera"));
const Help = lazy(() => import("../../../pages/help/scripts/help"));
const Racing = lazy(() => import("../../../pages/racing/scripts/racing"));
const BannedUserWiz = lazy(() =>
  import("../../../pages/banned/scripts/banned-user-wiz.jsx")
);
const NotFound = lazy(() =>
  import("../../../pages/not-found/scripts/not-found.jsx")
);

export default function Router() {
  const [selectedNav, setSelectedNav] = useState(undefined);

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
        content: "Stöd oss",
        type: "button",
        linkTo: "/stod-oss",
        isActive: selectedNav === "/stod-oss"
      },
      {
        content: "Discord",
        type: "href",
        href: "https://discord.trollskogen.nu",
        isActive: false
      },
      {
        content: "Karta",
        type: "href",
        href: "https://map.trollskogen.nu",
        isActive: false
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
              <NavButton logo={true}>
                <img
                  className="logo"
                  src={logo}
                  width="auto"
                  height="45px"
                  alt="hornta"
                />
              </NavButton>
            </Link>
            <div className="navbar-scorllable-section">
              {getLinks().map((link, index) =>
                link.type === "href" ? (
                  <a key={link.href} href={link.href}>
                    <NavButton className={`nav-button-${index}`}>
                      {link.content}
                    </NavButton>
                  </a>
                ) : (
                  <Link
                    onClick={() => {
                      handleItemClick(link.linkTo);
                    }}
                    to={link.linkTo}
                    key={link.linkTo}
                  >
                    <NavButton
                      className={`nav-button-${index}`}
                      isActive={link.isActive}
                      logo={link.type === "logo"}
                    >
                      {link.content}
                    </NavButton>
                  </Link>
                )
              )}
            </div>
          </Navbar>
          <div
            className="content-area"
            style={{
              height: "100%"
            }}
          >
            <Suspense fallback={<Ripple />}>
              <Switch>
                <Route path="/" exact component={HomePage} />
                <Route path="/regler" exact component={Rules} />
                <Route path="/stod-oss" exact component={Donera} />
                <Route path="/hjalp" exact component={Help} />
                <Route path="/racing" exact component={Racing} />
                <Route path="/bannad" component={BannedUserWiz} />
                <Route component={NotFound} />
              </Switch>
            </Suspense>
          </div>
        </div>
      </BrowserRouter>
    </div>
  );
}
