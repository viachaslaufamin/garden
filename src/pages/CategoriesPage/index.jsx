import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getCategories } from '../../request/category';
import s from './index.module.css'
import { Link } from 'react-router-dom';
import CategoriesPageCard from '../../components/CatrgoriesPageCard';

export default function CategoriesConteiner() {

  const dispatch = useDispatch();

  useEffect( () => {
      dispatch(getCategories)
  }, []);

  const categoryData = useSelector( store => store.categories)

  return (
    <div className={['wrapper',s.conteiner].join(' ')}>
      <div className={s.main_menu}>
        <Link to={'/'}>
            <div>Main Page</div>
        </Link>
        <div>Categories</div>
        <div></div>
      </div>
      <div>
        <p>Categories</p>
      </div>
      <div>
      {
        categoryData.map(el => <CategoriesPageCard  key={el.id} {...el} />)
      }
      </div>
    </div>
  )
}
