
import './App.css'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "../src/components/Header"
import Footer from "../src/components/Footer"
import Inicio from "./pages/Inicio"
import Moviles from './pages/Moviles';
import Laptop from './pages/Laptop';
import Contactos from './pages/Contactos';
import Tienda from './pages/Tienda'
import Categorias from './pages/Categorias';
import Busquedas from './pages/Busquedas';
import { useState } from 'react';





function App() {
 
	const [carrito, setCarrito] = useState([]);
  

  return (
    <>
     
       <BrowserRouter>
        <Header  carrito={carrito} setCarrito={setCarrito}/>
          <Routes>
            <Route path="/" element={<Inicio/>} />
            <Route path="/Inicio" element={<Inicio/>} />
            <Route path="/Movil" element={<Moviles carrito={carrito} setCarrito={setCarrito}/>} />
            <Route path="/Laptop" element={<Laptop carrito={carrito} setCarrito={setCarrito}/>} />
            <Route path="/Tienda" element={<Tienda carrito={carrito} setCarrito={setCarrito}/>} />
            <Route path='/categorias/:id' element={<Categorias  carrito={carrito} setCarrito={setCarrito}/>}/>
            <Route path="/Contacto" element={<Contactos/>} />
            <Route path='/Busquedas' element={<Busquedas/>}/>
            <Route path="*" element={<Inicio/>} />  
          </Routes>
          <Footer/>
      </BrowserRouter>
    </>
  )
}

export default App
