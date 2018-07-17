import React from 'react'
import menuObject from './Menu'
import { NavLink } from 'react-router-dom'

const MenuDisplay = (props) => (
  <div className='menu'>
    <ul>
      {menuObject.map(({ Id, Name, URL}) => (
        <li key={Id}><NavLink to={URL}><span>{Name}</span></NavLink></li>
      ))}
    </ul>
  </div>
)

export default MenuDisplay
