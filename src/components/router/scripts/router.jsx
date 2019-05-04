import React from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import HomePage from "../../../pages/home/scripts/home.jsx";
import Rules from "../../../pages/rules-and-terms/scripts/rules.jsx";
import Navbar from "../../../components/navigation/scripts/navbar";
import NavButton from "../../../components/navigation/scripts/nav-button";
import Donera from "../../../pages/donera/scripts/donera";
export default function Routes() {
  const notFound = () => {
    return <div>Nu gick något knas</div>;
  };

  return (
    <div className="App">
      <Router>
        <Navbar>
          <Link to="/">
            <NavButton logo>Trollskogen</NavButton>
          </Link>
          <Link to="/regler">
            <NavButton>Regler</NavButton>
          </Link>
          <Link to="/donera">
            <NavButton>Donera</NavButton>
          </Link>
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
            <Route component={notFound} />
          </Switch>
        </div>
      </Router>
    </div>
  );
}
