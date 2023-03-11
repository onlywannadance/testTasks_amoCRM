import React from "react";
import { Link } from "react-router-dom";
import Logo from "../Logo/Logo";
import Contacts from "../Contacts/Contacts";

const menuLinks = [
  { tittle: "Услуги", link: "/services" },
  { tittle: "Виджеты", link: "/widgets" },
  { tittle: "Интеграции", link: "/integrations" },
  { tittle: "Кейсы", link: "/cases" },
  { tittle: "Сертификаты", link: "/certificates" },
];

const Menu = (props) => {
  return (
    <nav className="menu">
      <Logo />
      <ul className="menu__list">
        {menuLinks.map(({ tittle, link }, index) => (
          <li className="menu__item" key={index}>
            <Link to={link} className="menu__link">
              {tittle}
            </Link>
          </li>
        ))}
      </ul>
      <Contacts modification="top" />
    </nav>
  );
}

export default Menu;