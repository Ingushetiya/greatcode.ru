import React from 'react';
import styles from './cardServices.module.scss';

const CardServices = ({ name, description, price, features, id, onSelectService, openModal,  ...props }) => {

return(
  <div class={styles.card_container}>
  <div class={styles.card}>
    <div class={styles.card_front}>
      <p>{name}</p>
      <p>{description}</p>
    </div>
    <div class={styles.card_back}>
      <p>{name}</p>
      <p>{price}</p>
      <ul>
        {
          features?.map((item) => <li key={item}>{item}</li>)
        }
      </ul>
        <button onClick={openModal}>Заказать</button>
    </div>
  </div>
</div>
)
};

export default CardServices;
