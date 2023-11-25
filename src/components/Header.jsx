
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link, useNavigate} from 'react-router-dom';
import MenuCategorias from './MenuCategorias';
import { useState } from 'react';




const Header = () => {
  const [valueSearch, setValueSearch]=useState("")

  const onSearchChange = (e) => {
      setValueSearch(e.target.value);
  };
  const navigate = useNavigate();

  const onSearchSubmit = e => {
    e.preventDefault();
    navigate('/Busquedas', {
      state: valueSearch,
    });	
};



  return (
    <Navbar expand="lg" className="bg-black" data-bs-theme="dark">
    <Container fluid>
      <Navbar.Brand href="#"><img src="logo.jpg" alt="logo" width={100} /></Navbar.Brand>
      <Navbar.Toggle aria-controls="navbarScroll" />
      <Navbar.Collapse id="navbarScroll">
        <Nav className="me-auto my-2 my-lg-0" style={{ maxHeight: '100px' }} navbarScroll>
          <Link to="/Inicio" className="nav-link">Inicio</Link>
          <Link to="/Movil" className='nav-link'>Movil</Link>
          <Link to="/Laptop" className='nav-link'>Laptop</Link>
          <Link to="/Tienda" className='nav-link'>Tienda</Link>
          <NavDropdown title="Categorias" id="basic-nav-dropdown">
            <MenuCategorias/>
          </NavDropdown>
          <Link  to="/Contacto" className='nav-link'>Contacto</Link>
        </Nav>
        <Form className="d-flex" onSubmit={onSearchSubmit}>
          <input value={valueSearch} onChange={onSearchChange} type="search" placeholder="Search" className="form-control me-2 " aria-label="Search"/>
          <Button variant="outline-success" type='submit'>Search</Button>
        </Form>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  )
}

export default Header