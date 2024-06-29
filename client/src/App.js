import logo from './logo.svg';
import './App.css';
import {useState} from "react";

function App() {

    const mostrarDatos = () => {
        alert(nombre)
    }

    const[nombre,setNombre] =  useState("");
    const[edad,setEdad] =  useState(0);
    const[pais,setPais] =  useState("");
    const[cargo,setCargo] =  useState("");
    const[anios,setAnios] =  useState(0);


    return (
    <div className="App">
        <div className="datos">
            <label>Nombre: <input
               onChange={(event) => {setNombre(event.target.value)}}
               type="text"/></label><br/>

            <label>Edad: <input
                onChange={(event) => {setEdad(event.target.value)}}
                type="number"/></label><br/>

            <label>Pais: <input
                onChange={(event) => {setPais(event.target.value)}}
                type="text"/></label><br/>

            <label>Cargo: <input
                onChange={(event) => {setCargo(event.target.value)}}
                type="text"/></label><br/>

            <label>Anios: <input
                onChange={(event )=> {setAnios(event.target.value)}}
                type="number"/></label><br/>

            <button onClick={mostrarDatos}>Registrar</button>
        </div>
    </div>
  );
}

export default App;
