import React from "react";
import { FaPen, FaTrash } from "react-icons/fa/index.js";
import { BsFillTrashFill } from "react-icons/bs/index.js";
import "../CardPerfil/CardPerfil.css";

function Lista({ filme, deleteFilm }) {
    function removeFilm() {
        const id = filme._id
        deleteFilm(id);
    };

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
                    
                    <button className="btn btn-sm btn-outline-primary me-2" >
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