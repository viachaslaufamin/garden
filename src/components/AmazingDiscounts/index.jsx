import React from 'react'
import s from './index.module.css'
import bg from './img/img.jpg'
import { Link } from 'react-router-dom'

export default function AmazingDiscounts() {

  const bgc = {
    backgroundImage: `url(${bg})`
  }
  return (
    <div style={bgc} className={s.conteiner}>
      <h1>Amazing Discounts on Garden Products!</h1>
      <Link to={'/sale'} >
        <div>Check out</div>
      </Link>
    </div>
  )
}
