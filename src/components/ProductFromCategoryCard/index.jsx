import React from 'react'
import { useDispatch } from 'react-redux'
import { host } from '../../host/host';
import s from './index.module.css'
import like from './like.png';
import basket from './basket.png'
import { Link } from 'react-router-dom';


export default function ProductFromCategoryCard({title , price, image, product_id}) {
   const dispatch = useDispatch();
  return (
    <div className={s.all}>
    <Link to={`products/${product_id}`} >
      <div className={s.card}>
    <div>
     <img src={host + image} alt="image" /> 
    
    <div className={s.card_title}>
      <p>{title}</p>
    <p>${price}</p></div>
    </div>
    </div>
    </Link>
    </div>
  )
}
