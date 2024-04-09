import React from 'react'
import s from './index.module.css'
import { host } from '../../host/host'
import { useDispatch } from 'react-redux';
import { clearCardAction, dicrementCountAction, incrimentCountAction } from '../../store/reducers/basketReducer';
import { AiOutlineClose } from "react-icons/ai";

export default function CardBasket({id, image, title, price, discont_price, count}) {
   const price_name = discont_price === null? s.price:s.price_discont;
   const price_new = discont_price === null? price : discont_price;
   
   const dispatch = useDispatch();
   return (
      <div className={s.card}>
         <div className={s.image}>
            <img src={host+image} alt={title} />
         </div>
         <div className={s.description}>
            <div>
               <p>{title}</p>
               <p onClick={()=>dispatch(clearCardAction(id))}><AiOutlineClose /></p>
            </div>
            <div>
               <div className={s.count}>
                  <p onClick={()=> dispatch(dicrementCountAction(id))}>-</p>
                  <p>{count}</p>
                  <p onClick={()=> dispatch(incrimentCountAction(id))}>+</p>
               </div>
               <div className={price_name}>
                  <p> ${(count*price_new).toFixed(2)} </p>
                  <p> ${count*price.toFixed(2)}</p>
               </div>
            </div>
         </div>
      </div>
   )
}
