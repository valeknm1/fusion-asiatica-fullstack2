// Esta línea importa herramientas necesarias de React.
// useState: Permite crear variables que cambian y actualizar la pantalla cuando cambian.
// useContext: Permite acceder a información compartida en la aplicación (como productos y mensajes).
import { useState, useContext } from "react";

// Esta línea importa el contexto de productos, que maneja la lista de platos del menú.
// ProductContext: Es como un almacén central donde se guardan todos los productos.
import { ProductContext } from "../context/ProductContext";

// Esta línea importa el contexto de contacto, que maneja los mensajes enviados por los usuarios.
// ContactContext: Es como un almacén central para los mensajes de contacto.
import { ContactContext } from "../context/ContactContext";

// Esta línea importa el tipo Producto, que describe cómo se ve cada plato (id, nombre, precio, etc.).
// Producto: Es como una plantilla que define qué propiedades tiene cada plato.
import { Producto } from "../data/productos";

// Esta línea define el componente Admin, que es una página completa de la aplicación.
// export const Admin = () => {: Declara que este es un componente llamado Admin que se puede usar en otras partes.
export const Admin = () => {
  // Esta línea obtiene funciones y datos del contexto de productos.
  // productos: La lista de todos los platos.
  // addProducto: Función para agregar un nuevo plato.
  // removeProducto: Función para eliminar un plato.
  // updateStock: Función para cambiar la cantidad disponible de un plato.
  const { productos, addProducto, removeProducto, updateStock } = useContext(ProductContext);

  // Esta línea obtiene datos del contexto de contacto.
  // submissions: La lista de mensajes enviados por usuarios.
  // removeSubmission: Función para eliminar un mensaje de contacto.
  const { submissions, removeSubmission } = useContext(ContactContext);

  // Esta línea crea una variable llamada "nuevo" que guarda la información del plato que se está creando.
  // Es un objeto con campos vacíos al inicio: nombre, precio, imagen, ingredientes, categoría.
  const [nuevo, setNuevo] = useState({ name: "", price: "", image: "", ingredients: "", category: "" });

  // Esta línea crea una variable para guardar cambios temporales en el stock de los productos.
  // Es un objeto donde la clave es el ID del producto y el valor es el nuevo stock (o undefined si no hay cambio).
  const [editingStock, setEditingStock] = useState<{ [key: number]: number | undefined }>({});

  // Esta función se ejecuta cuando el administrador hace clic en "Agregar" para crear un nuevo plato.
  const agregarProducto = () => {
    // Esta línea verifica que el nombre y precio no estén vacíos. Si faltan, muestra una alerta y detiene la función.
    if (!nuevo.name || !nuevo.price) return alert("Completa todos los campos");

    // Esta línea convierte los ingredientes de texto (separados por coma) en una lista de textos.
    // Por ejemplo: "Arroz, Pollo, Verduras" se convierte en ["Arroz", "Pollo", "Verduras"].
    const ingredientsArray = nuevo.ingredients ? nuevo.ingredients.split(',').map(i => i.trim()) : [];

    // Esta línea llama a la función addProducto para guardar el nuevo plato en el sistema.
    // Le pasa toda la información: nombre, precio convertido a número, imagen, ingredientes, categoría y stock inicial de 10.
    addProducto({
      name: nuevo.name,
      price: parseInt(nuevo.price), // Convierte el precio de texto a número.
      image: nuevo.image || "/img/default.jpg", // Usa imagen por defecto si no se proporciona.
      ingredients: ingredientsArray, // La lista de ingredientes.
      category: nuevo.category || "General", // Categoría por defecto si no se especifica.
      stock: 10, // Cantidad inicial de platos disponibles.
    });

    // Esta línea limpia el formulario después de agregar el producto, dejando todos los campos vacíos.
    setNuevo({ name: "", price: "", image: "", ingredients: "", category: "" });
  };

  // Esta función se ejecuta cuando el administrador hace clic en "Eliminar" para quitar un plato.
  const eliminarProducto = (id: number) => {
    // Esta línea llama a la función removeProducto para eliminar el plato con ese ID.
    removeProducto(id);
  };

  // Esta parte devuelve el contenido visual de la página (el JSX).
  // Es como el HTML de la página, pero escrito en JavaScript.
  return (
    // Este es el contenedor principal de la página, con clases de Bootstrap para el diseño.
    <div className="container my-5">
      {/* Este es el título principal de la página. */}
      <h2 className="text-center text-primary mb-4">Panel de Administración 👨‍🍳</h2>

      {/* Esta sección es para agregar un nuevo plato. Es una tarjeta con un formulario. */}
      {/* Agregar producto */}
      <div className="card p-4 mb-4">
        <h4>Agregar Nuevo Plato</h4>
        {/* Campo de texto para el nombre del plato. */}
        <input
          type="text"
          className="form-control my-2"
          placeholder="Nombre del plato"
          value={nuevo.name} // Muestra el valor actual.
          onChange={(e) => setNuevo({ ...nuevo, name: e.target.value })} // Actualiza el nombre cuando se escribe.
        />
        {/* Campo numérico para el precio. */}
        <input
          type="number"
          className="form-control my-2"
          placeholder="Precio"
          value={nuevo.price} // Muestra el precio actual.
          onChange={(e) => setNuevo({ ...nuevo, price: e.target.value })} // Actualiza el precio cuando se escribe.
        />
        {/* Campo de texto para la URL de la imagen. */}
        <input
          type="text"
          className="form-control my-2"
          placeholder="URL de imagen (opcional)"
          value={nuevo.image} // Muestra la imagen actual.
          onChange={(e) => setNuevo({ ...nuevo, image: e.target.value })} // Actualiza la imagen cuando se escribe.
        />
        {/* Campo de texto para los ingredientes. */}
        <input
          type="text"
          className="form-control my-2"
          placeholder="Ingredientes (separados por coma)"
          value={nuevo.ingredients} // Muestra los ingredientes actuales.
          onChange={(e) => setNuevo({ ...nuevo, ingredients: e.target.value })} // Actualiza los ingredientes cuando se escribe.
        />
        {/* Campo de texto para la categoría. */}
        <input
          type="text"
          className="form-control my-2"
          placeholder="Categoría"
          value={nuevo.category} // Muestra la categoría actual.
          onChange={(e) => setNuevo({ ...nuevo, category: e.target.value })} // Actualiza la categoría cuando se escribe.
        />
        {/* Botón para agregar el producto. Cuando se hace clic, ejecuta agregarProducto. */}
        <button className="btn btn-success" onClick={agregarProducto}>
          Agregar
        </button>
      </div>

      {/* Esta sección muestra una tabla con todos los productos existentes. */}
      {/* Lista de productos */}
      <table className="table table-striped">
        {/* Encabezado de la tabla con los nombres de las columnas. */}
        <thead>
          <tr>
            <th>ID</th>
            <th>Plato</th>
            <th>Precio</th>
            <th>Stock</th>
            <th></th>
          </tr>
        </thead>
        {/* Cuerpo de la tabla con los datos de cada producto. */}
        <tbody>
          {/* Esta línea recorre cada producto en la lista y crea una fila para cada uno. */}
          {productos.map((p: Producto) => (
            <tr key={p.id}> {/* Cada fila tiene una clave única que es el ID del producto. */}
              <td>{p.id}</td> {/* Muestra el ID del producto. */}
              <td>{p.name}</td> {/* Muestra el nombre del producto. */}
              <td>${p.price.toLocaleString("es-CL")}</td> {/* Muestra el precio formateado en pesos chilenos. */}
              <td>
                {/* Campo editable para cambiar el stock. */}
                <input
                  type="number"
                  className="form-control form-control-sm"
                  value={editingStock[p.id] !== undefined ? editingStock[p.id] : p.stock} // Muestra el stock actual o el que se está editando.
                  onChange={(e) => setEditingStock({ ...editingStock, [p.id]: parseInt(e.target.value) || 0 })} // Actualiza el stock temporal cuando se escribe.
                  onBlur={() => { // Se ejecuta cuando el usuario deja de editar el campo.
                    if (editingStock[p.id] !== undefined) { // Si hay un cambio pendiente.
                      updateStock(p.id, editingStock[p.id]!); // Actualiza el stock real.
                      setEditingStock({ ...editingStock, [p.id]: undefined }); // Limpia el cambio temporal.
                    }
                  }}
                  style={{ width: '80px' }} // Hace el campo más pequeño.
                />
              </td>
              <td>
                {/* Botón para eliminar el producto. */}
                <button
                  className="btn btn-danger btn-sm"
                  onClick={() => eliminarProducto(p.id)} // Cuando se hace clic, elimina el producto.
                >
                  Eliminar
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Esta sección muestra una tabla con los mensajes de contacto. */}
      {/* Contact Submissions */}
      <h3 className="mt-5 mb-3">Mensajes de Contacto 📧</h3>
      <table className="table table-striped">
        {/* Encabezado de la tabla. */}
        <thead>
          <tr>
            <th>ID</th>
            <th>Nombre</th>
            <th>Correo</th>
            <th>Categoría</th>
            <th>Mensaje</th>
            <th>Fecha</th>
            <th></th>
          </tr>
        </thead>
        {/* Cuerpo de la tabla con los mensajes. */}
        <tbody>
          {/* Recorre cada mensaje y crea una fila. */}
          {submissions.map((s) => (
            <tr key={s.id}> {/* Clave única para cada fila. */}
              <td>{s.id}</td> {/* ID del mensaje. */}
              <td>{s.nombre}</td> {/* Nombre de quien envió el mensaje. */}
              <td>{s.correo}</td> {/* Correo electrónico. */}
              <td>{s.categoria}</td> {/* Categoría del mensaje. */}
              <td>{s.mensaje}</td> {/* Contenido del mensaje. */}
              <td>{s.fecha}</td> {/* Fecha cuando se envió. */}
              <td>
                {/* Botón para eliminar el mensaje. */}
                <button
                  className="btn btn-danger btn-sm"
                  onClick={() => removeSubmission(s.id)} // Elimina el mensaje cuando se hace clic.
                >
                  Eliminar
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Esta sección es para usuarios registrados, pero aún no está implementada. */}
      {/* Registered Users */}
      <h3 className="mt-5 mb-3">Usuarios Registrados 👥</h3>
      <p>Funcionalidad para ver usuarios registrados próximamente.</p>
    </div>
  );
};
