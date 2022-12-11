import React from "react";
import { Link } from "react-router-dom";
export default function MainHeader() {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <Link to="/welcome">Welcome</Link>
          </li>
          <li>
            <Link to="/product">Poducts</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
