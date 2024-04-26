import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllProducts } from '../../requests/allProducts';
import AllProductsCard from '../AllProductsCard/index';
import s from './index.module.css'
import { Link } from 'react-router-dom';


export default function AllProductsContainer() {


  const dispatch = useDispatch();
  useEffect(() =>{
    dispatch(getAllProducts)

    
  })

  const allProductsData = useSelector(store => store.allProducts)
    console.log(allProductsData)
  return (
    <div className={s.container}>
      <div className={s.menu}>
        <Link to='/'><div>Main page</div></Link>
        <div>All products</div>
      </div>
      <h2>All products</h2>
    <div className={s.cards}>{
      allProductsData.map((el => <AllProductsCard {...el} key={el.id}/>))
      }</div>
      </div>
  )
}
