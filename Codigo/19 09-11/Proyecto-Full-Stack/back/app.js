import express from "express"
import cors from "cors"
import blogRoutes from "./routes/routes.js"
import db from "./database/db.js"
const app = express()



app.use("/blogs",blogRoutes)

app.use(cors())
app.use (express.json()) //Analiza las solicitudes JSON entrantes y coloca los datos analizados en formato req.body

//Base de datos
try {
    await db.authenticate()
    console.log("conexion exitosa a la BD")
} catch (error) {
    console.log(`conexion fallida error ${error}`)
}

const port = 8000

app.listen(port,()=>{
    console.log(`Servidor ok en el puerto ${port}`)
})
