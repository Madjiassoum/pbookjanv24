import React from 'react';
import logo from '../../assets/logo/Booki.png'
import {Link} from 'react-router-dom';
import './head.css';

function Head() {
  return (
    <div className='header-container'>
      <div className='logo-header'>
         <img src={logo} alt='logo booki' id='logo'/>
      </div>
               <nav>           
                    <Link
            to="/Hebergement"
            className='heberge' id='Heberge'
              
          >
            Hébergements
          </Link>
          <Link
            to="/Activites"
            className='activite'
          >
            Activités
          </Link>
          </nav>
      
    </div>
  )
}

export default Head;