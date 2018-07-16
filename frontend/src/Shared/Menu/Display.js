import React from 'react'
import menuObject from './Menu'
import { NavLink } from 'react-router-dom'

const MenuDisplay = ({ handleToggle, menuStatus }) => (
  <div>
    <button
      label="Toggle Drawer"
      onClick={handleToggle}
    />
    <div open={menuStatus}>
      <div onClick={handleToggle}>X</div>
      {menuObject.map(({ Id, Name, URL}) => (
        <NavLink key={Id} to={URL}><span>{Name}</span></NavLink>
      ))}
    </div>
  </div>
)

export default MenuDisplay
