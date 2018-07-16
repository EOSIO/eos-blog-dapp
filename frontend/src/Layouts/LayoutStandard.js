import React from 'react'
import { renderRoutes } from 'react-router-config'

import Menu from '../Shared/Menu'

// Pure Function - Standard Layout
const LayoutStandard = ({ route }) => (
  <div>
    <Menu />
    {renderRoutes(route.routes)}
  </div>
)

export default LayoutStandard
