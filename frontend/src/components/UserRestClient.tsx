import axios from "axios";

class UserRestClient{

    MAIN_URL = "http://localhost:8000/api";

    constructor(){
    }

    async invokeCreate(user: any){
        const config = {
            /*headers: {
                Authorization: "Bearer " + this.API_TOKEN
            }*/
        };

         return axios.post(this.MAIN_URL + "/person/", user, config)
            .then(response => {
                let statusCode = response.status;
        
                if(statusCode === 201){
                    let respuestaJson = response.data;
        
                    console.log("La respuesta fue: " + JSON.stringify(respuestaJson));

                    return respuestaJson.id;
                } else {
                    throw new Error("Se esperaba un 201 y se obtuvo un: " + statusCode);
                } 
            })
            .catch(error => {
                if(error.response){
                    if(error.response.status === 401){
                        throw new Error("No envio el token de autenticacion");
                    } else if(error.response.status === 422){
                        throw new Error("El correo " + user.email + " ya existe");
                    }
                } else {
                    throw new Error("Se presento un error " + error);
                }
            });
    }

    async getAllUsers(){
        const configGET = {
            url: this.MAIN_URL + "/person/",
            method: "GET",
            timeout: 10000
        };
        
        return axios(configGET)
            .then( response => {
                        let statusCode = response.status;

                        console.log(JSON.stringify(response.data));
                    
                        if(statusCode === 200){
                            let respuestaJson = response.data;

                            return JSON.stringify(respuestaJson);
                        } else {
                            throw new Error("Se esperaba un 200 y se obtuvo un: " + statusCode);
                        } 
                    })
                    .catch(error => {
                        if(error.response === 400){
                            throw new Error("Se presentó un error y el codigo retornado es: " + error.response.status);
                        } else {
                            throw new Error("Ocurrió un error");
                        }
                    })
    }

    async getUserByID(id: String){
        const configGET = {
            url: this.MAIN_URL + "/person?id=" + id,
            method: "GET",
            timeout: 10000
        };
        
        return axios(configGET)
            .then( response => {
                        let statusCode = response.status;
                    
                        if(statusCode === 200){
                            let respuestaJson = response.data[0];

                            const usuario = {
                                id: respuestaJson.id,
                                name: respuestaJson.name,
                                age: respuestaJson.age,
                                gender: respuestaJson.gender,
                                height: respuestaJson.height
                            };

                            return usuario;
                        } else {
                            throw new Error("Se esperaba un 200 y se obtuvo un: " + statusCode);
                        } 
                    })
                    .catch(error => {
                        if(error.response){
                            throw new Error("Se presentó un error y el codigo retornado es: " + error.response.status);
                        } else {
                            console.log(JSON.stringify(error));
                            throw new Error("Ocurrió un error");
                        }
                    })
    }
};

export default UserRestClient;