import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBrain, faFastForward } from "@fortawesome/free-solid-svg-icons";

const Logo = () => {
  return (
    <div>
      <div className="container fa__container">
        <div className="fa__brain">
          <FontAwesomeIcon icon={faBrain} size="lg" />
        </div>
        <div className="fa__ff">
          <FontAwesomeIcon icon={faFastForward} size="lg" />
        </div>
      </div>
    </div>
  );
};

export default Logo;
