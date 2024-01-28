import React from 'react';
import './foot.css';

function Foot() {
  return (
    <div className='footer'>


 {/* Il n'y a pas de titre ici ni container */}
<div className="sousfoot"> 
    <h3>A propos</h3>                              
    <h4><a href="#o"> Fonctionnement du site </a></h4>
    <h4><a href="#o"> Conditions générales de vente </a></h4>
    <h4><a href="#o"> Données et confidentialité </a></h4>
</div>

<div className="sousfoot">
    <h3>Nos hébergements</h3>                              
    <h4><a href="#o"> Charte qualité </a></h4>
    <h4><a href="#o"> Soumettre votre hôtel </a></h4> 
</div>

<div className="sousfoot">
    <h3> Assistance </h3>                                            
    <h4><a href="#o"> Centre d'aide </a></h4>
    <h4><a href="#o"> Nous contacter </a></h4> 
</div>  
</div>
    
  )
}

export default Foot;