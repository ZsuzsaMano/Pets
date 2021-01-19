import './styles/App.min.css';
import { BrowserRouter as Router,
        Route,
        Switch } from 'react-router-dom';
import Landing from './pages/Landing';
import PetTypeList from './pages/PetTypeList';

function App() {
  return (
    <Router>
    <div className="App">
      <Route path='/'>
     <Landing/>
     </Route>
     <Route path = '/types'>
       <PetTypeList/>
     </Route>
    </div>
    </Router>
  );
}

export default App;
