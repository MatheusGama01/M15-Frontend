import React from "react";
import "../CardPerfil/CardPerfil.css";

function Lista({ filme, deleteFilm }) {
    function removeFilm(){
        const id = filme._id
        deleteFilm(id);
    };

    return (
        <div className="container-card-perfil" >
            <div className="container-card-perfil-dados-usuário">
                <div className="nome-card-perfil">
                    <span>Nome: {filme.nome}</span>
                </div>
                <div className="email-card-perfil">
                    <span>Diretor: {filme.diretor}</span>
                </div>
                <div className="email-card-perfil">
                    <span>Gênero: {filme.genero}</span>
                </div>
                <div className="email-card-perfil">
                    <span>Opnião: {filme.opniao}</span>
                </div>
            </div>
            <div className="container-btn" onClick={removeFilm}>
                    
                    <span className="apagar">Apagar</span>
            </div>
        </div>
    )
}


export default Lista;