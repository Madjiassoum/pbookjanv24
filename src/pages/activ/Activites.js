import React from 'react';
import './activites.css';
import ActiviteComp from '../../components/activvite/ActiviteComp';

function Activites() {
  return (
    <div className='div-activite'>
      <h2>Activités Marseille</h2>
      <div className="actCardsContainer">
        <ActiviteComp />
      </div>
    </div>
  )
}

export default Activites
