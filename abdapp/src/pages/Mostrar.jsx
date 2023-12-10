import React from 'react'
import CountryLista from '../components/CountryLista'
import MostrarCountryLanguage from '../components/CountryLanguageLista'
import CityLista from '../components/CityLista'

const Mostrar = () => {
  return (
    <div>
      <CountryLista />
      <MostrarCountryLanguage />
      <CityLista />
    </div>
  )
}

export default Mostrar