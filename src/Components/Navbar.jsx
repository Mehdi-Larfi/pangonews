import React from 'react';
import TemporaryDrawer from './Menudrawer';

function Navbar() {
  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <TemporaryDrawer />
        <a class="navbar-brand" href="/">
          <img src="assets/Pangoicon.png" alt="PANGONEWS" />
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="Navbar"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <div id="clubpress">
              <li class="nav-item active">
                <a class="nav-link" href="club">
                  Club Presse ⌵<span class="sr-only"></span>
                </a>
              </li>
              <div class="dropdown-content">
                <a href="#">Ambassadeur</a>
                <a href="#">Artistes</a>
                <a href="#">Associations</a>
                <a href="#">Entreprises</a>
                <a href="#">Journalistes</a>
                <a href="#">MappeMonde</a>
              </div>
            </div>
            <li class="nav-item">
              <a class="nav-link" href="agenda">
                Agenda
              </a>
            </li>
            <div id="nos_services">
              <li class="nav-item">
                <a class="nav-link" href="services">
                  Nos services ⌵{" "}
                </a>
              </li>
              <div class="dropdown-content">
                <a href="#">Service à la carte</a>
                <a href="#">Formulaires d'abonnements</a>
                <a href="#">Location des bureaux</a>
              </div>
            </div>
            <li class="nav-item">
              <a class="nav-link" href="travaux">
                Nos travaux
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="formations">
                Nos formations
              </a>
            </li>
            <div id="projets">
              <li class="nav-item">
                <a class="nav-link" href="projets">
                  Vos projets ⌵{" "}
                </a>
              </li>
              <div class="dropdown-content">
                <a href="#">Accompagnement et subventions</a>
                <a href="#">Evènements</a>
                <a href="#">Soutenez nos projets</a>
                <a href="#">Accompagnements et subventions</a>
                <a href="#">Stagiaire</a>
              </div>
            </div>
            <li class="nav-item">
              <a class="nav-link" href="panier">
                Panier
              </a>
            </li>
            <li class="nav-item compte">
              <a class="" href="compte">
                Compte ↗
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
