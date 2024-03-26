import React, { useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useParams } from 'react-router-dom';
import { getOneProduct } from '../../request/productsRequst';
import OneProductCard from '../../components/OneProductCard';
import s from './index.module.css'

export default function ProductPage() {

  const dispatch = useDispatch();
  const {product_id} = useParams();
  useEffect(()=>{
    dispatch(getOneProduct(product_id))
  }, [])
  const oneProductState = useSelector(store => store.one_product)
  return (
    <div className={['wrapper', s.conteiner].join(' ')}>
            <div className={s.main_menu}>
        <Link to={'/'}>
            <div>Main Page</div>
        </Link>
        <Link to={'/categories'}>
            <div>Categories</div>
        </Link>
        <Link to={'/?'}>
            <div>Categories</div>
        </Link>
        <div>название товара</div>
        <div></div>
        <div></div>
        <div></div>
      </div>
      {
        oneProductState.map(el => <OneProductCard key={el.id} {...el} />)
      }
    </div>
  )
}
