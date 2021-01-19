import './styles/App.min.css';
import { BrowserRouter as Router,
        Route,
        Switch } from 'react-router-dom';
import Landing from './pages/Landing';
import PetTypeList from './pages/PetTypeList';
import Navbar from './components/Navbar';
function App() {
  return (
    <Router>
    <div className="App">
      <Navbar/>
      <Switch>
      <Route exact path='/'>
     <Landing/>
     </Route>
     <Route path = '/types'>
       <PetTypeList/>
     </Route>
     </Switch>
    </div>
    </Router>
  );
}

export default App;
