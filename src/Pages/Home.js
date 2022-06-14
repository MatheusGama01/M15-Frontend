import axios from 'axios';
import React, { useState, useEffect } from "react";
import Lista from '../Components/Home/ListaFilmes.js'
import Header from '../Components/Header/Header.js';
import { useNavigate } from "react-router-dom";
import { token } from "../auth.js";
import "./AdminProfilePage.css";



function Home() {
  
  console.log(`Em home o token é: ${token}`)

  const [filme, setFilme] = useState([])
    
  const baseURL = "https://m15-backend.herokuapp.com" || "http://localhost:4000"
  let qntFilme = "0"

  const navigate = useNavigate();
  
  function getFilme(URL) {
      axios.get(`${URL}/filme`)
          .then(response => {
              console.log(response.data)
              setFilme(response.data || null)
              qntFilme = response.data.length
              console.log(`qntFilme = ${qntFilme}`)
          })
          .catch(error => {
              console.log(error)
              alert(JSON.stringify(error.response.data.message))
              alert(baseURL)
          })
  };


  function removeFilme(id){
      axios.delete(`${baseURL}/filme/apagar/${id}`)
      .then(response => {
          window.confirm(JSON.stringify(response.data.message))
          getFilme(baseURL);
      })
      .catch(error => {
          console.error(error)
          alert(JSON.stringify(error.response.data.message))
      });
  }


  useEffect(() => {
      getFilme(baseURL)
  }, [])

  function redirectToRegisterFilm(){
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
            <div className='contagem-filmes'>
              Filmes assistidos: {qntFilme} 
            </div>
            <div className='cadastrar-filme' onClick={redirectToRegisterFilm} >
              + Assisti a um filme
            </div>
          </div>
          <div className='filmes-assistidos'>
            {filme.map(f => <Lista filme={f} deleteFilm={removeFilme} />)}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home;