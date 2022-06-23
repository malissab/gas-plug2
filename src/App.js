import React, {useEffect, useState} from 'react';
import GasByStateList from './GasByStateList';
import './App.css';

function App() {

  const [getGas, setGetGas] = useState([])

  useEffect(() => {
    fetch("https://api.collectapi.com/gasPrice/allUsaPrice", {
      "method": "GET",
      "headers": {
        'authorization': 'apikey 61YoyeUPbry0lXwqSb3h9b:5kEtadptD9hNWnzEROsO57',
        'content-type': 'application/json'
      }
    })
    .then(response => response.json())
    .then(data => {
      setGetGas(data.result)
      })
    }, []);

  return (
    <div className="App">
      <GasByStateList getGas={getGas}/>
    </div>
  );
}

export default App;
