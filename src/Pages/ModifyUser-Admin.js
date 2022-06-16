import axios from 'axios';
import { React, useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import Header from '../Components/Header/Header.js';
import { token } from "../auth.js";

function ModifyUser() {
    const [nome, setNome] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [admin, setAdmin] = useState("");


    const baseURL = "http://localhost:4000" || "https://m15-backend.herokuapp.com"
    const idModifyProfile = localStorage.getItem("idModifyProfile")

    const navigate = useNavigate();

    function getProfile(URL, id) {
        axios.get(`${URL}/perfil/${id}`, {
            headers: {
                'Authorization': `Basic ${token}`
            }
        })
            .then(response => {
                console.log(response.data)
                setNome(response.data.perfil.nome || "")
                setEmail(response.data.perfil.email || "")
                setPassword(response.data.perfil.senha || "")
                setAdmin(response.data.perfil.admin || "")
            })
            .catch(error => {
                console.log(error)
                alert(JSON.stringify(error.response.data.message))
            })
    };

    function editarPerfil(nome, email, password, admin) {
        axios.put(`${baseURL}/perfil/atualizar/${idModifyProfile}`, {
            nome,
            email,
            senha: password,
            admin,
        }, {
            headers: {
                'Authorization': `Basic ${token}`
            }
        })
            .then(response => {
                alert(JSON.stringify(response.data.message))
                navigate('/admin')
            })
            .catch(error => console.error(error));
    }

    useEffect(() => {
        getProfile(baseURL, idModifyProfile);
    }, []);


    const handleSubmitClick = (e) => {
        e.preventDefault();
        editarPerfil(nome, email, password, admin);
    }


    return (


        <div className='container-page'>
            <div>
                <Header />
            </div>

            <div className='container'>

                <form className="row g-3" >

                    <h1 className='mt-5'>Editar perfil de {nome}</h1>

                    <div class="col-12">
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

                    <div class="col-12">
                        <label
                            className="form-label"
                        >
                            Email:
                        </label>
                        <input
                            type="email"
                            className="form-control"
                            value={email}
                            onChange={e => setEmail(e.target.value)}
                        />
                    </div>

                    <div class="col-md-8">
                        <label
                            className="form-label"
                        >
                            Senha:
                        </label>
                        <input
                            type="password"
                            className="form-control"
                            value={password}
                            onChange={e => setPassword(e.target.value)}
                        />
                    </div>

                    <div class="col-md-4">
                        <label for="inputState" class="form-label">Permissão de usuário:</label>
                        {admin === true
                            ? <select id="inputState" class="form-select" onChange={e => setAdmin(e.target.value)}>
                                <option value={false}>Comum</option>
                                <option selected defaultValue={true}>Administrador</option>
                            </select>
                            : <select id="inputState" class="form-select" onChange={e => setAdmin(e.target.value)}>
                                <option defaultValue={false}>Comum</option>
                                <option value={true}>Administrador</option>
                            </select>
                        }
                    </div>

                    <div class="col-12">
                        <button
                            className="btn btn-primary"
                            onClick={handleSubmitClick}
                        >
                            Editar
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default ModifyUser;