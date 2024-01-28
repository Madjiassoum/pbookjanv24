import React from 'react';
import logo from '../../assets/logo/Booki.png'
import {Link, useLocation} from 'react-router-dom';
import './head.css';

function Head() {
  // const location = useLocation();
  const location = useLocation();

  return (
    <>
      <div className="header">
        <div className="logo-header">
          <img src={logo} className="logo-bouki" alt="logo" />
        </div>

        <div className="div-header">
          <Link
            to="/Hebergement"
            className={
              location.pathname === '/Hebergement'
                ? 'divHeaderLink-home  soulignement-Item'
                : 'divHeaderLink-home  '
            }
          >
            Hébergements
          </Link>
          <Link
            to="/Activites"
            className={
              location.pathname === '/Activites'
                ? 'divHeaderLink-about  soulignement-Item'
                : 'divHeaderLink-about  '
            }
          >
            Activités
          </Link>
        </div>
      </div>
    </>
  );







  // return (
  //   <div className='header-container'>
  //     <div className='logo-header'>
  //       <img src={logo} alt='logo booki' id='logo'/>
  //     </div>
  //     <nav>
  //       <Link to="/Hebergement" className='heberge' id='Heberge' >Hébergements</Link>
  //       <Link to="/Activites" className='activite'>Activités</Link>
  //     </nav>
  //   </div>
  // )
}

export default Head;