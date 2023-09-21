const c = console.log.bind(document);

import React from "react"

const Header = ({title, description, showDescription}) => {


  return (
    <header>
      <h1>{title}</h1>
      <p>
        {showDescription && <p>{description}</p>}
      </p>
    </header>
  );

};

export default Header;
