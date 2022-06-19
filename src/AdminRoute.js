import axios from "axios";
import jwtDecode from "jwt-decode";
import React, { useState, useEffect } from "react";
import { Navigate } from "react-router-dom";
import { token } from "./auth.js";

const AdminRoute = ({ children }) => {

    const [perfil, setPerfil] = useState("")

    console.log(`Em AdminRoute o token é: ${token}`)
    const decode = jwtDecode(token)
    const id = decode.id
    const baseURL = "http://localhost:4000" || "https://m15-backend.herokuapp.com"

    function getProfile() {
        axios.get(`${baseURL}/perfil/${id}`, {
            headers: {
                'Authorization': `Basic ${token}`
            }
        })
            .then(response => {
                console.log(response.data)
                setPerfil(response.data)
            })
            .catch(error => {
                console.log(error)
                alert(JSON.stringify(error.response.data.message))
            })
        };


    useEffect(() => {
        getProfile();
    }, []);


    if (perfil.admin === false) {
        return <Navigate to="/" replace />;
    }

    console.log("passei do if")

    return children;
};

export default AdminRoute;