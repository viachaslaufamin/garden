import React, { useState } from 'react'
import CardBasket from '../CardBasket'
import { useDispatch, useSelector } from 'react-redux'
import s from './index.module.css'
import { host } from '../../host/host';
import { clearBasketAction } from '../../store/reducers/basketReducer';
import { IoClose } from "react-icons/io5";

export default function BasketConteiner() {
  const dispatch = useDispatch();
  const cardState = useSelector(store => store.basket);
  const totalCount = cardState.reduce((acc, el) => acc + (el.count), 0);
  const totalPrice = cardState.reduce((acc, el) => acc + ((el.discont_price === null ? el.price : el.discont_price ) * el.count), 0);

  const [isOpen, setIsOpen] = useState(false);
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
        setIsOpen(true)
        event.target.reset();
        setErrors({});
      }
    };
    
    const post_discount = (discount_user) => {
      fetch(`${host}/order/send`, {
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
      <div className={s.conteiner}>
        {isOpen && (
        <div className={s.modal}>
          <div className={s.modal_content}>
            <div className={s.close} onClick={() => [setIsOpen(false),dispatch(clearBasketAction())]}><IoClose className={s.close_icons} /></div>
            <h2>Congratulations! </h2>
            <p>Your order has been successfully placed on the website.</p>
            <p>A manager will contact you shortly to confirm your order.</p>
          </div>
        </div>
      )}
        <div className={s.cards}>
          {
            cardState.map(el => <CardBasket key={el.id} {...el} />)
          }
        </div>
        <div className={s.order_details}>
          <h1>Order details</h1>
          <p>{totalCount} items</p>
          <div>
            <p>Total</p>
            <p>${totalPrice.toFixed(2)}</p>
          </div>
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
            <button>Order</button>
          </form>
        </div>
      </div>
  )
}
