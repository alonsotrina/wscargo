import React from "react";
import 'materialize-css/dist/css/materialize.min.css'
import './scss/app.scss'

// nue componets
import SideBar from "./components/layout/SideBar";

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import Home from './pages/Home'
import Perfil_cliente from './pages/Perfil_cliente'
import Seguimiento_servicio from './pages/Segumineto_servicio'


/*************/
import Seguimiento from './pages/seguimiento/Seguimiento'
import Perfil from "./pages/perfil/Perfil";




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
