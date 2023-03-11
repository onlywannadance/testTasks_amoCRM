import React from "react";
import { Link } from "react-router-dom";
import Contacts from "../Contacts/Contacts";

const aboutCompany = {
  tittle: "О компании",
  titlesLinks: ["Партнёрская программа", "Вакансии"],
};

const menuLinks = {
  tittle: "Меню",
  titlesLinks: [
    "Расчёт стоимости",
    "Благодарственность клиентов",
    "Услуги",
    "Кейсы",
    "Виджеты",
    "Сертификаты",
    "Интеграции",
    "Блог на Youtube",
    "Наши клиенты",
    "Вопрос / Ответ",
  ],
};

const Footer = (props) => {
  return (
    <footer className="footer">
      <nav className="footer__nav">
        <h5 className="footer__title">{aboutCompany.tittle}</h5>
        <ul className="footer__list">
          {aboutCompany.titlesLinks.map((tittle, index) => (
            <li className="footer__item" key={index}>
              <Link to="/" className="footer__link">
                {tittle}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <nav className="footer__nav">
        <h5 className="footer__title">{menuLinks.tittle}</h5>
        <ul className="footer__list">
          {menuLinks.titlesLinks.map((tittle, index) => (
            <li className="footer__item" key={index}>
              <Link to="/" className="footer__link">
                {tittle}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      <div className="footer__contacts">
        <h5 className="footer__title">Контакты</h5>
        <Contacts modification="bottom" />
        <p className="footer__copyright">
          &#169;WELBEX 2022. Все права защищены.
        </p>
        <p className="footer__copyright-link">Политика конфиденциальности</p>
      </div>
    </footer>
  );
}

export default Footer;