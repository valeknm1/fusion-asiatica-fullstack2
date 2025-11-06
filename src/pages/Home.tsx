// Esta línea importa Link de react-router-dom, que permite navegar entre páginas sin recargar.
import { Link } from "react-router-dom";

// Esta línea importa el componente ProductCard, que muestra la información de un producto.
import { ProductCard } from "../components/ProductCard";

// Esta línea importa useContext de React, que permite acceder a contextos.
import { useContext } from "react";

// Esta línea importa el ProductContext, que contiene la lista de productos disponibles.
import { ProductContext } from "../context/ProductContext";

// Esta línea exporta el componente Home.
// Es una función de React que devuelve la página principal del sitio web.
export const Home = () => {
  // Esta línea obtiene la lista de productos del contexto de productos.
  // productos es un array con todos los platos disponibles.
  const { productos } = useContext(ProductContext);

  // Esta línea toma los primeros 6 productos de la lista para mostrarlos como destacados.
  // slice(0, 6) devuelve un nuevo array con los elementos desde el índice 0 hasta el 5.
  const destacados = productos.slice(0, 6);

  // Esta parte devuelve el contenido visual de la página principal.
  return (
    <div>
      {/* Esta sección es el hero principal con imagen y texto de bienvenida. */}
      <section className="hero-section position-relative text-center text-white py-5 overflow-hidden">
        <div className="hero-overlay position-absolute top-0 start-0 w-100 h-100 bg-dark opacity-50"></div>
        <div className="hero-content position-relative z-index-1">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-6 text-start">
                <h1 className="display-4 fw-bold mb-4">
                  Descubre el Sabor de Asia 🌏
                </h1>
                <p className="lead mb-4">
                  Una experiencia culinaria única que fusiona las tradiciones de Japón, Corea, China y Tailandia.
                  Cada plato cuenta una historia, cada bocado es un viaje.
                </p>
                <div className="d-flex gap-3 flex-wrap">
                  <Link to="/menu" className="btn btn-warning btn-lg px-4">
                    🍽️ Ver Nuestro Menú
                  </Link>
                  <Link to="/nosotros" className="btn btn-outline-light btn-lg px-4">
                    👥 Conócenos
                  </Link>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="hero-image-container position-relative">
                  <img
                    src="/img/restaurante.avif"
                    alt="Restaurante Fusión Asiática"
                    className="img-fluid rounded shadow-lg"
                    style={{ maxHeight: "400px", objectFit: "cover" }}
                  />
                  <div className="floating-elements">
                    <div className="floating-item position-absolute" style={{ top: "10%", left: "10%" }}>
                      <span className="badge bg-danger fs-6 px-3 py-2">🍣 Sushi</span>
                    </div>
                    <div className="floating-item position-absolute" style={{ top: "20%", right: "15%" }}>
                      <span className="badge bg-success fs-6 px-3 py-2">🍜 Ramen</span>
                    </div>
                    <div className="floating-item position-absolute" style={{ bottom: "15%", left: "20%" }}>
                      <span className="badge bg-warning fs-6 px-3 py-2">🥢 Dumplings</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Esta sección muestra estadísticas rápidas del restaurante. */}
      <section className="stats-section bg-primary text-white py-4">
        <div className="container">
          <div className="row text-center">
            <div className="col-md-3">
              <h3 className="display-6 fw-bold">20+</h3>
              <p className="mb-0">Platos Únicos</p>
            </div>
            <div className="col-md-3">
              <h3 className="display-6 fw-bold">4</h3>
              <p className="mb-0">Culturas Fusionadas</p>
            </div>
            <div className="col-md-3">
              <h3 className="display-6 fw-bold">100%</h3>
              <p className="mb-0">Ingredientes Frescos</p>
            </div>
            <div className="col-md-3">
              <h3 className="display-6 fw-bold">24/7</h3>
              <p className="mb-0">Servicio Disponible</p>
            </div>
          </div>
        </div>
      </section>

      {/* Esta sección muestra los productos destacados. */}
      <section className="container my-5">
        <div className="text-center mb-5">
          <h2 className="text-primary mb-3">Nuestros Platos Más Populares</h2>
          <p className="lead text-muted">Descubre los favoritos de nuestros clientes</p>
        </div>
        <div className="row g-4">
          {/* Esta línea mapea los productos destacados a tarjetas de producto. */}
          {destacados.map((p) => (
            <div key={p.id} className="col-lg-4 col-md-6">
              <ProductCard {...p} />
            </div>
          ))}
        </div>
        <div className="text-center mt-4">
          <Link to="/menu" className="btn btn-outline-primary btn-lg">
            Ver Todos los Platos →
          </Link>
        </div>
      </section>

      {/* Esta sección presenta las diferentes cocinas disponibles. */}
      <section className="cuisines-section bg-light py-5">
        <div className="container">
          <h2 className="text-center text-primary mb-5">Nuestras Cocinas</h2>
          <div className="row g-4">
            <div className="col-md-3 text-center">
              <div className="card border-0 shadow-sm h-100">
                <div className="card-body">
                  <div className="cuisine-icon mb-3">
                    <span className="display-4">🍣</span>
                  </div>
                  <h5 className="card-title">Japonesa</h5>
                  <p className="card-text">Sushi fresco, ramen humeante y tempura crujiente.</p>
                </div>
              </div>
            </div>
            <div className="col-md-3 text-center">
              <div className="card border-0 shadow-sm h-100">
                <div className="card-body">
                  <div className="cuisine-icon mb-3">
                    <span className="display-4">🍲</span>
                  </div>
                  <h5 className="card-title">Coreana</h5>
                  <p className="card-text">Bulgogi jugoso, kimchi fermentado y bibimbap.</p>
                </div>
              </div>
            </div>
            <div className="col-md-3 text-center">
              <div className="card border-0 shadow-sm h-100">
                <div className="card-body">
                  <div className="cuisine-icon mb-3">
                    <span className="display-4">🥢</span>
                  </div>
                  <h5 className="card-title">China</h5>
                  <p className="card-text">Kung pao picante, baozi suaves y gyoza.</p>
                </div>
              </div>
            </div>
            <div className="col-md-3 text-center">
              <div className="card border-0 shadow-sm h-100">
                <div className="card-body">
                  <div className="cuisine-icon mb-3">
                    <span className="display-4">🍜</span>
                  </div>
                  <h5 className="card-title">Tailandesa</h5>
                  <p className="card-text">Pad thai aromático y curries exóticos.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Esta sección muestra testimonios de clientes. */}
      <section className="testimonials-section py-5">
        <div className="container">
          <h2 className="text-center text-primary mb-5">Lo Que Dicen Nuestros Clientes</h2>
          <div className="row g-4">
            <div className="col-md-4">
              <div className="card border-0 shadow-sm h-100">
                <div className="card-body">
                  <div className="stars mb-3">
                    ⭐⭐⭐⭐⭐
                  </div>
                  <p className="card-text">
                    "La mejor experiencia culinaria que he tenido. Cada plato es una obra de arte."
                  </p>
                  <footer className="blockquote-footer">María González</footer>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card border-0 shadow-sm h-100">
                <div className="card-body">
                  <div className="stars mb-3">
                    ⭐⭐⭐⭐⭐
                  </div>
                  <p className="card-text">
                    "El sushi es increíblemente fresco y los sabores coreanos me transportan."
                  </p>
                  <footer className="blockquote-footer">Carlos Rodríguez</footer>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card border-0 shadow-sm h-100">
                <div className="stars mb-3">
                  <div className="stars mb-3">
                    ⭐⭐⭐⭐⭐
                  </div>
                  <p className="card-text">
                    "Servicio excepcional y ambiente perfecto para una cena especial."
                  </p>
                  <footer className="blockquote-footer">Ana López</footer>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Esta sección es un llamado a la acción para registrarse o contactar. */}
      <section className="cta-section bg-warning text-dark text-center py-5">
        <div className="container">
          <h3 className="display-5 fw-bold mb-3">¿Listo para una Aventura Culinaria?</h3>
          <p className="lead mb-4">
            Únete a nuestra comunidad y descubre nuevos sabores cada día.
          </p>
          <div className="d-flex justify-content-center gap-3 flex-wrap">
            <Link to="/registro" className="btn btn-dark btn-lg px-4">
              ✨ Crear Cuenta
            </Link>
            <Link to="/contacto" className="btn btn-outline-dark btn-lg px-4">
              📞 Contactar
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};
