import Navbar from './Components/Navbar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Agenda from './Components/Agenda';
import Club from './Components/Club';
import Comptes from './Components/Comptes';
import Formations from './Components/Formations';
import Panier from './Components/Panier';
import Projets from './Components/Projets';
import Services from './Components/Services';
import Travaux from './Components/Travaux';
import Menu from './Components/Menu'
import Menudrawer from './Components/Menudrawer';
import Accueil from './Components/Accueil';

function App() {
  return (
    <Router>
      <div>
        {/* <Menu /> */}
        <Navbar />
        
        <Routes>
          <Route exact path="/" element={<Accueil/>} />
          <Route exact path="/club" element={<Club/>} />
          <Route exact path="/agenda" element={<Agenda/>} />
          <Route exact path="/services" element={<Services/>} />
          <Route exact path="/travaux" element={<Travaux/>} />
          <Route exact path="/formations" element={<Formations/>} />
          <Route exact path="/projets" element={<Projets/>} />
          <Route exact path="/panier" element={<Panier/>} />
          <Route exact path="/comptes" element={<Comptes/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
