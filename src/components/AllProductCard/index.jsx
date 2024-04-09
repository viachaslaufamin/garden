import React, { useState } from 'react'
import { host } from '../../host/host'
import s from './index.module.css'
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addToCarAction } from '../../store/reducers/basketReducer';

export default function AllProductCard({id, image, title, price, discont_price}) {
  const dispatch = useDispatch();
  const [showButton, setShowButton] = useState(false);
  const class_name = discont_price === null? s.card1:s.card;
  const price_new = discont_price === null? price : discont_price;
    return (
        <div className={class_name} onMouseEnter={() => setShowButton(true)} onMouseLeave={() => setShowButton(false)}>
          {showButton && ( <div className={s.add_card} onClick={()=> dispatch(addToCarAction({id, image, title, price, discont_price}))}>Add to cart</div>)}
          <p>-{(((price-discont_price)*100)%price).toFixed(0)}%</p>
          <div>
            <div>
              <img src={host+image} alt={title} />
            </div>
            <Link to={`/product/${id}`}>
            <div>
            <p className={s.title} style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}> {title} </p>
            <div className={s.price}>
              <p> ${price_new} </p>
              <p> ${price} </p>
            </div>
          </div>
          </Link>
          </div>
        </div>
      
    )
  }
