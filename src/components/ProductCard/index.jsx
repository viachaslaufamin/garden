import React, { useState } from 'react'
import { host } from '../../host/host'
import s from './index.module.css'
import { Link } from 'react-router-dom';

export default function ProductCard({id, title, price, image , description}) {

    let [count , setCount] =useState(1);

    const incr = () => {
        setCount(++count)
    }
    const decr = () => {
        setCount(--count)
    }


  return (
    <div className={s.all}>
    <Link to={`/products/${id}`}>
    <div className={s.card}>

    <div>
    <img src={ host + image } alt="image" />
    </div>
    <div className={s.info}>
    <h2>{title}</h2>
    <p>${ price }</p> 

    <div className={s.flex}>

    <div className={s.count}>
    <button onClick={decr}>-</button>
    <p>{count}</p>
    <button onClick={incr}>+</button>
    </div>

    <div className={s.button} >
               <button>Add to cart</button>
            </div>
            </div>

            <div className={s.description}>

    <p>Description</p>
    <div>{ description }</div>
    </div>
    </div>
    </div>
    </Link>
    </div>
   
   
  )
}
