import { useState } from "react";
import UserRestClient from "./UserRestClient";
import 'bootstrap/dist/css/bootstrap.css';
import "./Main.css";

export default function GetAll(props: any){

    let myRestClient = new UserRestClient();

    const [state, setState] = useState({
        data: ""
    });

    const executeSubmit = async (event: any) => {
        event.preventDefault();
        console.log(state.data);

        let response = await myRestClient.getAllUsers();
        console.log("Se ejecuto el metodo" + response);

        setState({
            ...state,
            data: response
        });
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
                    <h1 className="title">Buscar Usuarios</h1>
                    <form onSubmit={executeSubmit} id="myform" className="myForm contact-form needs-validation">
                        <button type="submit" className="main-btn">Buscar</button>
                        <div className="form-group row col-lg-12 col-sm-12 rows"></div>
                        <div className="form-group row col-lg-12 col-sm-12 rows">
                            <label className="col-lg-2" htmlFor="inputName"></label>
                            <textarea className="col-lg-8" id="inputData" name="data"
                                value={state.data} disabled />      
                        </div>
                    </form>
                </div>
            </section>
    </div>
    </>
    );
};