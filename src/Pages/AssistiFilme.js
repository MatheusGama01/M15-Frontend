import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import Header from '../Components/Header/Header.js';
import { token } from "../auth.js";
import './AssistiFilme.css';
import jwtDecode from 'jwt-decode';



function AssistiFilme() {
    const [nome, setNome] = useState("")
    const [diretor, setDiretor] = useState("")
    const [genero, setGenero] = useState("")
    const [opiniao, setOpiniao] = useState("")

    const baseURL = "https://m15-backend.herokuapp.com" || "http://localhost:4000"

    const navigate = useNavigate();
    const decode = jwtDecode(token)
    const id = decode.id

    function cadastroFilme(nome, diretor, genero, opiniao, URL) {

        axios.post(`${URL}/filme/cadastro`, {
            nome,
            diretor,
            genero,
            opiniao,
            perfil: id,
        }, {
            headers: {
                'Authorization': `Basic ${token}`
            }
        }).then(res => {
            console.log(res.data.message)
            alert(JSON.stringify(res.data.message))
            navigate('/')
        }).catch(error => {
            console.log(error)
            alert(JSON.stringify(error.response.data.message))
        })

    };

    const handleSubmitClick = (e) => {
        e.preventDefault();
        cadastroFilme(nome, diretor, genero, opiniao, baseURL);
    };


    return (
        <div className='container-page'>
            <div>
                <Header />
            </div>

            <div className='container'>

                <form id="formulario" className="row g-3" >

                    <h1 className='mt-5'>Cadatrar filme!</h1>

                    <div className="col-12">
                        <label
                            className="form-label"
                        >
                            Nome:
                        </label>

                        <input
                            type="text"
                            className="form-control"
                            value={nome}
                            onChange={e => setNome(e.target.value)}
                        />
                    </div>

                    <div className="col-md-6">
                        <label
                            className="form-label"
                        >
                            Diretor:
                        </label>

                        <input
                            type="text"
                            className="form-control"
                            value={diretor}
                            onChange={e => setDiretor(e.target.value)}
                        />
                    </div>

                    <div className="col-md-6">
                        <label
                            className="form-label"
                        >
                            Gênero:
                        </label>

                        <input
                            type="text"
                            className="form-control"
                            value={genero}
                            onChange={e => setGenero(e.target.value)}
                        />
                    </div>

                    <div className="mb-3">
                        <label
                            className="form-label"
                        >
                            Dê sua opinião:
                        </label>
                        
                        <textarea
                            className="form-control"
                            id="TextareaOpiniao"
                            rows="4"
                            value={opiniao}
                            onChange={e => setOpiniao(e.target.value)}
                        >
                        </textarea>
                    </div>

                    <div className="col-12">
                        <button
                            className="btn btn-primary"
                            onClick={handleSubmitClick}
                        >
                            Cadastrar filme
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default AssistiFilme;