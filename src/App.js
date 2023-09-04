import Navbar from './Components/Navbar';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Agenda from './Components/Agenda';
import Club from './Components/Club';
import Comptes from './Components/Comptes';
import Formations from './Components/Formations';
import Panier from './Components/Panier';
import Projets from './Components/Projets';
import Services from './Components/Services';
import Travaux from './Components/Travaux';

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Switch>
          <Route path="/club" exact component={Club} />
          <Route path="/agenda" component={Agenda} />
          <Route path="/services" component={Services} />
          <Route path="/travaux" component={Travaux} />
          <Route path="/formations" component={Formations} />
          <Route path="/projets" component={Projets} />
          <Route path="/panier" component={Panier} />
          <Route path="/comptes" component={Comptes} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
