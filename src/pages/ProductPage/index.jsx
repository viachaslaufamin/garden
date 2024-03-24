import React, { useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom';
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
      {
        oneProductState.map(el => <OneProductCard key={el.id} {...el} />)
      }
    </div>
  )
}
