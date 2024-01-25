import React from 'react';
import './card.css';
import SearchAndFilter from '../search-and-filter/SearchAndFilter';
import Heberge from '../heberge/Heberge';
import Activite from '../activites/Activite';
import Popu from '../populaire/Popu';

function Card() {
  return (
    <div className='card'>
      <SearchAndFilter/>
      <div className='heberge-pop'>
      <Heberge/>
      <Popu/>
      </div>
      <Activite/>
    </div>
  )
}

export default Card;