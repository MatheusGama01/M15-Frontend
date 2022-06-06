import React, {useState} from 'react';
import './style.css';

function Contagem(props) {
    const [state , setState] = useState({
        filmes: "",
    })
    
    const handleChange = (e) => {
        const {id , value} = e.target   
        setState(prevState => ({
            ...prevState,
            [id] : value
        }))
    }
    
    return(
        <div id="contagemfilmes" class="card">
            <p class="card-text">Você já assistiu a</p>
            <h1 class="card-text"><b>30</b></h1>
            <p class="card-text">filmes!</p>
        </div>
      
    )
}

export default Contagem;