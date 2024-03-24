import React from 'react'
import { host } from '../../host/host'
import s from './index.module.css'
import { Link } from 'react-router-dom'


export default function SaleCard({id, image, title, price, discont_price}) {
  return (
    <Link to={`/product/${id}`}>
      <div className={s.card}>
                  <p>-{(((price-discont_price)%discont_price)*100).toFixed(0)}% </p>
        <div>
        <img src={host+image} alt={title} />
        <div>
          <p style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}> {title} </p>
          <div>
            <p> ${(price-discont_price).toFixed(2)} </p>
            <p> ${price} </p>
          </div>
        </div>
        </div>
      </div>
    </Link>
  )
}
