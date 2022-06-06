import React, {useState} from 'react';
import './style.css';

function UltimoFilme(props) {
    const [state , setState] = useState({
        nome : "",
        diretor : "",
        duracao : "",
        genero: "",
        data: ""
    })
    
    const handleChange = (e) => {
        const {id , value} = e.target   
        setState(prevState => ({
            ...prevState,
            [id] : value
        }))
    }
    
    return(
        <div id="ultimofilmevisto" class="card bg-light mb-3">
            <h5 class="card-title">Último filme visto</h5>
            <p class="card-text"><b>Nome:</b>: ABC</p>
            <p class="card-text"><b>Diretor</b>: DEF da Silva</p>
            <p class="card-text"><b>Duração</b>: 2h34min</p>
            <p class="card-text"><b>Gênero</b>: Romance</p>
            <p class="card-text"><b>Data</b>: 01/01/2022</p>
        </div>
      
    )
}

export default UltimoFilme;