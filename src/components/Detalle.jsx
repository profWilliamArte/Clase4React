import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Badge from 'react-bootstrap/Badge';
const Detalle = ({show, handleClose, productos}) => {
    const pv=parseFloat(productos.price-((productos.price*productos.discountPercentage)/100));
  return (
   <>
        <Modal show={show} onHide={handleClose} size="xl">
            <Modal.Header closeButton>
            <Modal.Title>Detalle del producto</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div className='row'>
                    <div className='col-md-6'> 
                    <img src={productos.thumbnail} alt={productos.title}  className="img-fluid img-thumbnail" />
                    </div>
                    <div className='col-md-6'> 
                        <h5><b>Nombre: </b>{productos.title}</h5>
                        <p><b>Categoria: </b>{productos.category}</p>
                        <p><b>Marca: </b>{productos.brand}</p>
                        <p><b>Existencia: </b>{productos.stock}</p>
                        <p><b>Puntuación: </b><Badge bg="danger">{productos.rating}</Badge></p>
                        <p><b>Descripción: </b>{productos.description}</p>
                        <h5 className='text-success'><b>Precio: </b>{productos.price}</h5>
                        <h5 className='text-success'><b>Descuento: </b>{productos.discountPercentage}</h5>
                        <h5 className='text-danger'><b>Descuento: </b>{pv.toFixed(2).toLocaleString()}</h5>
                    </div>
                </div>


            </Modal.Body>
            <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
                Close
            </Button>
            </Modal.Footer>
        </Modal>
   </>
  )
}

export default Detalle