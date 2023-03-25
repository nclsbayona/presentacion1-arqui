"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var axios_1 = require("axios");
var UserRestClient = /** @class */ (function () {
    function UserRestClient() {
        this.MAIN_URL = "https://gorest.co.in/public/v2";
        this.API_TOKEN = "ca948872d7738c8ddb5cef60bb3be22f0e528d67c13bc66b590829ed79c86fb7";
    }
    UserRestClient.prototype.invokeCreate = function (user) {
        return __awaiter(this, void 0, void 0, function () {
            var config;
            return __generator(this, function (_a) {
                config = {
                    headers: {
                        Authorization: "Bearer " + this.API_TOKEN
                    }
                };
                return [2 /*return*/, axios_1.default.post(this.MAIN_URL + "/users", user, config)
                        .then(function (response) {
                        var statusCode = response.status;
                        if (statusCode === 201) {
                            var respuestaJson = response.data;
                            console.log("La respuesta fue: " + JSON.stringify(respuestaJson));
                            return respuestaJson.id;
                        }
                        else {
                            throw new Error("Se esperaba un 201 y se obtuvo un: " + statusCode);
                        }
                    })
                        .catch(function (error) {
                        if (error.response) {
                            if (error.response.status === 401) {
                                throw new Error("No envio el token de autenticacion");
                            }
                            else if (error.response.status === 422) {
                                throw new Error("El correo " + user.email + " ya existe");
                            }
                        }
                        else {
                            throw new Error("Se presento un error " + error);
                        }
                    })];
            });
        });
    };
    UserRestClient.prototype.getUserByID = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var configGET;
            return __generator(this, function (_a) {
                configGET = {
                    url: this.MAIN_URL + "/users/" + id,
                    method: "GET",
                    timeout: 10000
                };
                return [2 /*return*/, (0, axios_1.default)(configGET)
                        .then(function (response) {
                        var statusCode = response.status;
                        if (statusCode === 200) {
                            var respuestaJson = response.data;
                            var usuario = {
                                name: respuestaJson.name,
                                email: respuestaJson.email,
                                gender: respuestaJson.gender,
                                status: respuestaJson.status
                            };
                            return usuario;
                        }
                        else {
                            throw new Error("Se esperaba un 200 y se obtuvo un: " + statusCode);
                        }
                    })
                        .catch(function (error) {
                        if (error.response) {
                            throw new Error("Se presentó un error y el codigo retornado es: " + error.response.status);
                        }
                        else {
                            throw new Error("Ocurrió un error");
                        }
                    })];
            });
        });
    };
    UserRestClient.prototype.updateInfo = function (user) {
        return __awaiter(this, void 0, void 0, function () {
            var configPUT;
            return __generator(this, function (_a) {
                configPUT = {
                    headers: {
                        Authorization: "Bearer " + this.API_TOKEN
                    },
                    timeout: 10000
                };
                return [2 /*return*/, axios_1.default.put(this.MAIN_URL + "/users/" + user.id, user, configPUT)
                        .then(function (response) {
                        var statusCode = response.status;
                        if (statusCode === 200) {
                            var respuestaJson = response.data;
                            console.log("La respuesta fue: " + JSON.stringify(respuestaJson));
                        }
                        else {
                            throw new Error("Se esperaba un 201 y se obtuvo un: " + statusCode);
                        }
                    })
                        .catch(function (error) {
                        if (error.response) {
                            if (error.response.status === 401) {
                                throw new Error("No envio el token de autenticacion");
                            }
                        }
                        else {
                            throw new Error("Ocurrió un error" + error);
                        }
                    })];
            });
        });
    };
    UserRestClient.prototype.deleteUser = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var configDELETE;
            return __generator(this, function (_a) {
                configDELETE = {
                    headers: {
                        Authorization: "Bearer " + this.API_TOKEN
                    },
                    timeout: 10000
                };
                return [2 /*return*/, axios_1.default.delete(this.MAIN_URL + "/users/" + id, configDELETE)
                        .then(function (response) {
                        var statusCode = response.status;
                        if (statusCode === 204) {
                            var respuestaJson = response.data;
                            console.log("La respuesta fue: " + JSON.stringify(respuestaJson));
                        }
                        else {
                            throw new Error("Se esperaba un 204 y se obtuvo un: " + statusCode);
                        }
                    })
                        .catch(function (error) {
                        if (error.response) {
                            if (error.response.status === 401) {
                                throw new Error("No envio el token de autenticacion");
                            }
                        }
                        else {
                            throw new Error("Ocurrió un error" + error);
                        }
                    })];
            });
        });
    };
    return UserRestClient;
}());
;
exports.default = UserRestClient;
