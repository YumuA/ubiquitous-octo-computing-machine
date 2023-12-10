import React from 'react'
import AgregarTrabajo from '../components/AgregarTrabajo'
import AgregarCountry from '../components/AgregarCountry'
import { AgregarCountryLanguage } from '../components/AgregarCountryLanguage'

const Crear = () => {
  return (
    <div>
      <AgregarTrabajo></AgregarTrabajo>
      <AgregarCountry/>
      <AgregarCountryLanguage />
    </div>
  )
}

export default Crear