import React, { useState, useEffect } from "react";
import "../styles/banned.css";
import { Route, Switch } from "react-router-dom";
import BannedUser from "./banned-user";
import Banned from "./banned";
import NotFound from "../../not-found/scripts/not-found";

export default function BannedUserWiz({ match }) {
  return (
    <Switch>
      <Route path={`${match.path}`} exact component={Banned} />
      <Route path={`${match.path}/:userId`} exact component={BannedUser} />
      <Route component={NotFound} />
    </Switch>
  );
}
