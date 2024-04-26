import React from 'react'
import { host } from '../../host/host'
import s from './index.module.css'
import { Link } from 'react-router-dom'


export default function CategoriesCard({id, title , image}) {
  return (
    <div className={s.cat_card} >
    <Link to={`/categories/${id}`} className={s.link}>
    
      <div>
      <img src={ host + image} alt="image" />

      <p>{title}</p>
      </div>
    </Link>
    </div>
    
  )
}
