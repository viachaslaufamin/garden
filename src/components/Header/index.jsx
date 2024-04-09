import React from 'react'
import logo from './logo1.png'
import icon from './icon1.png'
import { Link } from 'react-router-dom'
import s from './index.module.css'
import { RxHamburgerMenu } from "react-icons/rx";
import { useSelector } from 'react-redux'

export default function Header() {
  const cardState = useSelector(store => store.basket);
  const totalCount = cardState.reduce((acc, el) => acc + (el.count), 0);
  const namber = totalCount === 0 ? s.not_namber: s.namber
  return (
    <header className={['wrapper', s.conteiner].join(' ')}>
      <div><Link to={'/'}><img src={logo} alt="logo" /></Link></div>
      <nav>
        <ul>
          <Link to={'/'}>
            <li>Main Page</li>
          </Link>
          <Link to={'/categories'}>
            <li>Categories</li>
          </Link>
          <Link to={'/all_product'}>
            <li>All products</li>
          </Link>
          <Link to={'/sale'}>
            <li>All sales</li>
          </Link>
        </ul>
      </nav>
      <div className={s.basket}><Link to={'/basket'}><img src={icon} alt="icon" />
      <div className={namber}>{totalCount}</div></Link>
      <RxHamburgerMenu className={s.burger}/></div>
    </header>
  )
}
