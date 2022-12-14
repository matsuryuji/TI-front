import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes as Switch,
} from "react-router-dom";
import Home from "../pages/Home/Home";
import Feed from "../pages/Feed/Feed";

export default function Routes() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/feed" element={<Feed />} />
      </Switch>
    </Router>
  );
}
