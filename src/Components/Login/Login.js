import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";


function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const baseURL = process.env.REACT_APP_API_URL || "http://localhost:4000"
  var token = ""

  const navigate = useNavigate();

  function login(email, password, URL) {
    if (email !== "" && password !== "") {
      axios.post(`${URL}/login`, {
        email,
        senha: password,
      })
      .then(response => {
        console.log(response.data)
        token = response.data.token
        navigate('/')
      })
      .catch(error => {
        console.error(error)
        alert(JSON.stringify(error.response.data.message))
      });
    }
    else {
      window.alert("Digite um email e/ou senha")
    }
  }

  const handleSubmitClick = (e) => {
    e.preventDefault();
    login(email, password, baseURL);
  }

  const redirectToRegister = () => {
    navigate('/cadastro')
  }

  return (
    <div className="container-primario-login">
      <div className="container-login">
        <div className="wrap-login">
          <form className="login-form">

            <span className="login-form-title">Entrar</span>

            <div className="wrap-input">
              <input 
              className={email !== "" ? "has-val input" : "input"} 
              type="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              />
              <span className="focus-input" data-placeholder="Email"></span>
            </div>

            <div className="wrap-input">
              <input 
              className={password !== "" ? "has-val input" : "input"} 
              type="password"
              value={password}
              onChange={e => setPassword(e.target.value)}
              />
              <span className="focus-input" data-placeholder="Senha"></span>
            </div>

            <div className="link-register">
              <span className="txt1">Não tem uma conta?</span>

              <div className="txt2" onClick={redirectToRegister}>Crie uma!</div>
            </div>

            <div className="container-login-form-btn">
              <button 
              className="login-form-btn" 
              onClick={handleSubmitClick}
              >
                Entrar
              </button>
            </div>
            
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
