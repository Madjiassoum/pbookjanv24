import React from 'react';
import './heberge.css';
import datas from '../../datas/db_heb.json';
import RateStar from '../rate/RateStar';



export default function Heberge() {
  return datas.map((element) =>{
    console.log('element =>',element);
    return (
      <div className='heberComp' key={element.id}>
        <div className="divImg">
          <img className="imgCard" src={element.imgUrl} alt={element.title} />
        </div>
        <div className="divText">
          <div className='h2h3'>
              <h2>{element.title}</h2>
              <h3>{element.description}</h3>
          </div>
          <div className='rating'><RateStar taux={element.tag} /></div>  
        </div>
      </div>
    )
  })
}
