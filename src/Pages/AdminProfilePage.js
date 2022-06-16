import axios from 'axios';
import React, { useState, useEffect } from "react";
import CardPerfil from "../Components/CardPerfil/CardPerfil.js";
import Header from "../Components/Header/Header.js";
import { token } from "../auth.js";
import "./AdminProfilePage.css";

function AdminProfilePage() {
    const [perfil, setPerfil] = useState([])

    const baseURL = "http://localhost:4000" || "https://m15-backend.herokuapp.com"

    function getProfile(URL) {
        axios.get(`${URL}/perfil`, {
            headers: {
                'Authorization': `Basic ${token}`
            }
        })
            .then(response => {
                console.log(response.data)
                setPerfil(response.data || null)
            })
            .catch(error => {
                console.log(error)
                alert(JSON.stringify(error.response.data.message))
                alert(baseURL)
            })
    };


    function removeProfile(id) {
        axios.delete(`${baseURL}/perfil/apagar/${id}`, {
            headers: {
                'Authorization': `Basic ${token}`
            }
        })
            .then(response => {
                window.confirm(JSON.stringify(response.data.message))
                getProfile(baseURL);
            })
            .catch(error => {
                console.error(error)
                alert(JSON.stringify(error.response.data.message))
            });
    }

    useEffect(() => {
        getProfile(baseURL)
    }, [])

    return (
        <div className="container-admin-page">
            <div className="admin-profile-page">
                <header>
                    <Header />
                </header>

                <div className="content">

                    <div className="texto">
                        <span>Perfis cadastrados:</span>
                    </div>

                    <div className="card-perfil">
                        {perfil.map(p => (
                            <div className="mt-3">
                                <CardPerfil perfil={p} deleteProfile={removeProfile} />
                            </div>
                        ))}
                    </div>

                </div>

            </div>
        </div>
    );
}

export default AdminProfilePage;