import './styles/App.min.css';
import { BrowserRouter as Router,
        Route,
        Switch } from 'react-router-dom';
import Landing from './pages/Landing';
import PetTypeList from './pages/PetTypeList';
import Login from './pages/Login';
import Register from './pages/Register';
import BreedDetails from './pages/BreedDetails';
import Navbar from './components/Navbar';
import DataContextProvider from './context/DataContext';
import LoginContextProvider from './context/LoginContext';

function App() {
  return (
    <Router>
    <div className="App">
      <LoginContextProvider>
      <Navbar/>
      <Switch>
      <Route exact path='/'>
        <Landing/>
      </Route>
      <DataContextProvider>
        <Route path = '/types'>
          <PetTypeList/>
        </Route>
        <Route path = '/breeds'>
          <BreedDetails/>
        </Route>
      </DataContextProvider>
      <Route path = '/login'>
        <Login/>
      </Route>
      <Route path = '/register'>
        <Register/>
      </Route>
     </Switch>
     </LoginContextProvider>
    </div>
    </Router>
  );
}

export default App;
