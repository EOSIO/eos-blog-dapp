import React from 'react'
import { renderRoutes } from 'react-router-config'

// Pure Function - Empty Base Layout
const LayoutBase = ({ route }) => (
  <div>
    {renderRoutes(route.routes)}
  </div>
)

export default LayoutBase
