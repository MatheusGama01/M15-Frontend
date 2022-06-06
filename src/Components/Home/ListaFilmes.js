import React, {useState} from 'react';
import './style.css';

function Lista(props) {
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
        <div id="listafilmes" class="card">
            <table class="table">
            <thead>
                <tr>
                <th scope="col">Filme</th>
                <th scope="col">Data</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                <td>ABC</td>
                <td>20/04/2022</td>
                </tr>
                <tr>
                <td>FILME 1</td>
                <td>19/04/2022</td>
                </tr>
                <tr>
                <td>FILME 2</td>
                <td>11/04/2022</td>
                </tr>
                <tr>
                <td>FILME 3</td>
                <td>31/03/2022</td>
                </tr>
                <tr>
                <td>FILME 4</td>
                <td>21/03/2022</td>
                </tr>
            </tbody>
            </table>
        </div>
      
    )
}

export default Lista;