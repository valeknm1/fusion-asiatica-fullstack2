// Esta línea exporta el componente Footer para que pueda ser usado en otras partes de la aplicación.
// El componente Footer es una función de React que devuelve JSX (código HTML en JavaScript).
export const Footer = () => {
  // Esta función devuelve el contenido visual del pie de página.
  return (
    // Esta etiqueta <footer> crea el contenedor del pie de página.
    // className="bg-dark text-light text-center py-3 mt-5" aplica estilos de Bootstrap:
    // - bg-dark: fondo negro
    // - text-light: texto blanco
    // - text-center: texto centrado
    // - py-3: padding vertical (espacio arriba y abajo)
    // - mt-5: margen superior grande
    <footer className="bg-dark text-light text-center py-3 mt-5">
      {/* Esta etiqueta <p> muestra el copyright del restaurante. */}
      {/* className="mb-1" agrega un margen inferior pequeño. */}
      <p className="mb-1">© 2025 Fusión Asiática - Todos los derechos reservados 🍱</p>

      {/* Esta etiqueta <small> muestra un mensaje pequeño sobre el desarrollo. */}
      <small>Desarrollado con 💜 por tu equipo de transformación digital</small>
    </footer>
  );
};
