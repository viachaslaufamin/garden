import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getProduct } from '../../requests/allProducts';
import ProductCard from '../ProductCard';
import s from './index.module.css'
import { Link, useParams } from 'react-router-dom'
import { getCategories } from '../../requests/categories';



export default function ProductContainer() {
    const {product_id} = useParams();

    const dispatch = useDispatch();

    useEffect(()=> {
        dispatch(getProduct(product_id))
    }, []);

    useEffect( () => {
        dispatch(getCategories)
    }, []);



    const productData = useSelector(store => store.product);
    const categoriesData = useSelector(store => store.categories);

    const getCategoryName = (category_id) =>{
        const category = categoriesData.find(cat => cat.id === category_id);
        return category ? category.title : 'Unknown Category'
    }

  return (
    <div className={s.container}>

<div className={s.menu}>
    <Link to='/'><div>Main page</div></Link>
    <Link to='/categories'><div>Categories</div></Link>

    <Link to={`/categories/${productData[0]&&productData[0].category_id}`}>
    <div > {productData.length > 0 ? getCategoryName(productData[0].category_id) : 'Unknown Category'} </div></Link>

    <div className={s.menu_last}>
        {productData[0]&&productData[0].title}
    </div>
    </div>

    <div className={s.cards}>
        {productData.map(el =>
        <ProductCard key={el.id} {...el}/>)}
    </div>


    </div>
  )
}
