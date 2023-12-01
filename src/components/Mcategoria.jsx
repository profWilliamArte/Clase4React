
import { useParams } from "react-router-dom"
import { useState, useEffect } from "react";
import Card from "./Card"
import ModalLateral from "./ModalLateral";
const API='https://dummyjson.com/products/category/'


const Mcategoria = ({carrito,setCarrito}) => {
 
  const params = useParams() // parametros 

  const [datos, setDatos] = useState([])
		const getDatos = async () =>{
			try {
        const URI=API+params.id;
        //console.log(URI)
				const response = await fetch(URI);
				const data = await response.json();
        //console.log(data)
				setDatos(data.products);
			} catch (error) {
				console.error(error)
			}
		};
		useEffect(()=>{
			  getDatos();
		},[params.id]);
  return (
    <div className="container">
        <h3 className="text-center pt-5">Productos de la Categoria ({params.id.toUpperCase()})</h3>
        <ModalLateral/>
        
        <div className="row">
      
            {datos && datos.map((productos)=>(
              <Card carrito={carrito} setCarrito={setCarrito} productos={productos} key={productos.id}/>
            ))}
        </div>
    </div>
    
  )
}

export default Mcategoria