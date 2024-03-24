import React from 'react'
import s from './index.module.css'
import { host } from '../../host/host';
import img from './image.png'

export default function DiscountFirstOrder() {
  const add_discount_user = (event) => {
    event.preventDefault();
    const { name, phone_number, mail } = event.target;
    const discount_user = {
      id: Date.now(),
      name: name.value,
      number: phone_number.value,
      mail: mail.value
    }
    
  const post_discount = discount_user => {
  fetch(`${host}/sale/send`, {
    method: 'POST',
    body: JSON.stringify(discount_user),
    headers: {'Content-Type': 'application/json;charset=utf-8'}
  })
    .then(res => res.json())
    .then(json => console.log(json))
}
    post_discount(discount_user);
    event.target.reset()
  }
  return (
    <section className={s.discount_block}>
    <h2>5 % off on the first order</h2>
    <div>
      <img src={img} alt="" />
      <form onSubmit={add_discount_user}>
        <input type='text' placeholder='Name' name='name'/>
        <input type='text' placeholder='Phone number' name='phone_number'/>
        <input type='text' placeholder='Email' name='mail'/>
        <button>Get a discount</button>
      </form>
    </div>
  </section>
  )
}