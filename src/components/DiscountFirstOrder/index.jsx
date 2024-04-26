import React from 'react'
import pic_order from './pic_order1.png'
import s from './index.module.css'
import { host } from '../../host/host';

export default function DiscountFirstOrder() {
 const form_submit = (event) =>{
  event.preventDefault();

  const{name_first_order , number_first_order ,email_first_order } = event.target;

  const sale ={
    id: Date.now(),
    name: name_first_order.value,
    tel: number_first_order.value,
    mail:email_first_order.value
  }


  sale_post(sale);
  event.target.reset();

 }

 const sale_post = (sale) => {
  fetch(`${host}/sale/send`, {
    method: 'POST',
      body: JSON.stringify(sale),
      headers: {'Content-Type': 'application/json;charset=utf-8'}
  })
  .then(res => res.json())
  .then(json => console.log(json));
  }


   
    
   
  


  return (
   
      
    <div className={s.container}>
    <h2>5% off on the first order</h2>
<img src={pic_order} alt="pic_order" />


 <form className={s.form} onSubmit={form_submit}  >
      
      
        <input type="text" placeholder='Name' name='name_first_order' />

        <input type="text" placeholder='Phone number' name='number_first_order' />

        <input type="text" placeholder='Email' name='email_first_order' />

        <button>Get a discount</button>
      </form>
    </div>
    
  )

  }