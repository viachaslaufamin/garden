import React, { useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useParams } from 'react-router-dom';
import { getOneProduct } from '../../request/productsRequst';
import OneProductCard from '../../components/OneProductCard';
import s from './index.module.css'
import { getCategories } from '../../request/category';

export default function ProductPage() {

  const dispatch = useDispatch();
  const {product_id} = useParams();
  useEffect(()=>{
    dispatch(getOneProduct(product_id))
  }, []);
  useEffect( () => {
    dispatch(getCategories)
}, []);
  const oneProductState = useSelector(store => store.one_product)
  const categoryState = useSelector(store => store.categories)

  const getCategoryTitle = (categoryId) => {
    const category = categoryState.find(cat => cat.id === categoryId);
    return category ? category.title : 'Unknown Category';
  }

  return (
    <div className={['wrapper', s.conteiner].join(' ')}>
            <div className={s.main_menu}>
        <Link to={'/'}>
            <div>Main Page</div>
        </Link>
        <Link to={'/categories'}>
            <div>Categories</div>
        </Link>
        <Link to={`/categories/${oneProductState[0]&&oneProductState[0].categoryId}`}>
            <div className={s.cat}>{oneProductState.length > 0 ? getCategoryTitle(oneProductState[0].categoryId) : 'Unknown Category'}</div>
        </Link>
        <div>{oneProductState[0]&&oneProductState[0].title}</div>
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
