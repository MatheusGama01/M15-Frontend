import React, {useState} from 'react';
import Perfis from './TabelaPerfis';
import './style.css';

function GerenciadorPerfis(props) {
    const [state , setState] = useState({
        usuario : "",
        email : "",
        password : "",
    })
    
    const handleChange = (e) => {
        const {id , value} = e.target   
        setState(prevState => ({
            ...prevState,
            [id] : value
        }))
    }
    
    return(
        <div id="gerenciarperfis" className="card col-12 col-sm-12 login-card mt-2 hv-center">
            <div>
                <input type = "checkbox" id = "selecionartodos"></input>
                <label for = "selecionartodos"> Selecionar todos </ label>
           </div>
            <Perfis/>
            <button id="excluirbutton"
                type="submit" 
                className="btn btn-primary"
            >
            Excluir
            </button>
            <button id="salvarbutton"
                type="submit" 
                className="btn btn-primary"
            >
            Salvar
            </button>
            <button id="tornaradmin"
                type="submit" 
                className="btn btn-primary"
            >
            Tornar admin
            </button>


        </div>
    )
}

export default GerenciadorPerfis;