import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllProducts } from '../../request/productsRequst';
import SaleCard from '../../components/SaleCard';
import s from './index.module.css'
import { Link } from 'react-router-dom';
import { checkPriceAction, sortProductsAllAction } from '../../store/reducers/allProductsReducer';

export default function SalePage() {
   const dispatch = useDispatch();

   useEffect(()=>{
      dispatch(getAllProducts)
   },[]);
   const allProducts = useSelector(store => store.all_products);
   const saleProducts = allProducts.filter(el => el.discont_price !== null)
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
         <div>All Sales</div>
         <div></div>
      </div>
      <h2>Discounted items</h2>
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
            saleProducts
            .filter(el => el.visible === true)
            .map(el=> <SaleCard key={el.id} {...el} />)
         }
      </div>
    </div>
  )
}
