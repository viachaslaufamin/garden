import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import SaleCard from '../SaleCard';
import s from './index.module.css'
import { Link } from 'react-router-dom';
import { getAllProducts } from '../../request/productsRequst';

export default function SaleConteiner() {

  const dispath = useDispatch();

  useEffect(()=>{
    dispath(getAllProducts)
  },[]);

  const saleProducts = useSelector(store => store.all_products);

  const discountedProducts = saleProducts.filter(el => el.discont_price !== null);

  const getRandomRiver = (n, arr) => arr.sort(() => 0.5 - Math.random()).slice(0, n);

  const randomSet = getRandomRiver(4, discountedProducts);

  return (
    <div className={s.conteiner}>
      <div>
        <p>Sale</p>
        <div className={s.line}></div>
        <Link to={`/sale`} >
          <p>All sales</p>
        </Link>
      </div>
      <div>
      {
        randomSet.map(el => <SaleCard key={el.id} {...el} />)
      }
      </div>
    </div>
  )
    }