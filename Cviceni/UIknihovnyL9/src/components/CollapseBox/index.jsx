const c = console.log.bind(document);

import { useState } from "react";

import "./style.scss";

const CollapseBox = ({ children, title }) => {
  const [showChildren, setShowChildren] = useState(false);

  const displayInfo = () => {
    setShowChildren(!showChildren);
  };

  return (
    <div className="detail">
      <div id="the-detail">
        <h3>{title}</h3>
        <div onClick={displayInfo}>&rsaquo;</div>
      </div>

      {showChildren ? children : null}
    </div>
  );
};

export default CollapseBox;
