import React from "react";
import { Route, NavLink } from "react-router-dom";
export default function Welcome() {
  return (
    <div>
      <h1>
        <NavLink to="/welcome/new-user">Welcome Page</NavLink>
      </h1>
      <Route path="/welcome/new-user">
        <p>Welcome , new user</p>
      </Route>
    </div>
  );
}
