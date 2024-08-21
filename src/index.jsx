import React from "react";
import ReactDOM from "react-dom/client";
import {NavBar} from "./NavBar/NavBar";
import {ItemListContainer} from "./ItemListContainer/ItemListContainer";

const el = document.getElementById("root");

const root = ReactDOM.createRoot(el); // SIRVE PARA MOSTRAR LOS COMPONENTE DE REACT, SINO NO SE VE EN EL DOM

function App() {
    return (
    <>
        <NavBar/>
        <ItemListContainer/> 
    </>  
    ) 
}

root.render(<App/>);
