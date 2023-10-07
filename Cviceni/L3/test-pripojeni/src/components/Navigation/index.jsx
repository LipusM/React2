const c = console.log.bind(document);

import "./style.scss";

import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <header>
      <nav className="container">
        <NavLink to="/">Domů</NavLink>
        <NavLink to="/test">Test připojení</NavLink>
      </nav>
    </header>
  )
}

export default Navigation;
