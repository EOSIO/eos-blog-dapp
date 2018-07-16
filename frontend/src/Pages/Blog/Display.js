import React from 'react'

const Display = ({ Data }) => (
  <ul>
    {Data.map(({ id, title, body }) => (
      <li key={id}>
        <h4>title</h4><br />
        {body}
      </li>
    ))}
  </ul>
)

export default Display
