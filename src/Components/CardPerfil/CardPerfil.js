import React from "react";
import { FaPen, FaTrash } from "react-icons/fa/index.js";
import { useNavigate } from "react-router-dom";
import { changeIdModifyProfile } from "../../utils/variaveis.js";
import "./CardPerfil.css";

function CardPerfil({ perfil, deleteProfile }) {
    
    const id = perfil._id

    const navigate = useNavigate();
    
    function removeProfile(){
        deleteProfile(id);
    };

    function redirectToModifyProfile(){
        changeIdModifyProfile(id)
        navigate('/admin/perfil')
    }

    return (
        <div className="card mb-3 shadow-sm" id="card-perfil">
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
                    
                    <button className="btn btn-sm btn-outline-primary me-2" onClick={redirectToModifyProfile}>
                        <i className="me-2"><FaPen/></i>
                        Editar
                    </button>

                    <button className="btn btn-sm btn-outline-danger" onClick={removeProfile}>
                        <i className="me-2"><FaTrash/></i>
                        Apagar
                    </button>

                </div>
                
            </div>
        </div>
    )
}


export default CardPerfil;