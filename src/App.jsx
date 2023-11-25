
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





function App() {


  return (
    <>
     
       <BrowserRouter>
        <Header/>
          <Routes>
            <Route path="/" element={<Inicio/>} />
            <Route path="/Inicio" element={<Inicio/>} />
            <Route path="/Movil" element={<Moviles/>} />
            <Route path="/Laptop" element={<Laptop/>} />
            <Route path="/Tienda" element={<Tienda/>} />
            <Route path="/Contacto" element={<Contactos/>} />
            <Route path='/categorias/:id' element={<Categorias/>}/>
            <Route path='/Busquedas' element={<Busquedas/>}/>
            <Route path="*" element={<Inicio/>} />  
          </Routes>
          <Footer/>
      </BrowserRouter>
    </>
  )
}

export default App
