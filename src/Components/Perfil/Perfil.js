import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import foto_de_perfil from "../../assets/Foto_de_perfil.png";
import voltar from "../../assets/Voltar.png";
import "./Perfil.css";

function Perfil() {
    const [nome, setNome] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const baseURL = process.env.REACT_APP_API_URL || "http://localhost:4000"
    const idPerfil = "628956877f495c1e5ed29425"

    const navigate = useNavigate();

    function getProfile(URL, id) {
        axios.get(`${URL}/perfil/${id}`)
            .then(response => {
                console.log(response.data)
                setNome(response.data.perfil.nome || "")
                setEmail(response.data.perfil.email || "")
                setPassword(response.data.perfil.senha || "")
            })
            .catch(error => {
                console.log(error)
                alert(JSON.stringify(error.response.data.message))
            })
    };

    function updateProfile(nome, email, password, URL, id) {
        axios.put(`${URL}/perfil/atualizar/${id}`, {
            nome,
            email,
            senha: password,
        })
        .then(response => {
            alert(JSON.stringify(response.data.message))
        })
        .catch(error => console.error(error));
    };

    function deleteProfile(URL, id) {
        axios.delete(`${URL}/perfil/apagar/${id}`)
        .then(response => {
          window.confirm(JSON.stringify(response.data.message))
          navigate('/Login');
        })
        .catch(error => console.error(error));
    };

    useEffect(() => {
        getProfile(baseURL, idPerfil);
    }, []);


    const handleDeleteClick = (e) => {
        e.preventDefault();
        deleteProfile(baseURL, idPerfil);
    }

    const handleSaveClick = (e) => {
        e.preventDefault();
        updateProfile(nome, email, password, baseURL, idPerfil);
        getProfile();
    }

    const handleBackClick = () => {
        navigate('/');
    };

    return (
        <div className="container-primario">
            <div className="container-perfil">
                <div className="wrap-perfil">
                    <form className="perfil">

                        <span className="link-home" >
                            <img src={voltar} alt="Voltar" onClick={handleBackClick} />
                        </span>

                        <span className="imagem-perfil">
                            <img src={foto_de_perfil} alt="Foto de perfil" />
                        </span>

                        <div className="wrap-input">
                            <span>Nome:<br></br></span>
                            <input
                                className="input"
                                type="text"
                                placeholder={nome}
                                value={nome}
                                onChange={e => setNome(e.target.value)}
                            />
                        </div>

                        <div className="wrap-input">
                            <span>Email:<br></br></span>
                            <input
                                className="input"
                                type="email"
                                placeholder={email}
                                value={email}
                                onChange={e => setEmail(e.target.value)}
                            />
                        </div>

                        <div className="wrap-input">
                            <span>Senha:<br></br></span>
                            <input
                                className="input"
                                type="password"
                                placeholder={password}
                                value={password}
                                onChange={e => setPassword(e.target.value)}
                            />
                        </div>

                        <div className="container-perfil-btn">
                            
                            <button
                                className="perfil-save-btn"
                                onClick={handleSaveClick}
                            >
                                Salvar Alterações
                            </button>

                            <button
                                className="perfil-delete-btn"
                                onClick={handleDeleteClick}
                            >
                                Apagar perfil
                            </button>

                        </div>

                    </form>
                </div>
            </div>
        </div>
    );
}

export default Perfil;