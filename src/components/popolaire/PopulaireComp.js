import React from 'react';
import './populaireComp.css';
import dbpop from '../../datas/db_pop.json';
import RateStar from '../rate/RateStar';

function PopulaireComp() {

return dbpop.map((lement) =>{
    console.log('lement =>',lement);
    return (
      <div className='popComp' key={lement.id}>
        <img className="imgCard" src={lement.imgUrl} alt={lement.title} />
        <div className='lesH'>
          <div className='h2h3'>
             <h4>{lement.title}</h4>
             <h6>{lement.description}</h6>
          </div>
          <div className='rating'>
            <RateStar taux={lement.tag} />
          </div>
        </div>
      </div>
    )
  })
}

export default PopulaireComp;
