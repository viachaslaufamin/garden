import React from 'react'
import logo from './logo1.png'
import icon from './icon1.png'
import { Link } from 'react-router-dom'
import s from './index.module.css'

export default function Header() {
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
      <div><Link to={'/basket'}><img src={icon} alt="icon" /></Link></div>
    </header>
  )
}
