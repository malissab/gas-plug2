import React from 'react'

function GasDetail({ name, regular, premium }) {



  return (
    <div>
    <h3>{name}</h3>
    <p>${regular}</p>
    <p>{premium}</p>
    </div>
  )
}

export default GasDetail