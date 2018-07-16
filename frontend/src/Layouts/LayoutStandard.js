import React from 'react'
import { renderRoutes } from 'react-router-config'

// Pure Function - Standard Layout
const LayoutStandard = ({ route }) => (
  <div>
    {renderRoutes(route.routes)}
  </div>
)

export default LayoutStandard
