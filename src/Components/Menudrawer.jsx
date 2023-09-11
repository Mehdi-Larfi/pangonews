import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import AppsIcon from '@mui/icons-material/Apps';
import MenuIcon from '@mui/icons-material/Menu';
import Navbar from './Navbar';
//import Pangoicon from 'src/assets/Pangoicon.png'


export default function TemporaryDrawer() {
  const [state, setState] = React.useState({
    Menu: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 300 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {['Club Presse'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <AppsIcon /> : <AppsIcon />}
              </ListItemIcon>
              <ListItemText>
                <div>
      <nav class=" navbar-expand-lg navbar-light bg-light">
        <a class="navbar-brand" href="/"><img src='src\assets\Pangoicon.png' alt="PANGO NEWS" /></a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="Navbar" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="">
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
        </div>
      </nav></div>
      </ListItemText>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      
    </Box>
  );

  return (
    <div>
      {['Menu'].map((anchor) => (
        <React.Fragment key={anchor}>
          <Button onClick={toggleDrawer(anchor, true)}><MenuIcon class='roundIcon' /></Button>
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
}