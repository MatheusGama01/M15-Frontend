import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './Components/Login/Login.js'
import Home from "./Pages/Home.js";
import Perfil from "./Pages/Perfil.js";
import PerfilAdmin from "./Pages/AdminProfilePage.js";
import RegisterForm from "../src/Components/Register/RegisterForm.js";
import AssistiFilme from "./Pages/AssistiFilme.js";
import ModifyUser from './Pages/ModifyUser-Admin.js';
import ProtectedRoute from "./ProtectedRoute.js";
import { token } from "./auth.js";
import { history } from './history.js';


function App() {

  console.log(`Em app o token é: ${token}`);

  return (
    <Router history={history}>
      <Routes>
        <Route path='/login' element={<Login />} />

        <Route path='/cadastro' element={<RegisterForm />} />

        <Route path='/' element={
          <ProtectedRoute token={token}  >
            <Home token={token} />
          </ProtectedRoute>
        } />

        <Route path='/perfil' element={
          <ProtectedRoute token={token}>
            <Perfil token={token} />
          </ProtectedRoute>
        } />

        <Route path='/admin' element={
          <ProtectedRoute token={token}>
            <PerfilAdmin token={token} />
          </ProtectedRoute>
        } />

        <Route path='/admin/perfil' element={
          <ProtectedRoute token={token}>
            <ModifyUser token={token} />
          </ProtectedRoute>
        } />

        <Route path='/filme/cadastro' element={
          <ProtectedRoute token={token}  >
            <AssistiFilme token={token} />
          </ProtectedRoute>
        } />

      </Routes>
    </Router>
  );
}

export default App;