import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import NavDropdown from 'react-bootstrap/NavDropdown';
const API = 'https://dummyjson.com/products/categories';

const MenuCategorias = () => {
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
      {datos && datos.map((categorias, index) => (
        <NavDropdown.Item as={Link} to={`/categorias/${categorias}`} key={index}>{capitalizeFirstLetter(categorias)}</NavDropdown.Item>
      ))}
    </>
  );
};

export default MenuCategorias;

