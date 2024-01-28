import React from 'react';
import './accueil.css';
import Heberge from '../../components/heber/Heberge';
import PopulaireComp from '../../components/popolaire/PopulaireComp';
import SearchAndFilter from '../../components/search-and-filter/SearchAndFilter';
import ActiviteComp from '../../components/activvite/ActiviteComp';

export default function Accueil() {
    return (
        <div className='div-accueil'>
            <div className="searFil"><SearchAndFilter/></div>
            
            <div className="hebPop">
                <div className="heb">
                    <h3>Hébergements à Marseille</h3>
                    <div className="hebCardsContainer">
                       <Heberge/>
                    </div>
                <div className='afficherPlus'>Afficher plus</div>
                </div>
                <div className="pop">
                    <h2>Les plus populaire<i class="fas fa-chart-line"></i></h2>
                    <div className="popCardsContainer">
                      <PopulaireComp/>
                    </div>
                </div>
            </div>
            


            <div className="act">
                <h3>Activités à Marseille</h3>
                <div className='actContainerAccueil'>
                    <ActiviteComp />
                </div>
            </div>
        </div>
        )
}
