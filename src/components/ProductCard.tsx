// Esta línea importa useContext de React, que permite acceder al contexto del carrito.
import { useContext } from "react";

// Esta línea importa el CartContext, que contiene las funciones para manejar el carrito de compras.
import { CartContext } from "../context/CartContext";

// Esta línea importa el tipo Producto, que describe cómo se ve cada plato.
import { Producto } from "../data/productos";

// Esta línea exporta el componente ProductCard.
// Es una función que recibe un producto completo y devuelve JSX.
// Nota: category y stock se incluyen por compatibilidad con el tipo Producto, pero no se usan en la UI actual.
export const ProductCard = ({ id, name, image, price, ingredients, category, stock }: Producto) => {
  // Esta línea obtiene la función addToCart del contexto del carrito.
  // addToCart permite agregar productos al carrito cuando el usuario hace clic.
  const { addToCart } = useContext(CartContext);

  // Esta función devuelve el contenido visual de la tarjeta del producto.
  return (
    // Esta etiqueta <div> es el contenedor principal de la tarjeta.
    // className="card shadow-sm" aplica estilos de Bootstrap para una tarjeta con sombra.
    <div className="card shadow-sm">
      {/* Esta etiqueta <img> muestra la imagen del producto. */}
      {/* src={image} establece la fuente de la imagen. */}
      {/* className="card-img-top" aplica estilos de Bootstrap para la imagen en la parte superior. */}
      {/* alt={name} proporciona texto alternativo para accesibilidad. */}
      <img src={image} className="card-img-top" alt={name} />

      {/* Esta etiqueta <div> contiene el cuerpo de la tarjeta con la información del producto. */}
      {/* className="card-body text-center" centra el contenido y aplica estilos de Bootstrap. */}
      <div className="card-body text-center">
        {/* Esta etiqueta <h5> muestra el nombre del producto como título. */}
        {/* className="card-title fw-bold" aplica estilos de Bootstrap para título en negrita. */}
        <h5 className="card-title fw-bold">{name}</h5>

        {/* Esta etiqueta <p> muestra el precio del producto. */}
        {/* className="text-success fw-semibold" aplica color verde y fuente seminegrita. */}
        {/* price.toLocaleString("es-CL") formatea el precio en pesos chilenos. */}
        <p className="text-success fw-semibold">${price.toLocaleString("es-CL")}</p>

        {/* Este comentario indica que los ingredientes son visibles en la tarjeta. */}
        {/* Ingredientes visibles */}
        <div className="mb-3">
          {/* Esta etiqueta <small> muestra el texto "Ingredientes:" en color muted. */}
          <small className="text-muted">
            <strong>Ingredientes:</strong>
          </small>
          {/* Esta etiqueta <div> contiene los badges de los ingredientes. */}
          <div className="mt-1">
            {/* Esta línea mapea cada ingrediente a un badge (etiqueta). */}
            {/* ingredients.map() recorre la lista de ingredientes. */}
            {/* (ing, i) => <span... crea un span por cada ingrediente. */}
            {/* key={i} es necesario para que React identifique elementos únicos. */}
            {/* className="badge bg-light text-dark me-1 mb-1" aplica estilos de Bootstrap para badges. */}
            {ingredients.map((ing, i) => (
              <span key={i} className="badge bg-light text-dark me-1 mb-1">
                {ing}
              </span>
            ))}
          </div>
        </div>

        {/* Este botón permite agregar el producto al carrito. */}
        {/* className="btn btn-warning btn-sm" aplica estilos de Bootstrap para botón amarillo pequeño. */}
        {/* onClick ejecuta addToCart con los datos completos del producto cuando se hace clic. */}
        <button
          className="btn btn-warning btn-sm"
          onClick={() => addToCart({ id, name, image, price, ingredients, category, stock })}
        >
          Agregar 🛒
        </button>
      </div>
    </div>
  );
};
