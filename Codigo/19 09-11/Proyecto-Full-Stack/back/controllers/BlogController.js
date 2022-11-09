// importamos el modelo
import BlogModel from "../models/BlogModel.js";


/* METODOS PARA EL CRUD */

//mostrar todos los registros

export const getAllBlogs = async (req,res) =>{

    try {
        const blogs = await BlogModel.findAll()
        res.json(blogs)
    } catch (error) {
        res.json ({message:error.message})
    }

}