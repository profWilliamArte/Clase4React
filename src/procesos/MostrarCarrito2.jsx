
import React from "react";
import Swal from "sweetalert2";

const formatearMoneda = (valor) => {
  return valor.toLocaleString("es", {
    style: "currency",
    currency: "USD",
    useGrouping: true,
  });
};

const MostrarCarrito2 = ({carrito}) => {
    console.log(" desde Mostrar Carrito ")
    console.log(carrito)
    let totalCantidad = 0;
    let totalPrecio = 0;
  
    const carritoTabla = carrito.map((producto) => {
      const subtotal = producto.price * producto.cant;
      totalCantidad += producto.cant;
      totalPrecio += subtotal;
  
      const precioFormateado = formatearMoneda(producto.price);
      const subtotalFormateado = formatearMoneda(subtotal);
  
      return (
        <tr key={producto.id}>
          <td>
            <img src={producto.thumbnail} alt="" className="imgCarrito" />
          </td>
          <td>{producto.title}</td>
          <td>{producto.cant.toLocaleString("es", { useGrouping: true })}</td>
          <td>{precioFormateado}</td>
          <td>{subtotalFormateado}</td>
        </tr>
      );
    });
  
    const totalPrecioFormateado = formatearMoneda(totalPrecio);
  
    const tablaHTML = (
      <div className="text-center">
        <table className="table table-striped table-bordered table-hover table-sm tablaCarrito">
          <thead className="table-dark">
            <tr>
              <th>Imagen</th>
              <th>Título</th>
              <th>Cantidad</th>
              <th>Precio</th>
              <th>Total</th>
            </tr>
          </thead>
          <tbody>
            {carritoTabla}
            <tr>
              <td colSpan="2"></td>
              <td>{totalCantidad.toLocaleString("es", { useGrouping: true })}</td>
              <td></td>
              <td>{totalPrecioFormateado}</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  
    Swal.fire({
      position: "top-end",
      title: "Carrito",
      html: tablaHTML,
    });
  
    return null; // No se renderiza nada en el componente MostrarCarrito
  };

export default MostrarCarrito2