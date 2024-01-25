import React from 'react'
import './searchAndFilter.css'

export default function SearchAndFilter() {
    return (
        <div className="safil">
            {/* Div titre h1 et son paragraphe */}
            <div className="div-title">
                <h1>Trouvez votre hébergement pour des vacances de rêve</h1>
                <p>En plein centre-ville ou en pleine nature</p>
            </div>

            {/* zone search and filter */}

            {/* zone de filter */}
            <form method="post" action="#" className="choix">
                {/* div de recherche de la ville */}
                <div className="choix-premier">
                    <label>
                        <i className="fas fa-map-marker-alt"></i>
                    </label>
                    <input
                        type="search"
                        value="Marseille, France"
                        id="gsearch"
                    />
                    <button className='fasear'>
                        <i className="fas fa-search"></i>
                    </button>
                    <button className="button bouton" type="submit">
                        <span>
                        Rechercher
                        </span>
                    </button>
                </div>

                <div className="choix-deuxieme">
                    <h3 className="label-filtre">Filtres</h3>
                    <ul className="mes-li-container">
                        <li className="unit-filtre">
                            <input
                                name="type-hebergement"
                                id="economique"
                                type="checkbox"
                                value="economique"
                            />
                            <label htmlFor="economique" className="filter-option">
                                <span
                                    aria-hidden="true"
                                    className="filter-option__icon"
                                >
                                    <i className="fas fa-money-bill-wave-alt"></i>
                                </span>
                                <span className="filter-option__label">
                                    Économique
                                </span>
                            </label>
                        </li>

                        <li className="unit-filtre">
                            <input
                                name="type-hebergement"
                                id="familial"
                                type="checkbox"
                                value="familial"
                            />
                            <label htmlFor="familial" className="filter-option">
                                <span
                                    aria-hidden="true"
                                    className="filter-option__icon"
                                >
                                    <i className="fas fa-child"></i>
                                </span>
                                <span className="filter-option__label">
                                    Familial
                                </span>
                            </label>
                        </li>

                        <li className="unit-filtre">
                            <input
                                name="type-hebergement"
                                id="romantique"
                                type="checkbox"
                                value="romantique"
                            />
                            <label htmlFor="romantique" className="filter-option">
                                <span
                                    aria-hidden="true"
                                    className="filter-option__icon"
                                >
                                    <i className="fas fa-heart"></i>
                                </span>
                                <span className="filter-option__label">
                                    Romantique
                                </span>
                            </label>
                        </li>

                        <li className="unit-filtre">
                            <input
                                name="type-hebergement"
                                id="animal"
                                type="checkbox"
                                value="Animaux domestiques"
                            />
                            
                            <label htmlFor="animal" className="filter-option">
                                <span
                                    aria-hidden="true"
                                    className="filter-option__icon"
                                >
                                    <i className="fa-solid fa-sack-dollar"></i>
                                </span>
                                <span className="filter-option__label">
                                    Nos pépites
                                </span>
                            </label>
                        </li>
                    </ul>
                </div>
            </form>
            {/* Point d'information des filtres */}
            <div className="logement-info">
                <p>
                    {' '}
                    <i className="fas fa-info"></i>
                    <span>
                        Plus de 500 logements sont disponibles dans cette ville
                    </span>
                </p>
            </div>
        </div>
    )
}
