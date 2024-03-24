import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useParams } from 'react-router-dom';
import { getProducts } from '../../request/categoryProduct';
import s from './index.module.css'
import AllProductCard from '../../components/AllProductCard';

export default function ProductsCategoryPage() {
  const dispatch = useDispatch();

  const { category_id } = useParams();

  useEffect(()=>{
    dispatch(getProducts(category_id))
  }, []);

  const productByCategoryState = useSelector(store => store.categories_product)
  const { data, category } = productByCategoryState;
  return (
    <div className={['wrapper', s.conteiner].join(' ')}>
      <div className={s.main_menu}>
        <Link to={'/'}>
            <div>Main Page</div>
        </Link>
        <Link to={'/categories'}>
            <div>Categories</div>
        </Link>
        <div></div>
      </div>
      <h2>{category ? category.title : 'Loading...'}</h2>
      <div>
      </div>
      <div>
        {
          data && data.map(el=> <AllProductCard key={el.id} {...el} />)
        }
      </div>
    </div>
  )
}
