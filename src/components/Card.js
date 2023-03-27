import React from 'react'
import { NavLink } from 'react-router-dom'

const Card = ({country}) => {
  return (
    <li className='card'>
      <NavLink to={`/country/${country.cioc}`}>
        <img src={country.flags.svg} alt={"drapeau " + country.translations.fra.common} />
        <div className="infos">
            <h2>{country.translations.fra.common}</h2>
            <h4>{country.capital}</h4>
            <p>Pop: {country.population.toLocaleString()}</p>
        </div>
      </NavLink>
    </li>
  )
}

export default Card