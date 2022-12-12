import {useState,useEffect} from "react"
import {Link} from "react-router-dom"
import {collection,getDocs,deleteDoc,doc} from "firebase/firestore"
import {db} from "../firebaseConfig/firebase.js"

import Swal from "sweetalert2"
import withReactContent from "sweetalert2-react-content"

const MySwal = withReactContent(Swal)

const Show = ()=>{
// 1 configurar los hooks
const [products,setProducts] = useState ([])
//2 referenciar a las bd firestore
const productsCollection = collection(db,"products")
//3 funcion para mostrar todos los Docs
const getProducts = async()=>{
    const data = await getDocs(productsCollection)
/*     console.log(data.docs) */
    setProducts(
        data.docs.map((doc)=>({...doc.data(),id:doc.id}))
    )
}
// 4 funcion eliminar un documento
const deleteProducts = async (id)=>{
    const productDoc = doc (db,"products",id)
    await deleteDoc(productDoc)
    getProducts()
}
//5 funcion de confirmacion para sweet alert
const confirmDelete = (id)=>{
    MySwal.fire({
        title: 'Estas Seguro/a que queres Borrar?',
        text: "No podrás revertir este cambio!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Si,Borralo!'
      }).then((result) => {
        if (result.isConfirmed) {
            deleteProducts(id)
          Swal.fire(
            'Borrado!',
            'Tu Doc ha sido Borrado',
            'success'
          )
        }
      })
}
//6 usamos useEffect
useEffect(()=>{
getProducts()
  // eslint-disable-next-line
},[])
//7 devolvemos la vista de nuestro componente
return(
    <>
<div className="container">
    <div className="row">
<div className="col">
<div className="d-grid gap-2">
<Link to="/create" className="btn btn-secondary mt-2 mb-2">create </Link>
</div>
<table className="table table-dark table-hover">
<thead>
   <tr>
    <td>Description</td>
    <td>Stock</td>
    <td>action</td>
   </tr>
</thead>
<tbody>
    {products.map((product)=>(
       <tr key={product.id}>
<td>{product.description}</td>
<td>{product.stock}</td>
<td>
    <Link to={`/edit/${product.id}`}className="btn btn-light"><i className="fa-solid fa-pencil"></i> </Link>
<button onClick={()=>{confirmDelete(product.id)}} className="btn  btn-danger"><i className="fa-solid fa-trash"></i></button>
</td>
       </tr>
    ))}
</tbody>
</table>
</div>
    </div>

</div>

    </>
)
}
export default Show



