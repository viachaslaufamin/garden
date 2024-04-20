import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useParams } from 'react-router-dom';
import { getProducts } from '../../request/categoryProduct';
import s from './index.module.css'
import AllProductCard from '../../components/AllProductCard';
import { checkPriceAction, getCheckProductsAction, sortProductsAction } from '../../store/reducers/productFromCategory';

export default function ProductsCategoryPage() {
  const dispatch = useDispatch();

  const { category_id } = useParams();

  useEffect(()=>{
    dispatch(getProducts(category_id))
  }, []);
  
  const order = event => {
    dispatch(sortProductsAction(event.target.value))
  }
  const [checked, setChecked] = useState(false);
   const handle_check = () => setChecked(!checked);
   const handle_click = e => dispatch(getCheckProductsAction(e.target.checked))
const check = event => {
      event.preventDefault();
      const { min_value, max_value } = event.target;
      const check_products = {
        min_value: parseFloat(min_value.value) || 0,
        max_value: parseFloat(max_value.value) || Infinity
      }
      dispatch(checkPriceAction(check_products));
      event.target.reset();
   }

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
        <div>{category && category.title}</div>
        <div></div>
        <div></div>
      </div>
      <h2>{category && category.title}</h2>
      <div className={s.sort}>
        <div>
          <form onSubmit={check} className={s.form}>
            <span>Price</span>
            <input type="number" placeholder='from' name='min_value' />
            <input type="number" placeholder='to' name='max_value' />
            <input type='submit'/>
            </form>
        </div>
        <div>
          <label>
            <span>Disconted Items</span>
            <input type="checkbox" checked={checked} onChange={handle_check} onClick={handle_click}/>
          </label>
        </div>
        <div>
          <span>Sorted:</span>
          <select onInput={order}>
            <option value='default'>by defauld</option>
            <option value='name'>By name (A-Z)</option>
            <option value='price_asc'>By price (ASC)</option>
            <option value='price_desc'>By price (DESC)</option>
          </select>
        </div>
      </div>
      <div>
        {
          data && data
          .filter(el => el.visible)
          .map(el=> <AllProductCard key={el.id} {...el} />)
        }
      </div>
    </div>
  )
}
