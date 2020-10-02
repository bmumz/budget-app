import React from "react";
import Logo from "./logo";

const Header = (props) => {
  return (
    <div className="header">
      <div className="container header__logo">
        <Logo />
        <div className="header__titles">
          <h1 className="header__title">{props.title}</h1>
          {props.subtitle && (
            <h2 className="header__subtitle">{props.subtitle}</h2>
          )}
        </div>
      </div>
    </div>
  );
};

Header.defaultProps = {
  title: "Indecision App",
};

export default Header;
