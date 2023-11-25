import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import NavDropdown from 'react-bootstrap/NavDropdown';
const API = 'https://dummyjson.com/products/categories';

const MenuCatLateral = () => {

  const [datos, setDatos] = useState([]);
  const getDatos = async () => {
    try {
      const response = await fetch(API);
      const data = await response.json();
      //console.log(data);
      setDatos(data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getDatos();
  }, []);

  const capitalizeFirstLetter = (string) => {
    
    return string.charAt(0).toUpperCase() + string.slice(1);
  };
  
  return (
  <>
    <ul className="list-group">
        {datos && datos.map((categorias, index) => (
             <li  className="list-group-item list-group-item-action" key={index}>
                 <NavDropdown.Item as={Link} to={`/categorias/${categorias}`} key={index}>{capitalizeFirstLetter(categorias)}</NavDropdown.Item>
            </li>
         
        ))}
    </ul>
  </>
  )
}

export default MenuCatLateral


/*

<ul class="list-group">
  <li class="list-group-item">An item</li>
  <li class="list-group-item">A second item</li>
  <li class="list-group-item">A third item</li>
  <li class="list-group-item">A fourth item</li>
  <li class="list-group-item">And a fifth one</li>
</ul>

*/