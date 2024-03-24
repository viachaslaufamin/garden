import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllProducts } from '../../request/productsRequst';
import s from './index.module.css'
import AllProductCard from '../../components/AllProductCard';
import { Link } from 'react-router-dom';

export default function AllProductPage() {
   const dispath = useDispatch();
   useEffect(()=>{
      dispath(getAllProducts)
   },[]);
   const allProducts = useSelector(store => store.all_products);
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
      <div>
      </div>
      <div>
         {
            allProducts.map(el=> <AllProductCard key={el.id} {...el} />)
         }
      </div>
    </div>
  )
}