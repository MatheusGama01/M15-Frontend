import React from "react";
import Delete from "../../assets/Delete.png";
import {BsFillTrashFill} from "react-icons/bs/index.js"
import "./CardPerfil.css";

function CardPerfil({ perfil, deleteProfile }) {
    function removeProfile(){
        const id = perfil._id
        deleteProfile(id);
    };

    return (
        <div className="container-card-perfil" >
            <div className="container-card-perfil-dados-usuário">
                <div className="nome-card-perfil">
                    <span>Nome: {perfil.nome}</span>
                </div>
                <div className="email-card-perfil">
                    <span>Email: {perfil.email}</span>
                </div>
            </div>
            <div className="container-btn" onClick={removeProfile}>
                    <BsFillTrashFill />
                    <span className="apagar">Apagar</span>
            </div>
        </div>
    )
}


export default CardPerfil;