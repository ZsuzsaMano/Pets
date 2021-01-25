import './styles/App.min.css';
import { BrowserRouter as Router,
        Route,
        Switch } from 'react-router-dom';
import Landing from './pages/Landing';
import PetTypeList from './pages/PetTypeList';
import LoginReg from './pages/LoginReg';
import BreedDetails from './pages/BreedDetails';
import Navbar from './components/Navbar';
import DataContextProvider from './context/DataContext';
import LoginContextProvider from './context/LoginContext';

function App() {
  return (
    <Router>
    <div className="App">
      <LoginContextProvider>
          <DataContextProvider>
      <Navbar/>
      <Switch>
      <Route exact path='/'>
        <Landing/>
      </Route>
      <Route path = '/login'>
        <LoginReg/>
      </Route>
        <Route path = '/types'>
          <PetTypeList/>
        </Route>
        <Route path = '/breeds/:type'>
          <BreedDetails/>
        </Route>
        </Switch>
      </DataContextProvider>
     </LoginContextProvider>
    </div>
    </Router>
  );
}

export default App;
