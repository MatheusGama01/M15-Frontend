import React from 'react';
import HomePage from '../Components/Home/HomePage.js';
import Header from '../Components/Header/Header.js';
import { token } from "../auth.js";
import "./AdminProfilePage.css";



function Home() {
  
  console.log(`Em home o token é: ${token}`)

  return (
    <div className="container-admin-page">
      <div className="admin-profile-page">
        <header>
          <Header />
        </header>

        <div className="content">
          <div className="card-perfil">
            <HomePage />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home;