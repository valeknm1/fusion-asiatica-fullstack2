// Esta línea importa Link de react-router-dom, que permite navegar entre páginas sin recargar.
import { Link } from "react-router-dom";

// Esta línea importa useContext de React, que permite acceder a contextos.
import { useContext } from "react";

// Esta línea importa el AuthContext, que contiene la información del usuario logueado.
import { AuthContext } from "../context/AuthContext";

// Esta línea importa el CartContext, que contiene la información del carrito de compras.
import { CartContext } from "../context/CartContext";

// Esta línea exporta el componente Navbar.
// Es una función de React que devuelve la barra de navegación.
export const Navbar = () => {
  // Esta línea obtiene el usuario y la función logout del contexto de autenticación.
  // user contiene la información del usuario logueado, logout permite cerrar sesión.
  const { user, logout } = useContext(AuthContext); // Trae info de sesión

  // Esta línea obtiene el carrito del contexto del carrito.
  // cart es una lista de productos en el carrito.
  const { cart } = useContext(CartContext); // Trae el carrito

  // Esta función devuelve el contenido visual de la barra de navegación.
  return (
    // Esta etiqueta <nav> crea la barra de navegación.
    // className="navbar navbar-expand-lg navbar-dark bg-dark px-4 sticky-top" aplica estilos de Bootstrap:
    // - navbar: clase base de Bootstrap para navegación
    // - navbar-expand-lg: expande en pantallas grandes
    // - navbar-dark: texto claro para fondo oscuro
    // - bg-dark: fondo negro
    // - px-4: padding horizontal
    // - sticky-top: mantiene la barra fija arriba al hacer scroll
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-4 sticky-top">
      {/* Esta etiqueta <div> es el contenedor fluido de Bootstrap. */}
      <div className="container-fluid">
        {/* Logo y nombre */}
        {/* Esta etiqueta <Link> crea un enlace al inicio. */}
        {/* className="navbar-brand fw-bold text-warning" aplica estilos de Bootstrap para la marca. */}
        <Link className="navbar-brand fw-bold text-warning" to="/">
          🍜 Fusión Asiática
        </Link>

        {/* Botón para menú móvil */}
        {/* Este botón permite mostrar/ocultar el menú en dispositivos móviles. */}
        {/* className="navbar-toggler" aplica estilos de Bootstrap para el botón toggler. */}
        {/* data-bs-toggle="collapse" y data-bs-target="#navbarNav" son atributos de Bootstrap para colapsar el menú. */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          {/* Esta etiqueta <span> muestra el icono del toggler. */}
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Opciones del menú */}
        {/* Esta etiqueta <div> contiene las opciones del menú que se colapsan en móvil. */}
        {/* className="collapse navbar-collapse" hace que el menú se colapse. */}
        {/* id="navbarNav" es el ID que usa el botón toggler. */}
        <div className="collapse navbar-collapse" id="navbarNav">
          {/* Esta etiqueta <ul> contiene la lista de elementos del menú. */}
          {/* className="navbar-nav ms-auto" aplica estilos de Bootstrap y alinea a la derecha. */}
          <ul className="navbar-nav ms-auto">
            {/* Cada <li> representa un elemento del menú. */}
            <li className="nav-item">
              {/* Esta etiqueta <Link> crea un enlace a la página de inicio. */}
              <Link className="nav-link" to="/">Inicio</Link>
            </li>
            <li className="nav-item">
              {/* Esta etiqueta <Link> crea un enlace a la página del menú. */}
              <Link className="nav-link" to="/menu">Menú</Link>
            </li>
            <li className="nav-item">
              {/* Esta etiqueta <Link> crea un enlace a la página "Nosotros". */}
              <Link className="nav-link" to="/nosotros">Nosotros</Link>
            </li>
            <li className="nav-item">
              {/* Esta etiqueta <Link> crea un enlace a la página de contacto. */}
              <Link className="nav-link" to="/contacto">Contacto</Link>
            </li>

            {/* Si hay usuario logueado, muestra su nombre */}
            {/* Esta condición verifica si hay un usuario logueado. */}
            {user ? (
              <>
                {/* Solo muestra enlace Admin si user.role === "admin" */}
                {/* Esta condición verifica si el usuario es administrador. */}
                {user.role === "admin" && (
                  <li className="nav-item">
                    {/* Esta etiqueta <Link> crea un enlace a la página de administración. */}
                    <Link className="nav-link" to="/admin">Admin</Link>
                  </li>
                )}
                {/* Este elemento del menú muestra el nombre del usuario con un dropdown. */}
                <li className="nav-item dropdown">
                  {/* Esta etiqueta <a> es el trigger del dropdown. */}
                  {/* className="nav-link dropdown-toggle text-info" aplica estilos de Bootstrap. */}
                  {/* data-bs-toggle="dropdown" activa el dropdown de Bootstrap. */}
                  <a
                    className="nav-link dropdown-toggle text-info"
                    href="#"
                    id="userDropdown"
                    role="button"
                    data-bs-toggle="dropdown"
                  >
                    {/* Muestra el nombre del usuario. */}
                    {user.name}
                  </a>
                  {/* Esta etiqueta <ul> contiene las opciones del dropdown. */}
                  <ul className="dropdown-menu">
                    <li>
                      {/* Este botón permite cerrar sesión al hacer clic. */}
                      <button className="dropdown-item" onClick={logout}>
                        Cerrar sesión
                      </button>
                    </li>
                  </ul>
                </li>
              </>
            ) : (
              // Si no hay usuario logueado, muestra opciones de login/registro.
              <li className="nav-item dropdown">
                {/* Esta etiqueta <a> es el trigger del dropdown de autenticación. */}
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="authDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                >
                  Iniciar Sesión
                </a>
                {/* Esta etiqueta <ul> contiene las opciones de login y registro. */}
                <ul className="dropdown-menu">
                  <li>
                    {/* Esta etiqueta <Link> crea un enlace a la página de login. */}
                    <Link className="dropdown-item" to="/login">Iniciar Sesión</Link>
                  </li>
                  <li>
                    {/* Esta etiqueta <Link> crea un enlace a la página de registro. */}
                    <Link className="dropdown-item" to="/registro">Registrarse</Link>
                  </li>
                </ul>
              </li>
            )}

            {/* Carrito */}
            {/* Este elemento del menú muestra el icono del carrito. */}
            <li className="nav-item">
              {/* Esta etiqueta <Link> crea un enlace a la página de checkout. */}
              {/* className="nav-link position-relative" aplica estilos de Bootstrap y posición relativa. */}
              <Link className="nav-link position-relative" to="/checkout">
                🛒
                {/* Si hay productos en el carrito, muestra un badge con la cantidad. */}
                {cart.length > 0 && (
                  // Esta etiqueta <span> muestra el número de productos en el carrito.
                  // className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
                  // posiciona el badge en la esquina superior derecha del icono del carrito.
                  <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                    {cart.length}
                  </span>
                )}
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
