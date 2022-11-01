

function Card ({nombre, edad,amistades,dc}){
    return(
        <div>
            <h1>{nombre} </h1>
            <p>{edad}</p>
            <p>{amistades}</p>
            <small style={{backgroundColor:"blue"}}>{dc ? "es de DC 💪" : "es de marvel ⚡"}</small>
        </div>
    )
}

export default Card