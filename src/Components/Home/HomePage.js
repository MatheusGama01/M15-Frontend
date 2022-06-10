import { React, useEffect, useState } from 'react';
import './HomePage.css';
import Contagem from './ContagemFilmes.js';
import Lista from './ListaFilmes.js';
import axios from 'axios';

function HomePage() {
    const [nome, setNome] = useState("")
    const [diretor, setDiretor] = useState("")
    const [genero, setGenero] = useState("")
    const [filme, setFilme] = useState([])
    
    const baseURL =  "http://localhost:4000" || "https://m15-backend.herokuapp.com" 
    const qntFilme = ""

    function getFilme(URL){
        axios.get(`${URL}/filme`)
            .then(response => {
                console.log(response.data)
                qntFilme = response.data.length
                console.log(qntFilme)
                setNome(response.data.nome)
                setDiretor(response.data.diretor)
                setGenero(response.data.genero)
                setFilme(response.data)
            })
            .catch(error => {
                console.log(error)
                alert(JSON.stringify(error.response.data.message))
            })
    }

    function deleteFilm(id){
            axios.delete(`${baseURL}/filme/apagar/${id}`).then(res=> {
                alert(JSON.stringify(res.data.message))
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

    return (
       <div className='container-homePage'>
            <div className='page-home'>
                <div className='contagem-filmes'>
                    {`Filmes assistidos: ${qntFilme}`}
                </div>
                <div className='filmes-assistidos'>
                    {filme.map(f => <Lista filme={f} deleteFilm={deleteFilm} />)}
                </div>
            </div>
       </div>
    )
}

export default HomePage;