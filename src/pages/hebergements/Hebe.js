import React from 'react';
import './hebe.css';
import Heberge from '../../components/heber/Heberge'

function Hebe() {
  return (
    <div className='divHeb'>
      <h2>Hébergements à Marseille</h2>
      <div className="containerHeb">
        <Heberge/>
      </div>
    </div>
  )
}

export default Hebe
