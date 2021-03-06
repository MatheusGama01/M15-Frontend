import axios from 'axios';
import React, { useState, useEffect } from "react";
import Lista from '../Components/Home/ListaFilmes.js'
import Header from '../Components/Header/Header.js';
import { useNavigate } from "react-router-dom";
import { token } from "../auth.js";
import "./home.css";



function Home() {

  console.log(`Em home o token é: ${token}`)

  const [filme, setFilme] = useState([])

  const baseURL = "https://m15-backend.herokuapp.com" || "http://localhost:4000"

  const navigate = useNavigate();

  function getFilm(URL) {
    axios.get(`${URL}/filme`, {
      headers: {
        'Authorization': `Basic ${token}`
      }
    })
      .then(response => {
        console.log(response.data)
        setFilme(response.data || null)
      })
      .catch(error => {
        console.log(error)
        alert(JSON.stringify(error.response.data.message))
        alert(baseURL)
      })
  };


  function removeFilm(id) {
    axios.delete(`${baseURL}/filme/apagar/${id}`, {
      headers: {
        'Authorization': `Basic ${token}`
      }
    })
      .then(response => {
        window.confirm(JSON.stringify(response.data.message))
        getFilm(baseURL);
      })
      .catch(error => {
        console.error(error)
        alert(JSON.stringify(error.response.data.message))
      });
  };


  useEffect(() => {
    getFilm(baseURL)
  }, [])

  function redirectToRegisterFilm() {
    navigate('/filme/cadastro')
  }

  return (
    <div className="container-admin-page">
      <div className="admin-profile-page">

        <header>
          <Header />
        </header>

        <div className="content">
          <div className='d-flex justify-content-between mb-2'>

            <h4>
              Meus filmes:
            </h4>

            <div className='cadastrar-filme'>

              <button
                className="btn btn-sm btn-outline-primary me-2"
                onClick={redirectToRegisterFilm}
              >
                + Assisti a um filme
              </button>

            </div>

          </div>

          <div className='container-home mt-3'>

            <div className="row row-cols-1 row-cols-md-3 g-4">
              {filme.map(f =>
                <Lista key={f.id} filme={f} deleteFilm={removeFilm} />
              )}
            </div>
            
          </div>

        </div>
      </div>
    </div>
  )
}

export default Home;