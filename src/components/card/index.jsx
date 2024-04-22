import React from 'react';
import stylers from './card.module.scss';
import htmlIcon from '../../assets/img/icons8-html-144.svg';
import cssIcon from '../../assets/img/icons8-css-144.svg';
import jsIcon from '../../assets/img/icons8-js-144.svg';
import reactIcon from '../../assets/img/react-144.svg';
import gitHubIcon from '../../assets/img/icons8-github.svg';
const Cards = () => {
  return (
    <div className={stylers.container}>
      <div className={stylers.cards}>
        <div className={stylers.card}>
          <div className={stylers.card_block}>
            <a target="_blank" href="https://webref.ru/" rel="noreferrer">
              <img src={htmlIcon} alt="html" />
              <h2>HTML</h2>
              <p>
                Стандартизированный язык гипертекстовой разметки документов для просмотра
                веб-страниц в браузере.
              </p>
            </a>
          </div>
          <div class={stylers.overlay}>Нажмите чтобы открыть...</div>
        </div>
        <div className={stylers.card}>
          <div className={stylers.card_block}>
            <a target="_blank" href="https://webref.ru/" rel="noreferrer">
              <img src={cssIcon} alt="css" />
              <h2>CSS</h2>
              <p>
                это язык иерархических правил (таблиц стилей), используемый для представления
                внешнего вида документа, написанного на HTML или XML (включая различные языки XML,
                такие как SVG и XHTML).
              </p>
            </a>
          </div>
          <div class={stylers.overlay}>Нажмите чтобы открыть...</div>
        </div>
        <div className={stylers.card}>
          <div className={stylers.card_block}>
            <a target="_blank" href="https://learn.javascript.ru/" rel="noreferrer">
              <img src={jsIcon} alt="js" />
              <h2>JavaScript</h2>
              <p>
                это полноценный динамический язык программирования, который применяется к HTML
                документу, и может обеспечить динамическую интерактивность на веб-сайтах.
              </p>
            </a>
          </div>
          <div class={stylers.overlay}>Нажмите чтобы открыть...</div>
        </div>
        <div className={stylers.card}>
          <div className={stylers.card_block}>
            <a target="_blank" href="https://ru.legacy.reactjs.org/tutorial/tutorial.html" rel="noreferrer">
              <img src={reactIcon} alt="css" />
              <h2>REACT</h2>
              <p>
                JavaScript-библиотека с открытым исходным кодом для разработки пользовательских
                интерфейсов.
              </p>
            </a>
          </div>
          <div class={stylers.overlay}>Нажмите чтобы открыть...</div>
        </div>
        <div className={stylers.card}>
          <div className={stylers.card_block}>
            <a target="_blank" href="https://habr.com/ru/companies/otus/articles/674748/" rel="noreferrer">
              <img src={gitHubIcon} alt="css" />
              <h2>Другие</h2>
              <p>
                в курсе помимо перечисленных технологий будут затрагиваться и другие необходимые
                инструменты для разработки веб-приложений.
              </p>
            </a>
          </div>
          <div class={stylers.overlay}>Нажмите чтобы открыть...</div>
        </div>
      </div>
    </div>
  );
};

export default Cards;
