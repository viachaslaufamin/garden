import React from 'react'
import DiscountFirstOrder from '../../components/DiscountFirstOrder'
import Header from '../../components/Header'
import AmazingDiscounts from '../../components/AmazingDiscounts'
import CategoriesConteiner from '../../components/CategoriesConteiner'

export default function HomePage() {
  return (
    <div>
      <AmazingDiscounts/>
      <CategoriesConteiner/>
    <DiscountFirstOrder/>
    
    </div>
  )
}
