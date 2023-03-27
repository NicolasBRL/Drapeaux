import React from 'react'
import { NavLink } from 'react-router-dom'
import Logo from './Logo'

const Navigation = () => {
  return (
    <div className='navigation'>
        <Logo />
        <ul>
            <NavLink to="/" className={(nav) => (nav.isActive ? "nav-active" : "")}>Accueil</NavLink>
            <NavLink to="/about" className={(nav) => (nav.isActive ? "nav-active" : "")}>À Propos</NavLink>
        </ul>
    </div>
  )
}

export default Navigation