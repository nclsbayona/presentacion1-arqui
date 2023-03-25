import { useState } from "react";
import 'bootstrap/dist/css/bootstrap.css';
import UserRestClient from "./integration/UserRestClient";

export default function Main(props: any){

    let myRestClient = new UserRestClient();

    const [state, setState] = useState({
        name: "",
        age: "",
        birthDay: "",
        gender: ""
    });

    const executeSubmit = (event: any) => {
        event.preventDefault();
        console.log(state.name);
        console.log(state.age);
        console.log(state.birthDay);
        console.log(state.gender);

        const request = {
            name: state.name,
            lastName: state.age,
            birthDay: state.birthDay,
            typeID: state.gender,
        };
    }

    const handleOnChange = (event: any) => {
        let nameField = event.target.name;
        let valueField = event.target.value;

        setState({
            ...state,
            [nameField]: valueField
        });
    }

    return(
        <>
            <h1 className="title">Formulario</h1>
            <form onSubmit={executeSubmit} id="myform" className="contact-form needs-validation">
                <div className="form-group row col-lg-12 separacion"></div>
                <div className="form-group row col-lg-12 col-sm-12">
                    <div className="col-lg-1 col-sm-2"></div>
                    <div className="form-group col-lg-4 col-sm-8">
                        <div className="form-group row col-lg-12">
                            <label className="col-lg-6" htmlFor="inputName">Nombre</label>
                            <input className="col-lg-6" type="text" id="inputName" placeholder="Nombre" name="name"
                                value={state.name} onChange={handleOnChange} required />
                            <div className="invalid-feedback">
                                Ingrese un nombre.
                            </div>
                        </div>                                        
                    </div>
                </div>
                <div className="form-group row col-lg-12 separacion"></div>
                <div className="form-group row col-lg-12 col-sm-12">
                    <div className="col-lg-1 col-sm-2"></div>
                    <div className="form-group col-lg-4 col-sm-8">
                        <div className="form-group row col-lg-12">
                        <label className="col-lg-6" htmlFor="inputBirthDate">Fecha Nacimiento</label>
                        <div className="col-lg-6 noPadding">
                            <input type="date" id="inputBirthDate"  name='birthDay'
                            value={state.birthDay} onChange={handleOnChange} required />
                        </div>
                        </div>                                  
                    </div>
                    <div className="col-lg-1"></div>
                    <div className="form-group col-lg-4 col-sm-8">
                        <div className="form-group row col-lg-12">
                            <label className="col-lg-6" htmlFor="inputAge">Edad</label>
                            <input className="col-lg-6" type="text" id="inputAge" placeholder="22" name='age' disabled />
                        </div>   
                    </div>
                    <div className="col-lg-1 col-sm-2"></div>
                </div>
                <div className="form-group row col-lg-12 separacion"></div>
                <div className="form-group row col-lg-12 col-sm-12">
                    <div className="col-lg-1 col-sm-2"></div>
                    <div className="form-group col-lg-4 col-sm-8">
                        <div className="form-group">
                            <label className="col-lg-6">Genero</label>
                            <div className="form-check form-check-inline">
                                <input className="form-check-input" type="radio" name="gender" id="inlineRadioMujer"
                                value="Mujer" onChange={handleOnChange} required />
                                <label className="form-check-label" htmlFor="inlineRadioMujer">Mujer</label>
                            </div>
                            <div className="form-check form-check-inline">
                                <input className="form-check-input" type="radio" name="gender" id="inlineRadioHombre" 
                                value="Hombre" onChange={handleOnChange} />
                                <label className="form-check-label" htmlFor="inlineRadioHombre">Hombre</label>
                            </div>
                            <div className="form-check form-check-inline">
                                <input className="form-check-input" type="radio" name="gender" id="inlineRadioOtro" 
                                value="Otro" onChange={handleOnChange} />
                                <label className="form-check-label" htmlFor="inlineRadioOtro">Otro</label>
                            </div>
                        </div>                                             
                    </div>
                </div>
                <div className="form-group row col-lg-12 separacion"></div>
                <div className="form-group row col-lg-12">
                <div className="col-lg-3 col-sm-1"></div>
                    <button type="submit" className="btn submit-btn col-lg-4 col-sm-10">Submit</button>
                </div>
            </form>
        </section>
    </>
    );
};