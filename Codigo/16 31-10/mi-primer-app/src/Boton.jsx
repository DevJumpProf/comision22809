

/* function Boton (props){ */
/*   console.log(props) */
/*     return (
    <button>{props.numero}</button>
    )
} */
/* 
export default Boton; */



function Boton ({numero,nombre = "Default"}){ 
/*   console.log(props) */
   return (
    <button onClick={function(){
        alert ("hiciste click")
    }}>{numero} - {nombre} </button>
    )
}

export default Boton; 