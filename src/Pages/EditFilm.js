import axios from 'axios';
import { React, useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import Header from '../Components/Header/Header.js';
import { token } from "../auth.js";

function EditFilm(){

    const [nome, setNome] = useState("")
    const [diretor, setDiretor] = useState("")
    const [genero, setGenero] = useState("")
    const [opiniao, setOpiniao] = useState("")

    const baseURL = "https://m15-backend.herokuapp.com" || "http://localhost:4000"
    const idModifyFilm = localStorage.getItem("idModifyFilm")

    const navigate = useNavigate();

    function getFilm(URL, id) {
        axios.get(`${URL}/filme/${id}`, {
            headers: {
                'Authorization': `Basic ${token}`
            }
        })
            .then(response => {
                console.log(response.data)
                setNome(response.data.movies.nome || "")
                setDiretor(response.data.movies.diretor || "")
                setGenero(response.data.movies.genero || "")
                setOpiniao(response.data.movies.opiniao || "")
            })
            .catch(error => {
                console.log(error)
                alert(JSON.stringify(error.response.data.message))
            })
    };

    function editFilm(nome, diretor, genero, opiniao) {
        axios.put(`${baseURL}/filme/atualizar/${idModifyFilm}`, {
            nome,
            diretor,
            genero,
            opiniao,
        }, {
            headers: {
                'Authorization': `Basic ${token}`
            }
        })
            .then(response => {
                alert(JSON.stringify(response.data.message))
                navigate('/')
            })
            .catch(error => console.error(error));
    };

    useEffect(() => {
        getFilm(baseURL, idModifyFilm);
    }, []);

    const handleSubmitClick = (e) => {
        e.preventDefault();
        editFilm(nome, diretor, genero, opiniao);
    };


    return(
        <div className='container-page'>
            <div>
                <Header />
            </div>

            <div className='container'>

                <form id="formulario" className="row g-3" >

                    <h1 className='mt-5'>Editar filme!</h1>

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
                            Editar filme
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
};

export default EditFilm;