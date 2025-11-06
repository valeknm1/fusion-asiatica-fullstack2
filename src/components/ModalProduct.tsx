// Esta interfaz define las propiedades que recibe el componente ModalProduct.
// Es como un contrato que dice qué información necesita el modal para funcionar.
interface ModalProductProps {
  id: number; // Identificador único del producto (usado para el ID del modal).
  name: string; // Nombre del producto (se muestra en el título del modal).
  ingredients: string[]; // Lista de ingredientes del producto.
}

// Esta línea exporta el componente ModalProduct.
// Es una función de React que recibe las propiedades y devuelve JSX.
export const ModalProduct = ({ id, name, ingredients }: ModalProductProps) => (
  // Esta etiqueta <div> es el contenedor principal del modal.
  // className="modal fade" aplica estilos de Bootstrap para el modal con animación.
  // id={`modal${id}`} crea un ID único para cada modal (ej: modal1, modal2).
  // tabIndex={-1} hace que el modal no sea accesible por tabulación hasta que se abra.
  // aria-hidden="true" indica que el modal está oculto inicialmente para lectores de pantalla.
  <div
    className="modal fade"
    id={`modal${id}`}
    tabIndex={-1}
    aria-hidden="true"
  >
    {/* Esta etiqueta <div> es el diálogo del modal (la ventana emergente). */}
    <div className="modal-dialog">
      {/* Esta etiqueta <div> es el contenido del modal. */}
      <div className="modal-content">
        {/* Esta etiqueta <div> es la cabecera del modal. */}
        <div className="modal-header">
          {/* Esta etiqueta <h5> muestra el título del modal con el nombre del producto. */}
          <h5 className="modal-title">{name}</h5>
          {/* Este botón permite cerrar el modal. */}
          {/* className="btn-close" aplica estilos de Bootstrap para el botón de cerrar. */}
          {/* data-bs-dismiss="modal" es un atributo de Bootstrap que cierra el modal al hacer clic. */}
          <button type="button" className="btn-close" data-bs-dismiss="modal"></button>
        </div>
        {/* Esta etiqueta <div> es el cuerpo del modal donde se muestra la información. */}
        <div className="modal-body">
          {/* Esta etiqueta <ul> crea una lista no ordenada para los ingredientes. */}
          <ul>
            {/* Esta línea mapea cada ingrediente a un elemento de lista. */}
            {/* ingredients.map() recorre la lista de ingredientes. */}
            {/* (i, idx) => <li key={idx}>{i}</li> crea un <li> por cada ingrediente. */}
            {/* key={idx} es necesario en React para identificar elementos únicos en listas. */}
            {ingredients.map((i, idx) => (
              <li key={idx}>{i}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  </div>
);
