import React, { useEffect } from 'react'
import {useDispatch , useSelector} from 'react-redux'
import { getCategories } from '../../requests/categories';
import CategoriesCard from '../CategoriesCard';
import { Link } from 'react-router-dom';
import s from './index.module.css'



export default function CategoriesConteiner() {

  const dispatch = useDispatch();
  useEffect(() =>{
    dispatch(getCategories)
  }, [])

  const categoriesData = useSelector(store => store.categories);
  console.log(categoriesData)
  return (
    <div className={s.cat_cont}>
     <div className={s.menu}> 
      <h2>Categories</h2>
      <div className={s.line}></div>
      <Link to='/categories'>
      <p>All categories</p>
      </Link>
      </div>
<div >
      {categoriesData.filter(el => el.id !==4).map(el => <CategoriesCard key={el.id} {...el}/> )}
      </div> 
    </div>
  )
}
