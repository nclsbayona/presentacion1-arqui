import { useState } from "react";
import UserRestClient from "./UserRestClient";
import 'bootstrap/dist/css/bootstrap.css';
import "./Main.css";
import toast, { Toaster } from 'react-hot-toast';

export default function Post(props: any){

    let myRestClient = new UserRestClient();

    const [state, setState] = useState({
        id: "",
        name: "",
        age: "",
        gender: "",
        height: ""
    });

    const executeSubmit = async (event: any) => {
        event.preventDefault();
        console.log(state.name);
        console.log(state.age);
        console.log(state.gender);
        console.log(state.height);

        const request = {
            id: state.id,
            name: state.name,
            age: state.age,
            gender: state.gender,
            height: state.height
        };

        let id = await myRestClient.invokeCreate(request);

        toast.success("El usuario fue agregado con id: " + id);
    }

    const handleOnChange = (event: any) => {
        let nameField = event.target.name;
        let valueField = event.target.value;

        setState({
            ...state,
            [nameField]: valueField
        });
    }

    return ( 
        <>
        <div className="general">
            <section className="section">
                <div className="my-form">
                    <h1 className="title">Formulario</h1>
                    <form onSubmit={executeSubmit} id="myform" className="myForm contact-form needs-validation">
                    <div className="form-group row col-lg-12 col-sm-12 rows">
                            <label className="col-lg-6" htmlFor="inputName">ID</label>
                            <input className="col-lg-4" type="number" id="inputId" placeholder="ID" name="id"
                                value={state.id} onChange={handleOnChange} required />
                            <div className="invalid-feedback">
                                Ingrese un ID.
                            </div>        
                        </div>
                        <div className="form-group row col-lg-12 col-sm-12 rows">
                            <label className="col-lg-6" htmlFor="inputName">Nombre</label>
                            <input className="col-lg-4" type="text" id="inputName" placeholder="Nombre" name="name"
                                value={state.name} onChange={handleOnChange} required />
                            <div className="invalid-feedback">
                                Ingrese un nombre.
                            </div>        
                        </div>
                        <div className="form-group row col-lg-12 col-sm-12 rows">
                            <label className="col-lg-6" htmlFor="inputName">Edad</label>
                            <input className="col-lg-4" type="number" id="inputAge" placeholder="Edad" name="age"
                                value={state.age} onChange={handleOnChange} required />
                            <div className="invalid-feedback">
                                Ingrese una edad.
                            </div>
                        </div>
                        <div className="form-group row col-lg-12 col-sm-12 rows">
                            <label className="col-lg-6" htmlFor="inputName">Genero</label>
                            <input className="col-lg-4" type="text" id="inputGender" placeholder="Genero" name="gender"
                                value={state.gender} onChange={handleOnChange} required />
                            <div className="invalid-feedback">
                                Ingrese un genero.
                            </div>
                        </div>
                        <div className="form-group row col-lg-12 col-sm-12 rows">
                            <label className="col-lg-6" htmlFor="inputName">Altura</label>
                            <input className="col-lg-4" type="number" id="inputHeight" placeholder="Altura" name="height"
                                value={state.height} onChange={handleOnChange} required />
                            <div className="invalid-feedback">
                                Ingrese una altura.
                            </div>
                        </div>
                        <button type="submit" className="main-btn">Submit</button>
                        <div><Toaster/></div>
                    </form>
                </div>
            </section>
    </div>
    </>
    );
};