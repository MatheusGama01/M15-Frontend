import axios from 'axios';
import React, {useState} from 'react';
import { useNavigate } from "react-router-dom";
import Header from '../Header/Header.js';
import './AssistiFilme.css';



function AssistiFilme() {
    const [nome, setNome] =  useState("")
    const [diretor, setDiretor] =  useState("")
    const [genero, setGenero] =  useState("")
    const [opniao, setOpiniao] =  useState("")

    const baseURL = "http://localhost:4000" || "https://m15-backend.herokuapp.com"
    
    const navigate = useNavigate();

    function cadastroFilme(nome,diretor,genero,opniao,URL) {

        axios.post(`${URL}/filme/cadastro`,{
            nome, 
            diretor, 
            genero,
            opniao,
        }).then(res => {
            console.log(res.data.message)
            alert(JSON.stringify(res.data.message))
            navigate('/')
        }).catch(error =>{
            console.log(error)
            alert(JSON.stringify(error.response.data.message))
        })

    }
    const handleSubmitClick = (e) => {
        e.preventDefault();
        cadastroFilme(nome, diretor, genero, opniao, baseURL);
      }
    

    return (


        <div className='container-page'>
            <div>
                <Header />
            </div>

            <div className='container'>

                <form id="formulario" className="row g-3" >

                    <h1 className='mt-5'>Cadatrar filme!</h1>

                    <div class="col-12">
                        <label for="inputNome" className="form-label">Nome:</label>
                        <input type="text" className="form-control" id="inputNome" />
                    </div>

                    <div class="col-md-6">
                        <label for="inputDiretor" className="form-label">Diretor:</label>
                        <input type="text" className="form-control" id="inputDiretor" />
                    </div>

                    <div class="col-md-6">
                        <label for="inputGenero" class="form-label">Gênero:</label>
                        <input type="text" class="form-control" id="inputGenero" />
                    </div>

                    <div class="mb-3">
                        <label className="form-label">Dê sua opinião:</label>
                        <textarea className="form-control" id="TextareaOpniao" rows="4"></textarea>
                    </div>

                    <div class="col-12">
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