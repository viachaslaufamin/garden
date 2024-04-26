import React from 'react'
import {Link} from 'react-router-dom'
import s from './index.module.css'
import logo from './logo.png';
import switch_but from './switch.png'
import like from './like.png'
import basket from './basket.png'


export default function Header() {
  return (
    <div className={s.menu}>
      <img   src={logo} alt="logo" />
      <img   src={switch_but} alt="switch_but" />
      <Link to='/'> Main Page</Link>
      <Link to='/categories'> Categories</Link>
      <Link to='/products'> All products</Link>
      All sales

      <div className={s.menu_image}>
      <img class='like' src={like} alt="like" />
      <Link to='/basket'><img class='basket' src={basket} alt="basket" /></Link>
      </div>
    </div>
  )
}
