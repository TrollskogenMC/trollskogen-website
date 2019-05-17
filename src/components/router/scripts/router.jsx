import React from "react";
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
import HomePage from "../../../pages/home/scripts/home.jsx";
import Rules from "../../../pages/rules-and-terms/scripts/rules.jsx";
import Navbar from "../../../components/navigation/scripts/navbar";
import NavButton from "../../../components/navigation/scripts/nav-button";
import Donera from "../../../pages/donera/scripts/donera";
export default class Routes extends React.Component {
  constructor() {
    super();

    this.state = {};
  }

  notFound() {
    return <div>Nu gick något knas</div>;
  }

  handleItemClick(name) {
    this.setState({ selectedNav: name });
  }

  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <div>
            <Navbar>
              <Link
                onClick={() => {
                  this.handleItemClick("");
                }}
                to="/"
              >
                <NavButton logo>Trollskogen</NavButton>
              </Link>
              <Link
                to="/regler"
                onClick={() => {
                  this.handleItemClick("regler");
                }}
              >
                <NavButton isActive={this.state.selectedNav === "regler"}>
                  Regler
                </NavButton>
              </Link>
              <Link
                to="/donera"
                onClick={() => {
                  this.handleItemClick("donera");
                }}
              >
                <NavButton isActive={this.state.selectedNav === "donera"}>
                  Donera
                </NavButton>
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
                <Route component={this.notFound} />
              </Switch>
            </div>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}
