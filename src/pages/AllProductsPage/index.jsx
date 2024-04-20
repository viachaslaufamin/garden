import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllProducts } from '../../request/productsRequst';
import s from './index.module.css'
import AllProductCard from '../../components/AllProductCard';
import { Link } from 'react-router-dom';
import { checkPriceAction, sortDiscountProductsAllAction, sortProductsAllAction } from '../../store/reducers/allProductsReducer';

export default function AllProductPage() {
   const dispatch = useDispatch();
   useEffect(()=>{
      dispatch(getAllProducts)
   },[]);
   const allProducts = useSelector(store => store.all_products);
   const [checked, setChecked] = useState(false);
   const handle_check = () => setChecked(!checked);
   const handle_click = e => dispatch(sortDiscountProductsAllAction(e.target.checked));
   const order = event => {
      dispatch(sortProductsAllAction(event.target.value))
   }
   const check = event => {
      event.preventDefault();
      const { min_value, max_value } = event.target;
      const check_products = {
         min_value: parseFloat(min_value.value) || 0,
         max_value: parseFloat(max_value.value) || Infinity
      }
      dispatch(checkPriceAction(check_products));
      
      event.target.reset();
   }
  return (
    <div className={['wrapper', s.conteiner].join(' ')}>
      <div className={s.main_menu}>
         <Link to={'/'}>
            <div>Main Page</div>
         </Link>
         <div>All product</div>
         <div></div>
      </div>
      <h2>All products</h2>
      <div className={s.sort}>
         <div>
            <form onSubmit={check} className={s.form}>
               <p>Price</p>
               <input type="number" placeholder='from' name='min_value' />
               <input type="number" placeholder='to' name='max_value' />
               <input type='submit'/>
            </form>
         </div>
         <div>
            <label>
               <span>Discounted items</span>
               <input type="checkbox" checked={checked} onChange={handle_check} onClick={handle_click}/>
            </label>
         </div>
         <div>
            <span>Sorted</span>
            <select onInput={order}>
               <option value='default'>by default</option>
               <option value='name'>By name (A-Z)</option>
               <option value='price_asc'>By price (ASC)</option>
               <option value='price_desc'>By price (DESC)</option>
            </select>
         </div>
      </div>
      <div>
         {
            allProducts
            .filter(el => el.visible === true)
            .map(el=> <AllProductCard key={el.id} {...el} />)
         }
      </div>
    </div>
  )
}