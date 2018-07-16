import React from 'react'
import { renderRoutes } from 'react-router-config'

// Pure Function - Full Layout
const LayoutFull = ({ route }) => (
  <div>
    {renderRoutes(route.routes)}
  </div>
)

export default LayoutFull
