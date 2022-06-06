import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Login from './Components/Login/Login.js'
import Home from "./Pages/Home.js";
import Perfil from "./Pages/Perfil.js";
import PerfilAdmin from "./Pages/AdminProfilePage.js";
import RegisterForm from "../src/Components/Register/RegisterForm.js"
import PrivateRoute from './Components/PrivateRoute.js';
import { history } from './history.js';

function App() {
  return (
    <Router history={ history }>
      <Routes>
        <Route path='/Login' element={<Login />} />

        <Route path='/' element={<Home />} />

        <Route path='/Perfil' element={<Perfil />} />

        <Route path='/Admin' element={<PerfilAdmin />} />

        <Route path='/Cadastro' element={<RegisterForm />} />
      </Routes>
    </Router>
  );
}

export default App;