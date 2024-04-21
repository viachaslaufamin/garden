import React, { useEffect } from 'react'
import s from './index.module.css'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import BasketConteiner from '../../components/BasketConteiner';

export default function BasketPage() {

  const cardState = useSelector(store => store.basket);

  useEffect(()=> {
    localStorage.setItem('cart', JSON.stringify(cardState))
  }, [cardState]);
  
  return (
    <div className={['wrapper', s.conteiner].join(' ')}>
      <div className={s.title}>
        <p>Shopping cart</p>
        <div className={s.line}></div>
        <Link to={`/categories`} >
          <p>Back to the store</p>
        </Link>
      </div>
      <div>
      {
        cardState.length === 0 ?
          <div className={s.no_product}>
            <p>Looks like you have no items in your basket currently.</p>
            <Link to={'/categories'}>
              <div>Continue Shopping</div>
            </Link>
          </div> 
          :
          <BasketConteiner/>
      }
      </div>
    </div>
  )
}
