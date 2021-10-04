import React from "react";
import 'materialize-css/dist/css/materialize.min.css'
import './scss/app.scss'
import SideBar from "./components/layout/nav/SideBar";
import Home from './pages/home/Home'
import Seguimiento from './pages/seguimiento/Seguimiento'
import Perfil from "./pages/perfil/Perfil";

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
  return (
    <Router>
      
      <SideBar />

      <Switch>
        <Route path="/" exact>
              <Home/>
          </Route>
          <Route path="/home" exact>
              <Home/>
          </Route>
          <Route path="/seguimiento" exact>
            <Seguimiento />
          </Route>
          <Route path="/perfil" exact>
            <Perfil />
          </Route>
      </Switch>
    </Router>
  );
}

export default App;
