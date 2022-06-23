import React from 'react'
import GasDetail from './GasDetail.js'

function GasByStateList({ getGas }) {

    const allStates = getGas.map((state) => (
        <GasDetail key={state.id} name={state.name} regular={state.regular} 
        midGrade={state.midGrade} premium={state.premium} diesel={state.diesel}/>
    ));

  return (
    <div>
          <h1>Gas By State</h1>
  
            {allStates}
    </div>
  )
}

export default GasByStateList