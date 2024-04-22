import React, { useState } from 'react';
import styles from './form.module.scss';
import { sendMessage } from '../api/telegramMessage';

const ContactForm = (props) => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const hundleChange = (event) => {
      setFormData({
        ...formData,
        [event.target.name]: event.target.value
      })
  }
  const handleSubmit = async (event) => {
    event.preventDefault(); 
    if(!formData.name || !formData.email || !formData.message){
      alert('Заполните все поля');
      return
    }
    const message = `Имя: ${formData.name} Email: ${formData.email} Сообщение: ${formData.message}`
    await sendMessage(message)
    setIsSubmitted(true)
    try {
      
    } catch (error) {
        alert('Произошла ошибка при отправке формы. Пожалуйста, повторите позже, или свяжитесь с нами по телефону.');
    }
  };
  if (isSubmitted) {
    return (
      <div className={styles.thankYouMessage}>
        <p>Спасибо за обращение, мы ответим вам в ближайшее время.</p>
        <button onClick={() => {
          setIsSubmitted(false)

        }}>Закрыть</button>
      </div>
    );
  }
  return (
    <section className={styles.contact} id="contact">
      <div className={styles.form_container}>
        <form onSubmit={handleSubmit} className={styles.form}>
          <h2>Связаться с нами</h2>
          <div className={styles.form_group}>
            <label htmlFor="name">Имя</label>
            <input onChange={hundleChange} type="text" id="name" name="name" placeholder="Ваше имя" />
          </div>
          <div className={styles.form_group}>
            <label htmlFor="email">Email</label>
            <input onChange={hundleChange} type="email" id="email" name="email" placeholder="Ваш email" />
          </div>
          <div className={styles.form_group}>
            <label htmlFor="message">Ваше сообщение</label>
            <textarea onChange={hundleChange} id="message" name="message" placeholder="Ваше сообщение"></textarea>
          </div>
          <button className={styles.send_button} type="submit">Отправить</button>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;
