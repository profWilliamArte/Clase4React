import { useState, useEffect } from "react";
import Card from "./Card";
import { useLocation } from 'react-router-dom';
const APIBuscar='https://dummyjson.com/products/search?q='

const MBucar = () => {
  const location = useLocation();
  const valueSearch = location.state;

  const [datos, setDatos] = useState([])
  const [loading, setLoading] = useState(true);
  const [noExiste, setNoExiste] = useState(null);



  const getDatos = async () =>{
    try {
      const response = await fetch(APIBuscar+valueSearch);
      const data = await response.json();
      console.log(data)
      setDatos(data.products);
      setLoading(false);
      setNoExiste(false)
      if (data.products.length === 0) {
        setNoExiste("No hay datos para esta busqueda: ")
      }
    } catch (error) {
      console.error(error)
      setLoading(false);
    }
  };
  useEffect(()=>{
    getDatos();
  },[valueSearch]);

  if (loading) {
    return   <h3 className="text-center pt-5">Cargando.....</h3>
  }
  if (noExiste) {
    return <h3 className="text-center pt-5">{noExiste}{valueSearch} </h3>
  }
  return (
    <div className="container">
        <h1 className="text-center pt-5">{valueSearch}</h1>
        <div className="row">

            {datos && datos.map((productos)=>(
                <Card productos={productos} key={productos.id}/>
            ))}
        </div>
  </div>
  )
}

export default MBucar