// Esta línea importa useContext y useState de React.
// useContext permite acceder a contextos compartidos.
// useState permite crear variables de estado que cambian con el tiempo.
import { useContext, useState } from "react";

// Esta línea importa el ProductContext, que contiene la lista de productos disponibles.
import { ProductContext } from "../context/ProductContext";

// Esta línea importa el componente ProductCard, que muestra la información de un producto.
import { ProductCard } from "../components/ProductCard";

// Esta línea exporta el componente Menu.
// Es una función de React que devuelve la página del menú con filtros y búsqueda.
export const Menu = () => {
  // Esta línea obtiene la lista de productos del contexto de productos.
  // productos es un array con todos los platos disponibles.
  const { productos } = useContext(ProductContext);

  // Estas líneas crean variables de estado para el término de búsqueda y la categoría seleccionada.
  // useState("") inicializa cada variable con una cadena vacía.
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");

  // Esta línea crea una lista única de categorías a partir de los productos.
  // new Set() elimina duplicados, y ... convierte el Set en un array.
  const categories = [...new Set(productos.map(p => p.category))];

  // Esta línea filtra los productos según el término de búsqueda y la categoría seleccionada.
  // filter() devuelve un nuevo array con solo los productos que cumplen las condiciones.
  const filteredProductos = productos.filter((p) => {
    // Esta línea verifica si el nombre del producto incluye el término de búsqueda (ignorando mayúsculas/minúsculas).
    const matchesSearch = p.name.toLowerCase().includes(searchTerm.toLowerCase());

    // Esta línea verifica si no hay categoría seleccionada o si la categoría del producto coincide.
    const matchesCategory = selectedCategory === "" || p.category === selectedCategory;

    // Esta línea devuelve true solo si ambas condiciones se cumplen.
    return matchesSearch && matchesCategory;
  });

  // Esta parte devuelve el contenido visual de la página del menú.
  return (
    // Este contenedor principal centra el contenido y agrega márgenes verticales.
    <div className="container my-5">
      {/* Este es el título principal de la página del menú. */}
      <h2 className="text-center text-primary mb-4">Menú Completo 🍣</h2>

      {/* Esta sección contiene la barra de búsqueda y el filtro de categoría. */}
      <div className="mb-4">
        <div className="row">
          {/* Campo de búsqueda para filtrar productos por nombre. */}
          <div className="col-md-6">
            <input
              type="text"
              className="form-control"
              placeholder="Buscar platillos por nombre..."
              value={searchTerm} // Muestra el término de búsqueda actual.
              onChange={(e) => setSearchTerm(e.target.value)} // Actualiza el estado cuando el usuario escribe.
            />
          </div>
          {/* Selector de categoría para filtrar productos. */}
          <div className="col-md-6">
            <select
              className="form-select"
              value={selectedCategory} // Muestra la categoría seleccionada.
              onChange={(e) => setSelectedCategory(e.target.value)} // Actualiza el estado cuando el usuario selecciona.
            >
              {/* Opción para mostrar todas las categorías. */}
              <option value="">Todas las categorías</option>
              {/* Esta línea mapea cada categoría a una opción del selector. */}
              {categories.map((category) => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {/* Esta sección muestra los productos filtrados en una cuadrícula. */}
      <div className="row g-4">
        {/* Esta línea mapea cada producto filtrado a una tarjeta de producto. */}
        {filteredProductos.map((p) => (
          <div key={p.id} className="col-md-4 col-lg-3">
            <ProductCard {...p} />
          </div>
        ))}
      </div>

      {/* Esta sección muestra un mensaje si no hay productos que coincidan con los filtros. */}
      {filteredProductos.length === 0 && (
        <div className="text-center mt-5">
          <p className="text-muted">No se encontraron platillos que coincidan con tu búsqueda.</p>
        </div>
      )}
    </div>
  );
};
