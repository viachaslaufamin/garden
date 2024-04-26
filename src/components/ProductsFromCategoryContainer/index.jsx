import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { getProdFromCategory } from '../../requests/productsFromCategory';
import { useDispatch, useSelector } from 'react-redux';
import ProductFromCategoryCard from '../ProductFromCategoryCard';
import s from './index.module.css'

export default function ProductsFromCategoryConrainer
() {

    const {category_id} = useParams();

    
const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(getProdFromCategory(category_id))
      }, []);

      const prodFromCategData = useSelector(store => store.productsFromCategory)

    

      const {category , data} = prodFromCategData;

  return (
    <div className={s.container}>
        <div className={s.menu}>
    <Link to='/'><div>Main page</div></Link>
    <Link to='/categories'><div>Categories</div></Link>
<div className={s.menu_last}> {category&&category.title} </div>
    </div>

    <h2>{ category&&category.title }</h2>

<div className={s.cards}>
    {
        data && data.map(el => <ProductFromCategoryCard key={el.id} {...el} />)
    }
</div>
    

    </div>
  )
}
