import { useState } from "react";
import UserRestClient from "./UserRestClient";
import 'bootstrap/dist/css/bootstrap.css';
import "./Main.css";
import { Link } from "react-router-dom";

export default function Main(props: any){

    return ( 
        <>
        <div className="general">
            <section className="section">
                <div className="my-form">
                    <h2 className="title">Principal</h2>
                    <div className="links">
                        <Link to="/getUserById">Buscar usuario por id</Link>
                    </div>
                    <div className="links">
                        <Link to="/getAllUsers">Buscar usuarios</Link>
                    </div>
                    <div className="links">
                        <Link to="/postUser">Agregar usuario</Link>
                    </div>
                </div>
            </section>
    </div>
    </>
    );
};