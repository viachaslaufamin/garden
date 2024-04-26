import React from 'react'
import s from './index.module.css'
import image from './img/img.jpg'

export default function AmazingDiscounts() {

  const background ={
    backgroundImage: `url(${image})`
  }
  return (
    <div style={background} className={ s.conteiner }>
      <h1>Amazing Discounts on Garden Products!</h1>
      <span>Check out</span>
      
    </div>
  )
}
