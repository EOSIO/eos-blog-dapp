import React from 'react'
import { renderRoutes } from 'react-router-config'

import Menu from '../Shared/Menu'
import '../Styles/core.css'

// Pure Function - Standard Layout
const LayoutStandard = ({ route }) => (
  <div className="layoutStandard">
    <div className="logo">
      <a href="">
        Eos.io
      </a>
    </div>
    <div className="search">
      <input type="text" placeholder="Search cards" />
    </div>
    <Menu />
    <div className="main">
      {renderRoutes(route.routes)}
    </div>
  </div>
)

export default LayoutStandard
