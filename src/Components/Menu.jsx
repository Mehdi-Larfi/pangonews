import React, { useState } from 'react';
import { DragHandle } from '@mui/icons-material';


function Menu() {
  const [isOpen, setIsOpen] = useState(false);


  // class DropdownMenu extends Component {
  //   constructor(props) {
  //     super(props);
  //     this.state = {
  //       isOpen: false,
  //     };
  //   }

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  
  //   render() {
  //     return (
  //       <div className="dropdown">
  //         <button className="dropdown-toggle" onClick={this.toggleMenu}>
  //           Menu
  //         </button>
  //         {this.state.isOpen && (
  //           <ul className="dropdown-menu">
  //             <div id="clubpress">
  //           <li class="nav-item active">
  //             <a class="nav-link" href="club">Club Presse ⌵<span class="sr-only"></span></a>
  //           </li>
  //           <div class="dropdown-content">
  //             <a href="#">Ambassadeur</a>
  //             <a href="#">Artistes</a>
  //             <a href="#">Associations</a>
  //             <a href="#">Entreprises</a>
  //             <a href="#">Journalistes</a>
  //             <a href="#">MappeMonde</a>
  //         </div>
  //         </div>
  //           <li className="nav-item">
  //             <a className="nav-link" href="agenda">Agenda</a>
  //           </li>
  //           <div id="nos_services">
  //           <li className="nav-item">
  //             <a className="nav-link" href="services">Nos services ⌵ </a>
  //           </li>
  //           <div className="dropdown-content">
  //             <a href="#">Service à la carte</a>
  //             <a href="#">Formulaires d'abonnements</a>
  //             <a href="#">Location des bureaux</a>
  //         </div>
  //         </div>
  //           <li className="nav-item">
  //             <a className="nav-link" href="travaux">Nos travaux</a>
  //           </li>
  //           <li className="nav-item">
  //             <a className="nav-link" href="formations">Nos formations</a>
  //           </li>
  //           <div id="projets">
  //           <li className="nav-item">
  //             <a className="nav-link" href="projets">Vos projets ⌵ </a>
  //           </li>
  //           <div className="dropdown-content">
  //             <a href="#">Accompagnement et subventions</a>
  //             <a href="#">Evènements</a>
  //             <a href="#">Soutenez nos projets</a>
  //             <a href="#">Accompagnements et subventions</a>
  //             <a href="#">Stagiaire</a>
  //           </div>
  //           </div>
  //           <li className="nav-item">
  //             <a className="nav-link" href="panier">Panier</a>
  //           </li>
  //           <li className="nav-item">
  //             <a className="nav-link" href="compte">Compte</a>
  //           </li>
  //           </ul>
  //           )}
  //           </div>
  //         );
  //       }
  //     }
  return (
    <div>
      <button onClick={toggleMenu} className='menu'><DragHandle /></button>
      {isOpen && (
        <ul className="menu-items">
          <div id="clubpress">
            <li class="nav-item active">
              <a class="nav-link" href="club">Club Presse ⌵<span class="sr-only"></span></a>
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
              <a class="nav-link" href="agenda">Agenda</a>
            </li>
            <div id="nos_services">
            <li class="nav-item">
              <a class="nav-link" href="services">Nos services ⌵ </a>
            </li>
            <div class="dropdown-content">
              <a href="#">Service à la carte</a>
              <a href="#">Formulaires d'abonnements</a>
              <a href="#">Location des bureaux</a>
          </div>
          </div>
            <li class="nav-item">
              <a class="nav-link" href="travaux">Nos travaux</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="formations">Nos formations</a>
            </li>
            <div id="projets">
            <li class="nav-item">
              <a class="nav-link" href="projets">Vos projets ⌵ </a>
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
              <a class="nav-link" href="panier">Panier</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="compte">Compte</a>
            </li>
        </ul>
      )}
    </div>
  );
} 

export default Menu;