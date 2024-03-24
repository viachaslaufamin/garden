import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllProducts } from '../../request/productsRequst';
import SaleCard from '../../components/SaleCard';
import s from './index.module.css'

export default function SalePage() {
   const dispath = useDispatch();

   useEffect(()=>{
      dispath(getAllProducts)
   },[]);
   const allProducts = useSelector(store => store.all_products);
   const saleProducts = allProducts.filter(el => el.discont_price !== null)
  return (
    <div className={['wrapper', s.conteiner].join(' ')}>
      <h2>Discounted items</h2>
      <div>

      </div>
      <div>
         {
            saleProducts.map(el=> <SaleCard key={el.id} {...el} />)
         }
      </div>
    </div>
  )
}
