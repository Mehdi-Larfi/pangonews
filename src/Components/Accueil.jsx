import React from 'react'
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';
import Editorial from './Editorial';

function Accueil() {
  return (
    <div class="accueil">
    <div class="arrierePlan">
      <div class="paragraphpeDebut">
        <div class="decouvertePangonews"> <p><PlayCircleOutlineIcon /> Découvrez panonews</p></div>
      <div>
        <h2>Le média des organisations <br />et des entreprises</h2>
        <p>Nous sommes une plate-forme de services dédiée aux ONG <br />et le premier média des associations et entreprises.</p>
        </div>
      <div>
        <p><button class="animInscription">S'inscrire</button> <span>Faire un don › </span></p>
      </div>
      
      </div>
      <div class="iconesBougeante">
      <img src="https://placehold.co/50x50" alt="" class="icon1"/>
      <img src="https://placehold.co/50x50" alt="" class="icon2"/>
      <img src="https://placehold.co/50x50" alt="" class="icon3"/>
      <img src="https://placehold.co/50x50" alt="" class="icon4"/>
      <img src="https://placehold.co/50x50" alt="" class="icon5"/>
      <img src="https://placehold.co/50x50" alt="" class="icon6"/>
      <img src="https://placehold.co/50x50" alt="" class="icon7"/>
      <img src="https://placehold.co/50x50" alt="" class="icon8"/>
      </div>
    </div>
    <Editorial />
    </div>
  )
}

export default Accueil