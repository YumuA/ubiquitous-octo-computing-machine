import React from 'react'
import AgregarCity from '../components/AgregarCity'
import AgregarCountry from '../components/AgregarCountry'
import { AgregarCountryLanguage } from '../components/AgregarCountryLanguage'

const Crear = () => {
  return (
    <div>
      <AgregarCity />
      <AgregarCountry/>
      <AgregarCountryLanguage />
    </div>
  )
}

export default Crear