let estadoLicuadora = "apagado";

let sonidoLicuadora = document.querySelector("#licuadora-sonido")
let sonidoBoton = document.querySelector("#licuadora-boton-sonido")

let licuadora = document.querySelector("#licuadora")
let boton =document.querySelector("#licuadora-boton")

boton.addEventListener("click",()=>{
    controlarLicuadora()
})


const controlarLicuadora=()=>{
    if (estadoLicuadora=="apagado"){
        estadoLicuadora="encendido";
        hacerQuilombo()
        licuadora.classList.add("licuadora-activa")
    }else{
        estadoLicuadora="apagado"
        hacerQuilombo()
           licuadora.classList.remove("licuadora-activa")  
    }

}

const hacerQuilombo=()=>{
if(sonidoLicuadora.paused){
    sonidoBoton.play()
    sonidoLicuadora.play()
}else{
    sonidoBoton.play()
    sonidoLicuadora.pause()
    sonidoLicuadora.currentTime=0; //reinicio al seg 0 el audio
}

}
