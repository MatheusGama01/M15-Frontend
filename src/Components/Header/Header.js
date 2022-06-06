import React from 'react';
import { useNavigate } from 'react-router-dom';
import Foto_de_perfil from "../../assets/Foto_de_perfil.png"
import "./Header.css"

function Header() {
    const navigate = useNavigate();

    const redirectToHome = () => {
        navigate('/')
    }

    const redirectToPerfil = () => {
        navigate('/perfil')
    }

    return (
        <div className="header">
            <nav className="container">
                <div className="item">
                    <div onClick={redirectToHome}><strong>M15</strong></div>
                </div>


                <div className="item" onClick={redirectToPerfil}>
                    <img src={Foto_de_perfil} alt="Foto de perfil" />
                </div>
            </nav>
        </div>
    )
}

export default Header;