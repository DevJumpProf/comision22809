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
//mostrar un registro
export const getBlog = async (req,res)=>{

    try {
        const blog = await BlogModel.findAll({
            where : {id:req.params.id}
        })
        res.json(blog[0])
    } catch (error) {
        res.json ({message:error.message}) 
    }
}

// crear registro

export const createBlog = async (req, res) => {
    try {
 await BlogModel.create(req.body);
     res.json({ message: "Registro creado" });
    } catch (error) {  res.json ({message:error.message}) }
  };

//Actualizar un registro

export const updateBlog = async (req,res)=>{
    try {
        await BlogModel.update(req.body,{
            where : {id:req.params.id}
        })
        res.json({ message: "Registro actualizado" });
    } catch (error) {
        res.json ({message:error.message}) 
    }
}

//eliminar registro

export const deleteBlog = async (req,res)=>{
    try {
        await BlogModel.destroy({
            where : {id:req.params.id}
        })
        res.json({ message: "Registro Eliminado" });
    } catch (error) {
        res.json ({message:error.message}) 
    }
}
