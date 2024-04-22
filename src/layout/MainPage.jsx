import React, { useState } from 'react';

import Header from '../components/header';
import ContactForm from '../components/form';
import Cards from '../components/card';
import Teacher from '../components/teachers';
import Modal from '../components/modal';
import CardServices from '../components/cardService';
import Footer from '../components/footer';


import titleImage2 from '../assets/img/4380747.jpg';
import { serviceCards } from '../components/api/cardServiceMocki';

import styles from './mainPage.module.scss';

const MainPage = () => {
  const [isModalOpen, setModalOpen] = useState(false);

  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);

  return (
    <>
      <Header />
      {
        isModalOpen && <Modal closeModal={closeModal}><ContactForm closeModal={closeModal} /></Modal>
      }
      <main>
        <div className={styles.container}>
          <section className={styles.about} id="about">
            <div className={styles.title}>
              <h1>Курсы Веб-программирования.</h1>
              <p>
                На нашем курсе веб-разработки вы освоите создание современных веб-сайтов с
                использованием HTML, CSS, JavaScript и React, а также научитесь работать с системой
                контроля версий Git. Этот курс подготовит вас к созданию динамичных и интерактивных
                веб-проектов, обеспечивая востребованные на рынке навыки.
              </p>
              <button onClick={openModal}>ПРОЙТИ КУРС</button>
            </div>
            <div className={styles.title_img}>
              <img src={titleImage2} alt="title" />
            </div>
          </section>
          <section className={styles.intro} id="intro">
            <h2>Веб-программирование</h2>
            <p>Разработка современных веб-сайтов и приложений</p>
          </section>
          <Cards />
          <section className={styles.services} id="services">
            <h2>Создадим вам сайт</h2>
            <h2>Закажите сайт</h2>
            {
              serviceCards.map((item) => {
                return(
                  <CardServices key={item.id} {...item}openModal={openModal} closeModal={closeModal}/>
                )
              } )
            }
          </section>
          <div className={styles.form_tacher}>
            <ContactForm />
            <Teacher />
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default MainPage;
