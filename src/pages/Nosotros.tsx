// Esta línea exporta el componente Nosotros.
// Es una función de React que devuelve la página "Sobre Nosotros".
export const Nosotros = () => {
  // Esta parte devuelve el contenido visual de la página "Sobre Nosotros".
  return (
    // Este contenedor principal centra el contenido y agrega márgenes verticales.
    <div className="container my-5">
      {/* Este es el título principal de la página. */}
      <h2 className="text-center text-primary mb-4">Sobre Nosotros</h2>

      {/* Esta sección presenta una introducción al restaurante con imagen. */}
      <div className="row align-items-center mb-5">
        <div className="col-md-6">
          <p>
            En <strong>Fusión Asiática</strong> combinamos lo mejor de las cocinas
            japonesa, china, tailandesa y coreana. Nacimos en 2025 con la misión
            de ofrecer una experiencia gastronómica única que conecte culturas.
          </p>
          <p>
            Cada plato es elaborado por chefs expertos con ingredientes frescos
            y técnicas tradicionales, pero con un toque moderno que sorprende a
            nuestros clientes.
          </p>
        </div>
        <div className="col-md-6 text-center">
          <img
            src="/img/restaurante.avif"
            alt="Restaurante Fusión Asiática"
            className="img-fluid rounded shadow"
          />
        </div>
      </div>

      {/* Esta sección describe la filosofía del restaurante. */}
      <h3 className="text-center mb-4">Nuestra Filosofía 🍱</h3>
      <ul className="list-group list-group-flush mb-5">
        <li className="list-group-item">
          🌿 <strong>Autenticidad:</strong> Sabores tradicionales respetando su origen.
        </li>
        <li className="list-group-item">
          🥢 <strong>Innovación:</strong> Fusión moderna de técnicas y culturas.
        </li>
        <li className="list-group-item">
          💜 <strong>Hospitalidad:</strong> Atención cálida y personalizada.
        </li>
      </ul>

      {/* Esta sección presenta a los chefs del restaurante. */}
      <h3 className="text-center mb-4">Nuestros Chefs 👨‍🍳</h3>
      <div className="row mb-5">
        <div className="col-md-4 text-center">
          <div className="card shadow-sm">
            <div className="card-body">
              <h5 className="card-title">Chef Hiroshi Tanaka</h5>
              <p className="card-text">Especialista en cocina japonesa con 15 años de experiencia.</p>
              <span className="badge bg-primary">Japonesa</span>
            </div>
          </div>
        </div>
        <div className="col-md-4 text-center">
          <div className="card shadow-sm">
            <div className="card-body">
              <h5 className="card-title">Chef Mei Ling</h5>
              <p className="card-text">Maestra en técnicas chinas tradicionales y modernas.</p>
              <span className="badge bg-success">China</span>
            </div>
          </div>
        </div>
        <div className="col-md-4 text-center">
          <div className="card shadow-sm">
            <div className="card-body">
              <h5 className="card-title">Chef Kim Ji-hoon</h5>
              <p className="card-text">Experto en sabores coreanos con toque innovador.</p>
              <span className="badge bg-warning">Coreana</span>
            </div>
          </div>
        </div>
      </div>

      {/* Esta sección describe las cocinas disponibles. */}
      <h3 className="text-center mb-4">Nuestras Cocinas 🌏</h3>
      <div className="row mb-5">
        <div className="col-md-3 text-center">
          <div className="card shadow-sm">
            <div className="card-body">
              <h5 className="card-title">Japonesa</h5>
              <p className="card-text">Sushi, ramen, tempura y más.</p>
              <span className="badge bg-info">🍣</span>
            </div>
          </div>
        </div>
        <div className="col-md-3 text-center">
          <div className="card shadow-sm">
            <div className="card-body">
              <h5 className="card-title">China</h5>
              <p className="card-text">Kung pao, baozi, gyoza.</p>
              <span className="badge bg-danger">🥢</span>
            </div>
          </div>
        </div>
        <div className="col-md-3 text-center">
          <div className="card shadow-sm">
            <div className="card-body">
              <h5 className="card-title">Tailandesa</h5>
              <p className="card-text">Pad thai, curries aromáticos.</p>
              <span className="badge bg-success">🍜</span>
            </div>
          </div>
        </div>
        <div className="col-md-3 text-center">
          <div className="card shadow-sm">
            <div className="card-body">
              <h5 className="card-title">Coreana</h5>
              <p className="card-text">Bulgogi, kimchi, tteokbokki.</p>
              <span className="badge bg-warning">🍲</span>
            </div>
          </div>
        </div>
      </div>

      {/* Esta sección muestra premios y reconocimientos. */}
      <h3 className="text-center mb-4">Premios y Reconocimientos 🏆</h3>
      <div className="row">
        <div className="col-md-6">
          <ul className="list-group list-group-flush">
            <li className="list-group-item">⭐ Mejor Restaurante Asiático 2024</li>
            <li className="list-group-item">🥇 Certificación de Calidad Gourmet</li>
            <li className="list-group-item">🌟 5 estrellas en reseñas locales</li>
          </ul>
        </div>
        <div className="col-md-6">
          <ul className="list-group list-group-flush">
            <li className="list-group-item">👥 Más de 10,000 clientes satisfechos</li>
            <li className="list-group-item">🍽️ Ingredientes 100% frescos y locales</li>
            <li className="list-group-item">💚 Comprometidos con la sostenibilidad</li>
          </ul>
        </div>
      </div>
    </div>
  );
};
