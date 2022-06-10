import axios from 'axios';
import React, {useState} from 'react';
import './style.css';



function AssistiFilme() {
    const [nome, setNome] =  useState("")
    const [diretor, setDiretor] =  useState("")
    const [genero, setGenero] =  useState("")
    const [opniao, setOpiniao] =  useState("")

    const baseURL = "http://localhost:4000"


    function cadastroFilme(nome,diretor,genero,opniao,URL) {

        axios.post(`${URL}/filme/cadastro`,{
            nome, 
            diretor, 
            genero,
            opniao,
        }).then(res => {
            console.log(res.data.message)
            alert(JSON.stringify(res.data.message))

        }).catch(error =>{
            console.log(error)
            alert(JSON.stringify(error.response.data.message))
        })

    }
    const handleSubmitClick = (e) => {
        e.preventDefault();
        cadastroFilme(nome,diretor,genero,opniao,baseURL);
      }
    
    
    return(
        <form id="formulario" >
            <h4>Diario de filmes</h4>

            <h6>Informações Sobre Filmes Assistidos:</h6>

            <label>Nome:</label>
                <input type="text" nome="txtnome" value={nome} onChange={e => setNome(e.target.value)}></input><br></br>
                <label>Diretor:</label>
                <input type="text" nome="txtgenero" value={diretor} onChange={e => setDiretor(e.target.value)}></input><br></br>
                <label>Gênero:</label>
                <input type="text" nome="txtautor" value={genero} onChange={e => setGenero(e.target.value)}></input><br></br>
                <label>Opinião:</label>
                <input type="text" nome="txtcomentario" value={opniao} onChange={e => setOpiniao(e.target.value)}></input><br></br>
                <button 
              className="botaoform" 
              onClick={handleSubmitClick}
              >
                Salvar
              </button>

        </form>
    
    )
}

export default AssistiFilme;