"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
require("bootstrap/dist/css/bootstrap.css");
var UserRestClient_1 = require("./integration/UserRestClient");
function Main(props) {
    var myRestClient = new UserRestClient_1.default();
    var _a = (0, react_1.useState)({
        name: "",
        age: "",
        birthDay: "",
        gender: ""
    }), state = _a[0], setState = _a[1];
    var executeSubmit = function (event) {
        event.preventDefault();
        console.log(state.name);
        console.log(state.age);
        console.log(state.birthDay);
        console.log(state.gender);
        var request = {
            name: state.name,
            lastName: state.age,
            birthDay: state.birthDay,
            typeID: state.gender,
        };
    };
    var handleOnChange = function (event) {
        var _a;
        var nameField = event.target.name;
        var valueField = event.target.value;
        setState(__assign(__assign({}, state), (_a = {}, _a[nameField] = valueField, _a)));
    };
    return className = "title" > Formulario < /h1>
        < form;
    onSubmit = { executeSubmit: executeSubmit };
    id = "myform";
    className = "contact-form needs-validation" >
        className;
    "form-group row col-lg-12 separacion" > /div>
        < div;
    className = "form-group row col-lg-12 col-sm-12" >
        className;
    "col-lg-1 col-sm-2" > /div>
        < div;
    className = "form-group col-lg-4 col-sm-8" >
        className;
    "form-group row col-lg-12" >
        className;
    "col-lg-6";
    htmlFor = "inputName" > Nombre < /label>
        < input;
    className = "col-lg-6";
    type = "text";
    id = "inputName";
    placeholder = "Nombre";
    name = "name";
    value = { state: state, : .name };
    onChange = { handleOnChange: handleOnChange };
    required /  >
        className;
    "invalid-feedback" >
        Ingrese;
    un;
    nombre.
        < /div>
        < /div>                                        
        < /div>
        < /div>
        < div;
    className = "form-group row col-lg-12 separacion" > /div>
        < div;
    className = "form-group row col-lg-12 col-sm-12" >
        className;
    "col-lg-1 col-sm-2" > /div>
        < div;
    className = "form-group col-lg-4 col-sm-8" >
        className;
    "form-group row col-lg-12" >
        className;
    "col-lg-6";
    htmlFor = "inputBirthDate" > Fecha;
    Nacimiento < /label>
        < div;
    className = "col-lg-6 noPadding" >
        type;
    "date";
    id = "inputBirthDate";
    name = 'birthDay';
    value = { state: state, : .birthDay };
    onChange = { handleOnChange: handleOnChange };
    required /  >
        /div>
        < /div>                                  
        < /div>
        < div;
    className = "col-lg-1" > /div>
        < div;
    className = "form-group col-lg-4 col-sm-8" >
        className;
    "form-group row col-lg-12" >
        className;
    "col-lg-6";
    htmlFor = "inputAge" > Edad < /label>
        < input;
    className = "col-lg-6";
    type = "text";
    id = "inputAge";
    placeholder = "22";
    name = 'age';
    disabled /  >
        /div>   
        < /div>
        < div;
    className = "col-lg-1 col-sm-2" > /div>
        < /div>
        < div;
    className = "form-group row col-lg-12 separacion" > /div>
        < div;
    className = "form-group row col-lg-12 col-sm-12" >
        className;
    "col-lg-1 col-sm-2" > /div>
        < div;
    className = "form-group col-lg-4 col-sm-8" >
        className;
    "form-group" >
        className;
    "col-lg-6" > Genero < /label>
        < div;
    className = "form-check form-check-inline" >
        className;
    "form-check-input";
    type = "radio";
    name = "gender";
    id = "inlineRadioMujer";
    value = "Mujer";
    onChange = { handleOnChange: handleOnChange };
    required /  >
        className;
    "form-check-label";
    htmlFor = "inlineRadioMujer" > Mujer < /label>
        < /div>
        < div;
    className = "form-check form-check-inline" >
        className;
    "form-check-input";
    type = "radio";
    name = "gender";
    id = "inlineRadioHombre";
    value = "Hombre";
    onChange = { handleOnChange: handleOnChange } /  >
        className;
    "form-check-label";
    htmlFor = "inlineRadioHombre" > Hombre < /label>
        < /div>
        < div;
    className = "form-check form-check-inline" >
        className;
    "form-check-input";
    type = "radio";
    name = "gender";
    id = "inlineRadioOtro";
    value = "Otro";
    onChange = { handleOnChange: handleOnChange } /  >
        className;
    "form-check-label";
    htmlFor = "inlineRadioOtro" > Otro < /label>
        < /div>
        < /div>                                             
        < /div>
        < /div>
        < div;
    className = "form-group row col-lg-12 separacion" > /div>
        < div;
    className = "form-group row col-lg-12" >
        className;
    "col-lg-3 col-sm-1" > /div>
        < button;
    type = "submit";
    className = "btn submit-btn col-lg-4 col-sm-10" > Submit < /button>
        < /div>
        < /form>
        < /section>
        < />;
    ;
}
exports.default = Main;
;
