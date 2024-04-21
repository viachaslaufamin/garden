import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getCategories } from '../../request/category';
import CategoriesCard from '../CategoriesCard';
import s from './index.module.css'
import { Link } from 'react-router-dom';

export default function CategoriesConteiner() {

  const dispatch = useDispatch();

  useEffect( () => {
      dispatch(getCategories)
  }, []);

  const categoryData = useSelector( store => store.categories)

  return (
    <div className={s.conteiner}>
      <div>
        <p>Categories</p>
        <div className={s.line}></div>
        <Link to={`/categories`} >
          <p>All categories</p>
        </Link>
      </div>
      <div>
      {
        categoryData.filter(el=>el.id!==4).map(el => <CategoriesCard key={el.id} {...el} />)
      }
      </div>
    </div>
  )
}
