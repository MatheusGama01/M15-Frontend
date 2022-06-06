import React, {useState} from 'react';
import './style.css'

function Perfis(props) {
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
        <div id="listaperfis" class="card">
            <table class="table">
            <thead>
                <tr>
                <th scope="col">Nome</th>
                <th scope="col">E-mail</th>
                <th scope="col">Senha</th>
                <th id="selecionar" scope="col">Selecionar</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                <td>André</td>
                <td>andre@email.com</td>
                <td>A123</td>
                <td>
                    <input type = "checkbox"/>
                </td>
                </tr>
                <tr>
                <td>Matheus</td>
                <td>matheus@email.com</td>
                <td>M123</td>
                <td>
                    <input type = "checkbox"/>
                </td>                
                </tr>
                <tr>
                <td>Gabi</td>
                <td>gabi@email.com</td>
                <td>G123</td>
                <td>
                    <input type = "checkbox"/>
                </td>                
                </tr>
                <tr>
                <td>Perfil 4</td>
                <td>perfil4@email.com</td>
                <td>P4123</td>
                <td>
                    <input type = "checkbox"/>
                </td>
                </tr>
                <tr>
                <td>Perfil 5</td>
                <td>perfil5@email.com</td>
                <td>P5123</td>
                <td>
                    <input type = "checkbox"/>
                </td>
                </tr>
            </tbody>
            </table>
        </div>
      
    )
}

export default Perfis;