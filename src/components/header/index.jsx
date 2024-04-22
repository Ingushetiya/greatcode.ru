import React, { useEffect, useState } from 'react';

import logo from '../../assets/img/logo2.png';
import whatsAppIcon from '../../assets/img/icons8-whatsapp.svg';
import telegramIcon from '../../assets/img/icons8-телеграмма-app.svg';

import styles from './header.module.scss';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);

    // Очистка подписки
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  return (
    <header
      style={{
        background: isScrolled ? '#005a87' : 'rgba(0, 0, 0, 0.3)',
      }}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <img src={logo} alt="" />
        </div>
        <nav>
          <ul>
            <li>
              <a href="#about">О нас</a>
            </li>
            <li>
              <a href="#services">Услуги</a>
            </li>
            <li>
              <a href="#portfolio">Портфолио</a>
            </li>
            <li>
              <a href="#contact">Контакты</a>
            </li>
          </ul>
        </nav>
        <div className={styles.contact}>
          <a href="tel:+79888235658">+7 988 823 56 58</a>
          <img href="https://t.me/+7_vpsLErPpZjNzNi" src={telegramIcon} alt="telegram" />
          <img
            href="https://wa.me/89888235658?text=%D0%9A%D1%83%D1%80%D1%81%20%D0%B2%D0%B5%D0%B1-%D0%BF%D1%80%D0%BE%D0%B3%D1%80%D0%B0%D0%BC%D0%BC%D0%B8%D1%80%D0%BE%D0%B2%D0%B0%D0%BD%D0%B8%D1%8F%20Greatcode"
            src={whatsAppIcon}
            alt="whatsapp"
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
