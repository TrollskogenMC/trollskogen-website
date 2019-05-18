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
    return <div>Den här sidan verkar inte finnas.</div>;
  }

  handleItemClick(name) {
    this.setState({ selectedNav: name });
  }

  componentDidMount() {
    this.setState({
      selectedNav: window.location.pathname
    });
  }

  getLinks() {
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
        isActive: this.state.selectedNav === "/regler"
      },
      {
        content: "Donera",
        type: "button",
        linkTo: "/donera",
        isActive: this.state.selectedNav === "/donera"
      }
    ];
  }

  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <div>
            <Navbar>
              {this.getLinks().map((link, index) => (
                <Link
                  onClick={() => {
                    this.handleItemClick(link.linkTo);
                  }}
                  to={link.linkTo}
                  key={index}
                >
                  <NavButton
                    isActive={link.isActive}
                    logo={link.type === "logo"}
                  >
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
                <Route component={this.notFound} />
              </Switch>
            </div>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}
