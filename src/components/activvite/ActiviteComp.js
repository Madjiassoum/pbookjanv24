import React from 'react';
import './activiteComp.css';
import dbactive from '../../datas/db_active.json';

function ActiviteComp() {
  return dbactive.map((actor) =>{
    console.log('actor =>',actor);
    return (
      <div className='div-activiteComp' key={actor.id}>
        <div className="divImg">
          <img className="imgCard" src={actor.imgUrl} alt={actor.title} />
        </div>
         <h4>{actor.title}</h4>
      </div>
    )
  })
}

export default ActiviteComp;
