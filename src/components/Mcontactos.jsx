import React from 'react'

const Mcontactos = () => {
  return (
    <div className='container'>
       <h1 className="text-center py-5">Contactos</h1>
       <div className='row my-5'>
          <div className='col-md-6'>
            <h5><b>Direccion:</b> </h5>
            <h5><b>Telefonos:</b> </h5>
            <h5><b>Correos:</b> </h5>
          </div>
          <div className='col-md-6'>
            <img src="contacto1.jpg" alt="contacto1" className='img-fluid img-thumbnail' />
        </div>
       </div>
    </div>
   
  )
}

export default Mcontactos