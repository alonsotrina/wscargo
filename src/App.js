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
          <Route path="/perfil_cliente" exact>
            <Perfil_cliente/>
          </Route>
          <Route path="/seguimiento_servicio" exact>
            <Seguimiento_servicio />
          </Route>
      </Switch>
    </Router>
  );
}

export default App;
