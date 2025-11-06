// Esta línea importa herramientas para manejar las rutas de la aplicación web.
// BrowserRouter: Permite navegar entre páginas sin recargar toda la página.
// Routes y Route: Definen qué componente mostrar en cada URL.
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Esta línea importa el componente de la barra de navegación que aparece en la parte superior.
import { Navbar } from "./components/Navbar";

// Esta línea importa el componente del pie de página que aparece en la parte inferior.
import { Footer } from "./components/Footer";

// Esta línea importa el proveedor de autenticación, que maneja el login y registro de usuarios.
import { AuthProvider } from "./context/AuthContext";

// Esta línea importa el proveedor del carrito de compras, que guarda los productos seleccionados.
import { CartProvider } from "./context/CartContext";

// Esta línea importa el proveedor de productos, que maneja la lista de platos del menú.
import { ProductProvider } from "./context/ProductContext";

// Esta línea importa el proveedor de contacto, que maneja los mensajes enviados por usuarios.
import { ContactProvider } from "./context/ContactContext";

// Esta línea importa el componente de ruta protegida, que verifica si el usuario está logueado antes de mostrar ciertas páginas.
import { ProtectedRoute } from "./components/ProtectedRoute";

// Estas líneas importan todas las páginas de la aplicación.
// Cada página es un componente que muestra contenido diferente.
import { Home } from "./pages/Home"; // Página principal
import { Menu } from "./pages/Menu"; // Página del menú de comida
import { Nosotros } from "./pages/Nosotros"; // Página "Sobre nosotros"
import { Contacto } from "./pages/Contacto"; // Página de contacto
import { Checkout } from "./pages/Checkout"; // Página de pago
import { Login } from "./pages/Login"; // Página de inicio de sesión
import { Registro } from "./pages/Registro"; // Página de registro de usuarios
import { Admin } from "./pages/Admin"; // Página de administración (solo para administradores)

// Esta línea define el componente principal de la aplicación llamado App.
// Es la raíz de toda la aplicación React.
function App() {
  // Esta parte devuelve el contenido visual de toda la aplicación.
  return (
    <AuthProvider>
      {/* Este proveedor maneja los productos disponibles en el menú. */}
      <ProductProvider>
        {/* Este proveedor maneja el carrito de compras del usuario. */}
        <CartProvider>
          {/* Este proveedor maneja los mensajes de contacto enviados. */}
          <ContactProvider>
            {/* El Router permite la navegación entre páginas. */}
            <Router>
              {/* La barra de navegación aparece en todas las páginas. */}
              <Navbar />
              {/* Routes define todas las rutas posibles de la aplicación. */}
              <Routes>
                {/* Cada Route conecta una URL con un componente que se muestra. */}
                <Route path="/" element={<Home />} /> {/* Página principal en la URL "/" */}
                <Route path="/menu" element={<Menu />} /> {/* Página del menú en "/menu" */}
                <Route path="/nosotros" element={<Nosotros />} /> {/* Página "Nosotros" en "/nosotros" */}
                <Route path="/contacto" element={<Contacto />} /> {/* Página de contacto en "/contacto" */}
                <Route path="/checkout" element={<Checkout />} /> {/* Página de pago en "/checkout" */}
                <Route path="/login" element={<Login />} /> {/* Página de login en "/login" */}
                <Route path="/registro" element={<Registro />} /> {/* Página de registro en "/registro" */}
                {/* Esta ruta está protegida: solo usuarios logueados pueden acceder. */}
                <Route
                  path="/admin"
                  element={
                    <ProtectedRoute> {/* Verifica si el usuario está autorizado. */}
                      <Admin /> {/* Si está autorizado, muestra la página de admin. */}
                    </ProtectedRoute>
                  }
                />
              </Routes>
              {/* El pie de página aparece en todas las páginas. */}
              <Footer />
            </Router>
          </ContactProvider>
        </CartProvider>
      </ProductProvider>
    </AuthProvider>
  );
}

// Esta línea exporta el componente App para que pueda ser usado en otros archivos.
export default App;
