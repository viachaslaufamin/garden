import React from 'react'
import { host } from '../../../host/host'
import s from './index.module.css'
import { Link } from 'react-router-dom'
export default function AllProductsCard({id , 
    title , price , image ,product_id
}) {
  return (
    <div className={s.all}>
    <Link to={`/products/${id}`} ><div className={s.card}>
      <div>
        <img src={ host + image} alt="image" />
       <div className={s.card_title}>
        <p>{title}</p>
       <p>${price}</p> </div>
       </div>
    </div>
    </Link>
    </div>
  )
}
