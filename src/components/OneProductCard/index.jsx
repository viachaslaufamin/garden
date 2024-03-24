import React from 'react'
import { host } from '../../host/host'
import s from './index.module.css'

export default function OneProductCard({id, title, price,discont_price, description, image}) {
   const class_name = discont_price === null? s.price:s.price_disc;
return (
   <div className={s.card}>
      <div>
         <img src={host+image} alt={title} />
      </div>
      <div className={s.descr}>
         <div> { title } </div>
         <div className={class_name}>
            <p>${price}</p>
            <p>${(price-discont_price).toFixed(2)}</p>
            <p>-{(((price-discont_price)%discont_price)*100).toFixed(0)}%</p>
         </div>
         <div>
            <div className={s.count}>
               <p>-</p>
               <p>3</p>
               <p>+</p>
            </div>
            <div className={s.button}>
               <p>Add to cart</p>
            </div>
         </div>
         <div className={s.description}>
            <p>Description</p>
            <p>{ description }</p>
         </div>
      </div>
   </div>
)
}
