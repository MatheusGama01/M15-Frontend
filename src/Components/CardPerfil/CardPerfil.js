import React from "react";
import { FaPen, FaTrash } from "react-icons/fa/index.js";
import "./CardPerfil.css";

function CardPerfil({ perfil, deleteProfile }) {
    function removeProfile(){
        const id = perfil._id
        deleteProfile(id);
    };

    return (
        <div className="card mb-3 shadow-sm">
            <div className="card-body">
                <div className="d-flex justify-content-between mb-2">

                    <h5 className="card-title">
                        {perfil.nome}
                    </h5>

                    <h6 className="badge bg-secondary">
                        Usuário: {perfil.admin === true ? "Administrador" : "Comum"}
                    </h6>

                </div>

                <p className="card-text">
                    Id: {perfil._id}
                </p>

                <p className="card-text">
                    Email: {perfil.email}
                </p>

                <div className="d-flex justify-content-end pt-2 m-0 border-top">
                    
                    <button className="btn btn-sm btn-outline-primary me-2">
                        <i className="me-2"><FaPen/></i>
                        Editar
                    </button>

                    <button className="btn btn-sm btn-outline-danger">
                        <i className="me-2"><FaTrash/></i>
                        Apagar
                    </button>

                </div>
                
            </div>
        </div>
    )
}


export default CardPerfil;