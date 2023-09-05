import React from 'react';
import Menu from './Menu';


function Navbar() {
  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <Menu />
        {/* <Menu/> */}
      <a className="navbar-brand" href="pangonews_logo">PaNGO News</a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="Navbar" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <div id="clubpress">
          <li className="nav-item active">
            <a className="nav-link" href="club">Club Presse ⌵<span class="sr-only"></span></a>
          </li>
          <div className="dropdown-content">
            <a href="#">Ambassadeur</a>
            <a href="#">Artistes</a>
            <a href="#">Associations</a>
            <a href="#">Entreprises</a>
            <a href="#">Journalistes</a>
            <a href="#">MappeMonde</a>
        </div>
        </div>
          <li className="nav-item">
            <a className="nav-link" href="agenda">Agenda</a>
          </li>
          <div id="nos_services">
          <li className="nav-item">
            <a className="nav-link" href="services">Nos services ⌵ </a>
          </li>
          <div className="dropdown-content">
            <a href="#">Service à la carte</a>
            <a href="#">Formulaires d'abonnements</a>
            <a href="#">Location des bureaux</a>
        </div>
        </div>
          <li className="nav-item">
            <a className="nav-link" href="travaux">Nos travaux</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="formations">Nos formations</a>
          </li>
          <div id="projets">
          <li className="nav-item">
            <a class="nav-link" href="projets">Vos projets ⌵ </a>
          </li>
          <div className="dropdown-content">
            <a href="#">Accompagnement et subventions</a>
            <a href="#">Evènements</a>
            <a href="#">Soutenez nos projets</a>
            <a href="#">Accompagnements et subventions</a>
            <a href="#">Stagiaire</a>
          </div>
          </div>
          <li className="nav-item">
            <a className="nav-link" href="panier">Panier</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="compte">Compte</a>
          </li>
        </ul>
      </div>
    </nav>
    </div>
  );
}

export default Navbar;