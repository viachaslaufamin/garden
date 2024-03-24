import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getCategories } from '../../request/category';
import s from './index.module.css'
import CategoriesCard from '../../components/CategoriesCard';

export default function CategoriesConteiner() {

  const dispatch = useDispatch();

  useEffect( () => {
      dispatch(getCategories)
  }, []);

  const categoryData = useSelector( store => store.categories)

  return (
    <div className={['wrapper',s.conteiner].join(' ')}>
      <div>
        <p>Categories</p>
      </div>
      <div>
      {
        categoryData.map(el => <CategoriesCard  key={el.id} {...el} />)
      }
      </div>
    </div>
  )
}
