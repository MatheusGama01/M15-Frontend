import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Foto_de_perfil from "../../assets/Foto_de_perfil.png";
import jwtDecode from 'jwt-decode';
import { token } from '../../auth.js';
import "./Header.css"

function Header() {

    const [admin, setAdmin] = useState("")
    const [nome, setNome] = useState("")

    const decode = jwtDecode(token)
    const idPerfil = decode.id
    const baseURL = "https://m15-backend.herokuapp.com" || "http://localhost:4000"

    const navigate = useNavigate();

    const redirectToHome = () => {
        navigate('/')
    }

    const redirectToPerfil = () => {
        navigate('/perfil')
    }

    const redirectToAdmin = () => {
        navigate('/admin')
    }

    function getProfile(URL, id){
        axios.get(`${URL}/perfil/${id}`,)
        .then(response => {
            console.log(response.data)
            setAdmin(response.data.perfil.admin || "")
            setNome(response.data.perfil.nome || "")
        })
        .catch(error => {
            console.log(error)
            alert(JSON.stringify(error.response.data.message))
        })
    }

    useEffect(() => {
        getProfile(baseURL, idPerfil)
    }, [])


    return (
        <div className="header">
            <nav className="container">
                <div className="item">
                    <div onClick={redirectToHome}><strong>M15</strong></div>
                </div>

                <div className='container-usuario-redirect'>
                    {admin === true
                        ? <div className="item-perfis">
                            <div onClick={redirectToAdmin}>
                                Perfis
                            </div>
                        </div>
                        : <></>}

                    <div className="item-usuario" onClick={redirectToPerfil}>
                        {nome}
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Header;