import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Boton from "./Boton"
import Tareas from "./Tareas"
import Card from "./Card"


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <>
    <Card nombre = "Batman" edad= {40} amistades = {["Superman"," Mujer Maravilla"]} dc= {true}/>
    <Card nombre = "Thor" edad= {52} amistades = {["Hulk"," Iron Man"]} dc= {false}/>
    <Tareas resuelto= {false} />
    <Boton numero = {1} nombre = "Batman" />
    <Boton numero = {2} nombre = "Superman"/>
    <Boton numero = {3} nombre = "Wonder Woman" />
    <Boton numero = {4} />
    </>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

