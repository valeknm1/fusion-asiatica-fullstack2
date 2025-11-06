// Esta línea importa herramientas necesarias de React.
// createContext: Crea un "contexto" que permite compartir información entre componentes.
// useState: Permite crear variables que cambian y actualizar la pantalla.
// ReactNode: Tipo para elementos React (como componentes).
// useEffect: Ejecuta código cuando algo cambia.
import { createContext, useState, ReactNode, useEffect } from "react";

// Esta línea importa el tipo Producto, que describe cómo se ve cada plato.
import { Producto } from "../data/productos";

// Esta línea importa la lista inicial de productos desde el archivo de datos.
import productos from "../data/productos";

// Esta interfaz define qué funciones y datos estarán disponibles en el contexto.
// Es como un contrato que dice qué puede hacer el contexto.
interface ProductContextType {
  productos: Producto[]; // La lista de productos.
  addProducto: (product: Omit<Producto, 'id'>) => void; // Función para agregar un producto (sin ID, se genera automáticamente).
  removeProducto: (id: number) => void; // Función para eliminar un producto por su ID.
  updateStock: (id: number, stock: number) => void; // Función para cambiar el stock de un producto.
}

// Esta línea crea el contexto con valores por defecto vacíos.
// Es como crear un almacén vacío que luego se llenará.
export const ProductContext = createContext<ProductContextType>({
  productos: [], // Lista vacía por defecto.
  addProducto: () => {}, // Función vacía por defecto.
  removeProducto: () => {}, // Función vacía por defecto.
  updateStock: () => {}, // Función vacía por defecto.
});

// Esta línea define el componente ProductProvider, que envuelve a otros componentes.
// Proporciona el contexto a todos los componentes hijos.
export const ProductProvider = ({ children }: { children: ReactNode }) => {
  // Esta línea crea una variable de estado para guardar la lista de productos.
  // Al inicio, intenta cargar productos guardados en el navegador, o usa la lista por defecto.
  const [productosState, setProductosState] = useState<Producto[]>(() => {
    const savedProductos = localStorage.getItem('productos'); // Busca productos guardados en el navegador.
    return savedProductos ? JSON.parse(savedProductos) : productos; // Si hay guardados, los usa; si no, usa la lista inicial.
  });

  // Este efecto se ejecuta cada vez que cambia la lista de productos.
  // Guarda la lista actual en el navegador para que no se pierda al recargar la página.
  useEffect(() => {
    localStorage.setItem('productos', JSON.stringify(productosState)); // Convierte la lista a texto y la guarda.
  }, [productosState]); // Se ejecuta cuando productosState cambia.

  // Esta función agrega un nuevo producto a la lista.
  const addProducto = (product: Omit<Producto, 'id'>) => {
    const newId = Math.max(...productosState.map(p => p.id)) + 1; // Calcula un nuevo ID único.
    const newProduct: Producto = { ...product, id: newId }; // Crea el producto con el nuevo ID.
    setProductosState([...productosState, newProduct]); // Agrega el producto a la lista.
  };

  // Esta función elimina un producto de la lista por su ID.
  const removeProducto = (id: number) => {
    setProductosState(productosState.filter(p => p.id !== id)); // Filtra la lista, quitando el producto con ese ID.
  };

  // Esta función actualiza el stock de un producto específico.
  const updateStock = (id: number, stock: number) => {
    setProductosState(productosState.map(p => p.id === id ? { ...p, stock } : p)); // Cambia el stock del producto con ese ID.
  };

  // Esta parte devuelve el proveedor del contexto, que envuelve a los componentes hijos.
  // Los hijos pueden acceder a productos, addProducto, removeProducto y updateStock.
  return (
    <ProductContext.Provider value={{ productos: productosState, addProducto, removeProducto, updateStock }}>
      {children} {/* Los componentes hijos van aquí. */}
    </ProductContext.Provider>
  );
};
