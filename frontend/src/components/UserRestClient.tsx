import axios from "axios";

class UserRestClient{

    MAIN_URL = "https://127.0.0.1:3000/api";
    API_TOKEN = "ca948872d7738c8ddb5cef60bb3be22f0e528d67c13bc66b590829ed79c86fb7";

    constructor(){
    }

    async invokeCreate(user: any){
        const config = {
            /*headers: {
                Authorization: "Bearer " + this.API_TOKEN
            }*/
        };

         return axios.post(this.MAIN_URL + "/person", user, config)
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

    async getUserByID(id: BigInteger){
        const configGET = {
            url: this.MAIN_URL + "/users/" + id,
            method: "GET",
            timeout: 10000
        };
        
        return axios(configGET)
            .then( response => {
                        let statusCode = response.status;
                    
                        if(statusCode === 200){
                            let respuestaJson = response.data;

                            const usuario = {
                                name: respuestaJson.name,
                                email: respuestaJson.email,
                                gender: respuestaJson.gender,
                                status: respuestaJson.status
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
                            throw new Error("Ocurrió un error");
                        }
                    })
    }


    async updateInfo(user: any){
        const configPUT = {
            headers: {
                Authorization: "Bearer " + this.API_TOKEN
            },
            timeout: 10000
        };
        
        return axios.put(this.MAIN_URL + "/users/" + user.id, user, configPUT)
            .then(response => {
                let statusCode = response.status;
        
                if(statusCode === 200){
                    let respuestaJson = response.data;
        
                    console.log("La respuesta fue: " + JSON.stringify(respuestaJson));
                } else {
                    throw new Error("Se esperaba un 201 y se obtuvo un: " + statusCode);
                } 
            })
            .catch(error => {
                if(error.response){
                    if(error.response.status === 401){
                        throw new Error("No envio el token de autenticacion");
                    } 
                } else {
                    throw new Error("Ocurrió un error" + error);
                }
            });
    }

    async deleteUser(id: any){
        const configDELETE = {
            headers: {
                Authorization: "Bearer " + this.API_TOKEN
            },
            timeout: 10000
        };
        
        return axios.delete(this.MAIN_URL + "/users/" + id, configDELETE)
            .then(response => {
                let statusCode = response.status;
        
                if(statusCode === 204){
                    let respuestaJson = response.data;
        
                    console.log("La respuesta fue: " + JSON.stringify(respuestaJson));
                } else {
                    throw new Error("Se esperaba un 204 y se obtuvo un: " + statusCode);
                } 
            })
            .catch(error => {
                if(error.response){
                    if(error.response.status === 401){
                        throw new Error("No envio el token de autenticacion");
                    } 
                } else {
                    throw new Error("Ocurrió un error" + error);
                }
            });
    }

};

export default UserRestClient;