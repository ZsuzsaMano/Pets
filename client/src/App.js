import React, { useContext } from "react";
import "./styles/App.min.css";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch
} from "react-router-dom";
import PostBreed from "./components/PostBreed";
import Landing from "./pages/Landing";
import Profile from "./pages/Profile";
import PetTypeList from "./pages/PetTypeList";
import LoginReg from "./pages/LoginReg";
import BreedDetails from "./pages/BreedDetails";
import Navbar from "./components/Navbar";
import DataContextProvider from "./context/DataContext";
import { LoginContext } from "./context/LoginContext";

function App() {
  const { isLoggedIn } = useContext(LoginContext);
  return (
    <Router>
      <div className="App">
        <DataContextProvider>
          <Navbar />
          <Switch>
            <Route exact path="/">
              <Landing />
            </Route>
            <Route
              exact
              path="/login"
              render={() => {
                return !isLoggedIn ? <LoginReg /> : <Redirect to="/types" />;
              }}
            />
            <Route
              exact
              path="/addPet"
              render={() => {
                return isLoggedIn ? <PostBreed /> : <Redirect to="/login" />;
              }}
            />
            <Route path="/types">
              <PetTypeList />
            </Route>
            <Route path="/profile">
              <Profile />
            </Route>
            <Route path="/breeds/:typeParam">
              <BreedDetails />
            </Route>
          </Switch>
        </DataContextProvider>
      </div>
    </Router>
  );
}

export default App;
