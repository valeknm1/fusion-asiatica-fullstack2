// Esta línea importa useState y useContext de React.
// useState permite crear variables de estado que cambian con el tiempo.
// useContext permite acceder a contextos compartidos en la aplicación.
import { useState, useContext } from "react";

// Esta línea importa el ContactContext, que contiene las funciones para manejar mensajes de contacto.
import { ContactContext } from "../context/ContactContext";

// Esta línea exporta el componente Contacto.
// Es una función de React que devuelve la página de contacto con formulario.
export const Contacto = () => {
  // Esta línea obtiene la función addSubmission del contexto de contacto.
  // addSubmission es una función que guarda un nuevo mensaje de contacto.
  const { addSubmission } = useContext(ContactContext);

  // Esta línea crea una variable de estado para los datos del formulario.
  // Es un objeto con campos para nombre, correo, categoría y mensaje.
  const [formData, setFormData] = useState({
    nombre: "",
    correo: "",
    categoria: "",
    mensaje: ""
  });

  // Esta línea crea una variable de estado para saber si el mensaje fue enviado.
  // Inicialmente es false, cambia a true después de enviar.
  const [enviado, setEnviado] = useState(false);

  // Esta función maneja los cambios en los campos del formulario.
  // e: React.ChangeEvent es el tipo del evento de cambio.
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    // Esta línea actualiza el estado del formulario con el nuevo valor del campo.
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Esta función maneja el envío del formulario cuando el usuario hace clic en "Enviar Mensaje".
  // e: React.FormEvent es el tipo del evento del formulario.
  const handleSubmit = (e: React.FormEvent) => {
    // Esta línea previene el comportamiento por defecto del formulario (recargar la página).
    e.preventDefault();

    // Esta línea agrega el mensaje de contacto usando la función del contexto.
    addSubmission({
      nombre: formData.nombre,
      correo: formData.correo,
      categoria: formData.categoria,
      mensaje: formData.mensaje,
    });

    // Esta línea limpia el formulario después de enviar.
    setFormData({ nombre: "", correo: "", categoria: "", mensaje: "" });

    // Esta línea marca el mensaje como enviado para mostrar el mensaje de éxito.
    setEnviado(true);
  };

  // Esta parte devuelve el contenido visual de la página de contacto.
  return (
    // Este contenedor principal centra el contenido y agrega márgenes verticales.
    <div className="container my-5">
      {/* Este es el título principal de la página de contacto. */}
      <h2 className="text-center text-primary mb-4">Contáctanos 📩</h2>

      {/* Esta sección muestra la información de contacto y ubicación. */}
      <div className="row mb-5">
        <div className="col-md-6">
          <h4>Información de Contacto</h4>
          <ul className="list-unstyled">
            <li>📍 Dirección: Calle Principal 123, Ciudad</li>
            <li>📞 Teléfono: +56 9 1234 5678</li>
            <li>✉️ Email: info@fusionasiatica.cl</li>
            <li>🕒 Horarios: Lun-Dom 12:00-23:00</li>
          </ul>
        </div>
        <div className="col-md-6">
          <h4>Ubicación</h4>
          <div className="ratio ratio-16x9">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3320.123456789012!2d-70.64827!3d-33.44889!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9662c54123456789%3A0x123456789abcdef!2sCentro%20de%20Santiago!5e0!3m2!1ses!2scl!4v1234567890123!5m2!1ses!2scl"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Ubicación del restaurante"
            ></iframe>
          </div>
        </div>
      </div>

      {/* Esta sección muestra el formulario o el mensaje de éxito. */}
      {!enviado ? (
        <div className="row">
          <div className="col-md-8 mx-auto">
            <h4 className="text-center mb-4">Envíanos un Mensaje</h4>
            <form onSubmit={handleSubmit}>
              <div className="row">
                {/* Campo para el nombre del usuario. */}
                <div className="col-md-6 mb-3">
                  <label className="form-label">Nombre</label>
                  <input
                    type="text"
                    name="nombre"
                    className="form-control"
                    required
                    value={formData.nombre}
                    onChange={handleChange}
                  />
                </div>
                {/* Campo para el correo electrónico del usuario. */}
                <div className="col-md-6 mb-3">
                  <label className="form-label">Correo</label>
                  <input
                    type="email"
                    name="correo"
                    className="form-control"
                    required
                    value={formData.correo}
                    onChange={handleChange}
                  />
                </div>
              </div>
              {/* Selector de categoría para el mensaje. */}
              <div className="mb-3">
                <label className="form-label">Categoría</label>
                <select
                  name="categoria"
                  className="form-select"
                  required
                  value={formData.categoria}
                  onChange={handleChange}
                >
                  <option value="">Selecciona una categoría</option>
                  <option value="consulta">Consulta General</option>
                  <option value="reserva">Reservación</option>
                  <option value="reclamo">Reclamo</option>
                  <option value="felicitacion">Felicitación</option>
                  <option value="sugerencia">Sugerencia</option>
                  <option value="trabajo">Oportunidad Laboral</option>
                </select>
              </div>
              {/* Campo de texto para el mensaje. */}
              <div className="mb-3">
                <label className="form-label">Mensaje</label>
                <textarea
                  name="mensaje"
                  rows={5}
                  className="form-control"
                  required
                  placeholder="Escribe tu mensaje aquí..."
                  value={formData.mensaje}
                  onChange={handleChange}
                />
              </div>
              {/* Botón para enviar el formulario. */}
              <button type="submit" className="btn btn-primary w-100">
                Enviar Mensaje
              </button>
            </form>
          </div>
        </div>
      ) : (
        <div className="alert alert-success text-center">
          ¡Gracias por contactarnos! Te responderemos pronto. 💌
        </div>
      )}

      {/* Esta sección muestra tarjetas con formas de contacto adicionales. */}
      <div className="row mt-5">
        <div className="col-md-4 text-center">
          <div className="card shadow-sm">
            <div className="card-body">
              <h5 className="card-title">📞 Llámanos</h5>
              <p className="card-text">Estamos disponibles para atenderte personalmente.</p>
              <p className="text-primary fw-bold">+56 9 1234 5678</p>
            </div>
          </div>
        </div>
        <div className="col-md-4 text-center">
          <div className="card shadow-sm">
            <div className="card-body">
              <h5 className="card-title">📧 Escríbenos</h5>
              <p className="card-text">Respuesta garantizada en menos de 24 horas.</p>
              <p className="text-primary fw-bold">info@fusionasiatica.cl</p>
            </div>
          </div>
        </div>
        <div className="col-md-4 text-center">
          <div className="card shadow-sm">
            <div className="card-body">
              <h5 className="card-title">📍 Visítanos</h5>
              <p className="card-text">Encuéntranos fácilmente en el centro de la ciudad.</p>
              <p className="text-primary fw-bold">Calle Principal 123</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
