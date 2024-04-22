import React from 'react';

import styles from './footer.module.scss';

import iconEmail from '../../assets/img/email5.svg';
import iconLocation from '../../assets/img/location-pin-alt-1-svgrepo-com.svg';
import iconInstagram from '../../assets/img/instagram-svgrepo-com.svg';
import iconWgatsapp from '../../assets/img/whatsapp-svgrepo-com.svg';
import iconTelegram from '../../assets/img/telegram-svgrepo-com.svg';
const Footer = () => {
  return (
    <footer>
      <div className={styles.social_follow}>
        <div className={styles.number_footer}>
          <p>+7 988 823 56 58</p>
          <p>По всем вопросам </p>
        </div>
        <div className={styles.email_adress}>
          <div className={styles.email}>
            <img src={iconEmail} alt="email_icon" />
            <p>greatcode.ru@mail.ru</p>
          </div>
          <div className={styles.adress}>
            <img src={iconLocation} alt="adress_icon" />
            <p>г.Сунжа ТД "Сунжа", ул. Осканова 35а, напротив сбербанка</p>
          </div>
        </div>
        <div className={styles.social_icons}>
          <a href="https://www.instagram.com/greatcode.ru/" target="_blank" rel="noreferrer">
            <img width="32" src={iconInstagram} alt="instaicon" />
          </a>
          <a href="https://wa.me/89888235658?text=%D0%9A%D1%83%D1%80%D1%81%20%D0%B2%D0%B5%D0%B1-%D0%BF%D1%80%D0%BE%D0%B3%D1%80%D0%B0%D0%BC%D0%BC%D0%B8%D1%80%D0%BE%D0%B2%D0%B0%D0%BD%D0%B8%D1%8F%20Greatcode">
            <img width="32" src={iconWgatsapp} alt="whatsappicon" />
          </a>
          <a href="https://t.me/+7_vpsLErPpZjNzNi">
            <img width="32" src={iconTelegram} alt="telegramicon" />
          </a>
        </div>
      </div>
      <p>&copy; 2024 Веб-программирование. Все права защищены.</p>
    </footer>
  );
};

export default Footer;
