// Esta línea importa herramientas necesarias de React.
// createContext: Crea un espacio compartido para datos en la aplicación.
// useState: Permite guardar y cambiar información dentro del componente.
// ReactNode: Tipo para elementos React (como componentes).
import { createContext, useState, ReactNode } from "react";

// Esta línea importa el tipo Producto, que describe cómo se ve cada plato.
import { Producto } from "../data/productos";

// Esta interfaz define cómo se ve un elemento en el carrito de compras.
// Cada elemento tiene un ID, nombre, imagen, precio y cantidad.
interface CartItem {
  id: number; // Identificador único del producto.
  name: string; // Nombre del producto.
  image: string; // Ruta de la imagen del producto.
  price: number; // Precio del producto.
  quantity: number; // Cantidad de este producto en el carrito.
}

// Esta interfaz define qué funciones y datos estarán disponibles en el contexto del carrito.
// cart: La lista de productos en el carrito.
// addToCart: Función para agregar un producto al carrito.
// removeFromCart: Función para quitar un producto del carrito.
// updateQuantity: Función para cambiar la cantidad de un producto.
// clearCart: Función para vaciar todo el carrito.
interface CartContextType {
  cart: CartItem[]; // Lista de elementos en el carrito.
  addToCart: (product: Producto) => void; // Agrega un producto al carrito.
  removeFromCart: (id: number) => void; // Quita un producto del carrito por su ID.
  updateQuantity: (id: number, quantity: number) => void; // Cambia la cantidad de un producto.
  clearCart: () => void; // Vacía todo el carrito.
}

// Esta línea crea el contexto del carrito con valores por defecto vacíos.
// Es como crear un almacén vacío que luego se llenará.
export const CartContext = createContext<CartContextType>({
  cart: [], // Lista vacía por defecto.
  addToCart: () => {}, // Función vacía por defecto.
  removeFromCart: () => {}, // Función vacía por defecto.
  updateQuantity: () => {}, // Función vacía por defecto.
  clearCart: () => {}, // Función vacía por defecto.
});

// Esta línea define el componente CartProvider, que envuelve a otros componentes.
// Proporciona el contexto del carrito a todos los componentes hijos.
export const CartProvider = ({ children }: { children: ReactNode }) => {
  // Esta línea crea una variable de estado para guardar la lista de productos en el carrito.
  // Inicialmente está vacía.
  const [cart, setCart] = useState<CartItem[]>([]);

  // Esta función agrega un producto al carrito.
  const addToCart = (product: Producto) => {
    const exists = cart.find((item) => item.id === product.id); // Busca si el producto ya está en el carrito.
    if (exists) {
      // Si ya existe, aumenta la cantidad en 1.
      setCart(
        cart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 } // Copia el elemento y suma 1 a la cantidad.
            : item // Deja los otros elementos igual.
        )
      );
    } else {
      // Si no existe, lo agrega al carrito con cantidad 1.
      setCart([...cart, { id: product.id, name: product.name, image: product.image, price: product.price, quantity: 1 }]);
    }
  };

  // Esta función cambia la cantidad de un producto en el carrito.
  const updateQuantity = (id: number, quantity: number) => {
    if (quantity <= 0) {
      // Si la cantidad es 0 o menos, quita el producto del carrito.
      removeFromCart(id);
    } else {
      // Si no, actualiza la cantidad del producto.
      setCart(
        cart.map((item) =>
          item.id === id ? { ...item, quantity } : item // Cambia la cantidad solo del producto con ese ID.
        )
      );
    }
  };

  // Esta función quita un producto del carrito por su ID.
  const removeFromCart = (id: number) => {
    setCart(cart.filter((item) => item.id !== id)); // Filtra la lista, quitando el producto con ese ID.
  };

  // Esta función vacía todo el carrito.
  const clearCart = () => setCart([]); // Pone la lista en vacía.

  // Esta parte devuelve el proveedor del contexto, que envuelve a los componentes hijos.
  // Los hijos pueden acceder al carrito y a las funciones para manejarlo.
  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, updateQuantity, clearCart }}>
      {children} {/* Los componentes hijos van aquí. */}
    </CartContext.Provider>
  );
};
