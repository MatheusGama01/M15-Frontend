import React, {useState} from 'react';
import './style.css';

function Genero(props) {
    const [state , setState] = useState({
        genero: "",
    })
    
    const handleChange = (e) => {
        const {id , value} = e.target   
        setState(prevState => ({
            ...prevState,
            [id] : value
        }))
    }
    
    return(
        <div id="generomaisvisto" class="card bg-light mb-3">
            <h5 class="card-title">Gênero mais visto</h5>
            <p class="card-text"><b>Romance</b></p>
        </div>
      
    )
}

export default Genero;