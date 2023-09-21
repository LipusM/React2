const c = console.log.bind(document);

import React from "react"
import { NavLink } from "react-router-dom";

const Header = ({title, description, showDescription}) => {


  return (
    <header>
      <h1>{title}</h1>
      <p>
        {showDescription && <p>{description}</p>}
      </p>

      <nav>
        <NavLink to="/">Seznam dni</NavLink>
        <NavLink to="planety">Planety</NavLink>
        <NavLink to="/pocitadlo">Počítadlo</NavLink>
      </nav>
    </header>
  );

};

export default Header;
