import React from 'react'

function GasDetail({ name, regular, premium, midGrade, diesel }) {



  return (
    <div>
    <h3>{name}</h3>

    {/* <p>$ {regular}</p> */}
    <p>Midgrade: ${midGrade}</p>
    <p>Premium: ${premium}</p>
    <p>Diesel: ${diesel}</p>
    </div>
  )
}

export default GasDetail