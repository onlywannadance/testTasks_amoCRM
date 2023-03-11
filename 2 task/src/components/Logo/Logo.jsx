import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/img/logo_welbex.svg";

const Logo = (props) => {
  return (
    <div className="logo">
      <Link to="/" className="logo__link">
        <img className="logo__image" alt="Логотип" src={logo} />
      </Link>
      <p className="logo__description">
        крупный интегратор CRM в Росcии и ещё 8 странах
      </p>
    </div>
  );
}

export default Logo;