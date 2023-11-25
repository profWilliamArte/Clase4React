
import { useState, useEffect } from "react";
import Card from "./Card";
import ModalLateral from "./ModalLateral";
const API='https://dummyjson.com/products/category/smartphones';

const Mmoviles = () => {
  const [datos, setDatos] = useState([])
		const getDatos = async () =>{
			try {
				const response = await fetch(API);
				const data = await response.json();
        //console.log(data)
				setDatos(data.products);
			} catch (error) {
				console.error(error)
			}
		};
		useEffect(()=>{
			getDatos();
		},[]);
  return (
    
    <div className="container">

      <h1 className="text-center pt-5">Movil</h1>
      <ModalLateral/>
      <div className="row">
          {datos && datos.map((productos)=>(
            <Card productos={productos} key={productos.id}/>
          ))}
      </div>
    </div>
    








  )
}

export default Mmoviles