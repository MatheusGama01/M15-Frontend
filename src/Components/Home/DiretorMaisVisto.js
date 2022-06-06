import React, {useState} from 'react';
import './style.css';

function Diretor(props) {
    const [state , setState] = useState({
        diretor: "",
    })
    
    const handleChange = (e) => {
        const {id , value} = e.target   
        setState(prevState => ({
            ...prevState,
            [id] : value
        }))
    }
    
    return(
        <div id="diretormaisvisto" class="card bg-light mb-3">
            <h5 class="card-title">Diretor mais visto</h5>
            <p class="card-text"><b>DEF da Silva</b></p>
        </div>
      
    )
}

export default Diretor;