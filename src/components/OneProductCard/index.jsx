import React, { useState } from 'react'
import { host } from '../../host/host'
import s from './index.module.css'
import { useDispatch} from 'react-redux';
import {addToCarsAction} from '../../store/reducers/basketReducer'


export default function OneProductCard({id, title, price,discont_price, description, image}) {
   const [showFullDescription, setShowFullDescription] = useState(false);
   const class_name = discont_price === null? s.price:s.price_disc;
   const [count, setCount] = useState(0);
   const incrementCount = () => {
      setCount(count + 1);
   };

   const decrementCount = () => {
      if (count > 0) {
         setCount(count - 1);
      }
   };
   const addToCart = () => {
      if (count === 0) {
         setErrorMessage("Please select quantity");
         return;
      }
      setErrorMessage('');
      dispatch(addToCarsAction({id, title, price, discont_price, description, image, count}));
      setCount(0);
   };
   const [errorMessage, setErrorMessage] = useState('');
   const dispatch = useDispatch();
   const price_new = discont_price === null? price : discont_price;
return (
   <div className={s.card}>
      <div>
         <img src={host+image} alt={title} />
      </div>
      <div className={s.descr}>
         <div> { title } </div>
         <div className={class_name}>
            <p>${price_new}</p>
            <div>
               <p>${(price).toFixed(1)}</p>
               <p>-{(((price-discont_price)*100)%price).toFixed(0)}%</p>
            </div>
         </div>
         <div className={s.flex}>
            <div className={s.count}>
               <p onClick={decrementCount} >-</p>
               <p>{count}</p>
               <p onClick={incrementCount} >+</p>
            </div>
            <div className={s.button} onClick={addToCart}>
               <p>Add to cart</p>
            </div>
         </div>
         <p style={{ color: 'red' }}>{errorMessage}</p>
         <div className={s.description}>
            <p>Description</p>
               <div>
                  {showFullDescription ?
                  (<p>{description}</p>)
                  :
                  (<p>{description.length > 200 ? description.slice(0, 100) + '...' : description}
                        <p className={s.readMore} onClick={() => setShowFullDescription(true)}>
                           Read more
                        </p>
                  </p>)
                  }
               </div>
         </div>
      </div>
   </div>
)
}
