import React, { useState } from "react";
import Imagem from "./Imagem.jpg";
import "./Imagem.css"


function Filmes() {
    return (
        <div >

            <div>
          <p className = "nome">Nome do Filme</p>
          <span className="imagem-perfil">
                            <img src={Imagem} alt="imagem" width="320" height="205" />
                        </span>

            </div>
        </div>

    );
}

export default Filmes;