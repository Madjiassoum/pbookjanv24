import React from 'react';
import './heberge.css';
import datas from '../../datas/db_heb.json';
export default function Heberge() {
  return datas.map((element) =>{
    console.log('element =>',element);
    return (
      <div className='heberComp' key={element.id}>
        <div className="divImg">
          <img className="imgCard" src={element.imgUrl} alt={element.title} />
        </div>
        <div className="divText">
          <h2>{element.title}</h2>
          <h3>{element.description}</h3>
          <h4>{element.tag}</h4>  
        </div>
      </div>
    )
  })
}
