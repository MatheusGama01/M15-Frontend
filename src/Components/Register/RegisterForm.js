import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from 'axios';



function RegisterForm() {
  const [nome, setNome] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const navigate = useNavigate();


  const baseURL = "https://m15-backend.herokuapp.com" || process.env.REACT_APP_API_URL || "http://localhost:4000"

  function cadastro(nome, email, password, URL) {
    axios.post(`${URL}/cadastro`, {
      nome,
      email,
      senha: password,
    }).then(response => {
      console.log(response.data)
      navigate('/Login')
    }).catch(error => {
      console.log(error)
      alert(JSON.stringify(error.response.data.message))
    });
  }

  const handleSubmitClick = (e) => {
    e.preventDefault();
    if(email !== "" && password !== ""){
      if(password === confirmPassword){
        cadastro(nome, email, password, baseURL);
      }else{
          alert("As senhas não são iguais!")
      }
    }
    else{
      window.alert("Digite um email e/ou senha")
    }
  }

  const redirectToLogin = () =>{
      navigate('/login')
  }

  return (
    <div className="container-primario-login">
      <div className="container-login">
        <div className="wrap-login">
          <form className="login-form">

            <span className="login-form-title">Cadastre-se!</span>

            <div className="wrap-input">
              <input 
              className={nome !== "" ? "has-val input" : "input"} 
              type="text"
              value={nome}
              onChange={e => setNome(e.target.value)}
              />
              <span className="focus-input" data-placeholder="Nome"></span>
            </div>

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

            <div className="wrap-input">
              <input 
              className={confirmPassword !== "" ? "has-val input" : "input"} 
              type="password"
              value={confirmPassword}
              onChange={e => setConfirmPassword(e.target.value)}
              />
              <span className="focus-input" data-placeholder="Confirme sua senha"></span>
            </div>

            <div className="link-register">
              <span className="txt1">Já tem uma conta?</span>

              <div className="txt2" onClick={redirectToLogin}>Faça login!</div>
            </div>

            <div className="container-login-form-btn">
              <button 
              className="login-form-btn" 
              onClick={handleSubmitClick}
              >
                Registrar
              </button>
            </div>
            
          </form>
        </div>
      </div>
    </div>
  );
}

export default RegisterForm;