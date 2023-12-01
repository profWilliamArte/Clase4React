
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';

import MenuCatLateral from './MenuCatLateral';
const ModalLateral = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <div className='text-center mb-3'>
        <Button variant="primary" onClick={handleShow} className='btn btn-danger'>
          Categorias
        </Button>
      </div>


      <Offcanvas show={show} onHide={handleClose} data-bs-theme='dark'> 
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Categorias</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <MenuCatLateral/>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  )
}

export default ModalLateral