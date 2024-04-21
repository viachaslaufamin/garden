import React, { useState } from 'react'
import { host } from '../../host/host'
import s from './index.module.css'
import { Link } from 'react-router-dom'
import { addToCarAction } from '../../store/reducers/basketReducer';
import { useDispatch } from 'react-redux';


export default function SaleCard({id, image, title, price, discont_price}) {
  const dispatch = useDispatch();
  const [showButton, setShowButton] = useState(false);
  const price_new = discont_price === null? price : discont_price;
  return (
      <div className={s.card} onMouseEnter={() => setShowButton(true)} onMouseLeave={() => setShowButton(false)}>
        <p>-{(((price-discont_price)*100)%price).toFixed(0)}% </p>
        {showButton && (<div className={s.add_card} onClick={()=> dispatch(addToCarAction({id, image, title, price, discont_price}))}>Add to cart</div>)}
        <div>
        <img src={host+image} alt={title} />
        <Link to={`/product/${id}`}>
          <div>
            <p style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}> {title} </p>
            <div>
              <p> ${price_new} </p>
              <p> ${price} </p>
            </div>
          
          </div>
          </Link>
        </div>
      </div>

  )
}
