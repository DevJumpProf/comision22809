import {useState,useEffect} from "react"
import {Link} from "react-router-dom"
import {collection,getDocs,deleteDoc,doc} from "firebase/firestore"
import {db} from "../firebaseConfig/firebase.js"

import Swal from "sweetalert2"
import withReactContent from "sweetalert2-react-content"

const MySwal = withReactContent(Swal)

const Show = ()=>{
// 1 configurar los hooks

//2 referenciar a los bd

//3 funcion para mostrar todos los Docs

// 4 funcion eliminar un documento

//5 funcion de confirmacion para sweet alert

//6 usamos useEffect

//7 devolvemos la vista de nuestro componente

}