import React, { useEffect, useState } from 'react';
import axios from 'axios';
import jwtDecode from 'jwt-decode';
import { useNavigate } from 'react-router-dom';
import { removerToken } from '../../auth.js'
import { token } from '../../auth.js';
import "./Header.css"

function Header() {

    const [admin, setAdmin] = useState("")
    const [nome, setNome] = useState("")

    const decode = jwtDecode(token)
    const idPerfil = decode.id
    const baseURL = "http://localhost:4000" || "https://m15-backend.herokuapp.com"

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

    const redirectToLogin = () => {
        removerToken()
        navigate('/login')
    }

    function getProfile(URL, id){
        axios.get(`${URL}/perfil/${id}`, {
            headers: {
              'Authorization': `Basic ${token}`
            }
          })
        .then(response => {
            console.log(response.data)
            setAdmin(response.data.perfil.admin || "")
            setNome(response.data.perfil.nome || "")
        })
        .catch(error => {
            console.log(error)
            alert(JSON.stringify(error.response.data.message))
        })
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
                <div className="nome-app">
                    <div onClick={redirectToHome}><strong>M15</strong></div>
                </div>

                    <div class="dropdown">
                    <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        {nome}
                    </button>
                    <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                        <div className="item-usuario" onClick={redirectToPerfil}>Meu perfil</div>
                        <div className="item-usuario" onClick={redirectToLogin}>Sair</div>
                        <div className='container-usuario-redirect'>
                            {admin === true
                                ? <div className="item-perfis">
                                    <div onClick={redirectToAdmin}>
                                        Usuários
                                    </div>
                                </div>
                                : <></>}
                    </div>
                </div>

                <script src='http://code.jquery.com/jquery-2.1.3.min.js'></script>
                <script src="js/jquery-3.6.0.min.js"></script>
                <script src="js/bootstrap.bundle.js"></script>
                <script src="js/popper.min.js"></script>
                <script src="js/bootstrap.min.js"></script>
                </div>
            </nav>
        </div>
    )
}

export default Header;