import React, { useState } from 'react';
import s from './index.module.css';
import { host } from '../../host/host';
import img from './image.png';

export default function DiscountFirstOrder() {
  const [errors, setErrors] = useState({});
  
  const add_discount_user = (event) => {
    event.preventDefault();
    const { name, phone_number, mail } = event.target;
    const nameValue = name.value.trim();
    const phoneNumberValue = phone_number.value.trim();
    const mailValue = mail.value.trim();
    
    const newErrors = {};
    if (nameValue === '') {
      newErrors.name = 'Please enter your name';
    }
    if (phoneNumberValue === '') {
      newErrors.phone_number = 'Please enter your phone number';
    }
    if (mailValue === '' || !isValidEmail(mailValue)) {
      newErrors.mail = 'Please enter a valid email address';
    }
    
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
    } else {
      const discount_user = {
        id: Date.now(),
        name: nameValue,
        number: phoneNumberValue,
        mail: mailValue
      };

      post_discount(discount_user);
      event.target.reset();
      setErrors({});
    }
  };
  
  const post_discount = (discount_user) => {
    fetch(`${host}/sale/send`, {
      method: 'POST',
      body: JSON.stringify(discount_user),
      headers: {'Content-Type': 'application/json;charset=utf-8'}
    })
    .then(res => res.json())
    .then(json => console.log(json));
  };
  
  const isValidEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  return (
    <section className={s.discount_block}>
      <h2>5% off on the first order</h2>
      <div>
        <img src={img} alt="" />
        <form onSubmit={add_discount_user}>
          <div>
            <input type='text' placeholder='Name' name='name'/>
            {errors.name && <p className={s.error_message}>{errors.name}</p>}
          </div>
          <div>
            <input pattern='[+0-9]+' type='text' placeholder='Phone number' name='phone_number'/>
            {errors.phone_number && <p className={s.error_message}>{errors.phone_number}</p>}
          </div>
          <div>
            <input type='text' placeholder='Email' name='mail'/>
            {errors.mail && <p className={s.error_message}>{errors.mail}</p>}
            </div>
            <button>Get a discount</button>
        </form>
      </div>
    </section>
  );
}