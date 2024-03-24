import React from 'react'
import CategoriesConteiner from '../../components/CategoriesConteiner'
import DiscountFirstOrder from '../../components/DiscountFirstOrder'
import s from './index.module.css'
import AmazingDiscounts from '../../components/AmazingDiscounts'
import SaleConteiner from '../../components/SaleConteiner'

export default function HomePage() {
  return (
    <div className={['wrapperhomepage', s.conteiner].join(' ')}>
      <AmazingDiscounts/>
      <CategoriesConteiner/>
      <DiscountFirstOrder/>
      <SaleConteiner/>
    </div>
  )
}
