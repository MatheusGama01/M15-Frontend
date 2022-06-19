import React from "react";
import { FaPen, FaTrash } from "react-icons/fa/index.js";
import { changeIdEditFilm } from "../../utils/variaveis.js";
import { useNavigate } from "react-router-dom";
import "../CardPerfil/CardPerfil.css";

function Lista({ filme, deleteFilm }) {

    const id = filme._id

    const navigate = useNavigate();

    function removeFilm() {
        deleteFilm(id);
    };

    function redirectToEditFilm(){
        changeIdEditFilm(id);
        navigate("/filme/editar")
    }

    return (
        <div className="col">
            <div className="card shadow">

                <div className="card-body">
                    <h3 className="card-title">{filme.nome}</h3>
                    <h6 className="card-title">Diretor: {filme.diretor}</h6>
                    <h6 className="card-title">Gênero: {filme.genero}</h6>
                    <p className="card-text">Opinião: {filme.opiniao}</p>
                </div>

                <div className="card-footer">
                    
                    <button className="btn btn-sm btn-outline-primary me-2" onClick={redirectToEditFilm}>
                        <i className="me-2"><FaPen/></i>
                        Editar
                    </button>

                    <button className="btn btn-sm btn-outline-danger" onClick={removeFilm}>
                        <i className="me-2"><FaTrash/></i>
                        Apagar
                    </button>

                </div>

            </div>
        </div>

    )
}


export default Lista;