import React from 'react';
import './populaireComp.css';
import dbpop from '../../datas/db_pop.json';

function PopulaireComp() {

return dbpop.map((lement) =>{
    console.log('lement =>',lement);
    return (
      <div className='popComp' key={lement.id}>
         <img className="imgCard" src={lement.imgUrl} alt={lement.title} />
         <h2>{lement.title}</h2>
         <h3>{lement.description}</h3>
         <h4>{lement.tag}</h4>
      </div>
    )
  })
}

export default PopulaireComp;
