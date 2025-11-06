// Esta línea importa useContext de React, que permite acceder a contextos compartidos.
import { useContext } from "react";

// Esta línea importa el CartContext, que contiene la información del carrito de compras.
import { CartContext } from "../context/CartContext";

// Esta línea importa Link de react-router-dom, que permite crear enlaces de navegación.
import { Link } from "react-router-dom";

// Esta línea exporta el componente Checkout.
// Es una función de React que devuelve la página de checkout del carrito.
export const Checkout = () => {
  // Esta línea obtiene las funciones y datos del carrito del contexto.
  // cart: lista de productos en el carrito.
  // removeFromCart: función para quitar un producto del carrito.
  // updateQuantity: función para cambiar la cantidad de un producto.
  // clearCart: función para vaciar todo el carrito.
  const { cart, removeFromCart, updateQuantity, clearCart } = useContext(CartContext);

  // Esta línea calcula el total sumando precio * cantidad de cada item.
  // reduce() acumula el resultado empezando desde 0.
  const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  // Esta línea calcula el IVA (19% del total).
  const iva = total * 0.19;

  // Esta línea calcula el precio neto (total menos IVA).
  const neto = total - iva;

  // Esta función maneja el pago simulado.
  // Muestra una alerta de éxito y vacía el carrito.
  const handlePay = () => {
    alert("✅ ¡Compra realizada con éxito!");
    clearCart();
  };

  // Si el carrito está vacío, muestra un mensaje y un enlace para volver al menú.
  if (cart.length === 0) {
    return (
      <div className="text-center mt-5">
        <h3>Tu carrito está vacío 🛒</h3>
        <Link to="/menu" className="btn btn-outline-primary mt-3">
          Volver al Menú
        </Link>
      </div>
    );
  }

  // Esta parte devuelve el contenido visual de la página de checkout.
  return (
    // Este contenedor principal centra el contenido y agrega márgenes verticales.
    <div className="container my-5">
      {/* Este es el título principal de la página de checkout. */}
      <h2 className="text-center text-primary mb-4">Tu Carrito</h2>

      {/* Esta tabla muestra los productos en el carrito. */}
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Producto</th>
            <th>Precio</th>
            <th>Cantidad</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {/* Esta línea mapea cada item del carrito a una fila de la tabla. */}
          {cart.map((item) => (
            <tr key={item.id}>
              <td>{item.name}</td>
              <td>${item.price.toLocaleString("es-CL")}</td>
              <td>
                {/* Controles para cambiar la cantidad del producto. */}
                <div className="d-flex align-items-center">
                  <button
                    className="btn btn-outline-secondary btn-sm me-2"
                    onClick={() => updateQuantity(item.id, item.quantity - 1)}
                  >
                    -
                  </button>
                  <span>{item.quantity}</span>
                  <button
                    className="btn btn-outline-secondary btn-sm ms-2"
                    onClick={() => updateQuantity(item.id, item.quantity + 1)}
                  >
                    +
                  </button>
                </div>
              </td>
              <td>
                {/* Botón para eliminar el producto del carrito. */}
                <button
                  className="btn btn-danger btn-sm"
                  onClick={() => removeFromCart(item.id)}
                >
                  Eliminar
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Esta sección muestra el resumen de precios. */}
      <div className="text-end">
        <p>Precio Neto: ${neto.toLocaleString("es-CL")}</p>
        <p>IVA (19%): ${iva.toLocaleString("es-CL")}</p>
        <h4 className="fw-bold">Total: ${total.toLocaleString("es-CL")}</h4>
      </div>

      {/* Esta sección contiene los botones de acción. */}
      <div className="text-end mt-3">
        <button className="btn btn-success me-2" onClick={handlePay}>
          Finalizar Compra 💳
        </button>
        <Link to="/menu" className="btn btn-outline-primary">
          Volver al Menú
        </Link>
      </div>
    </div>
  );
};
