// Esta línea importa useState y useContext de React.
// useState permite crear variables de estado que cambian con el tiempo.
// useContext permite acceder a contextos compartidos en la aplicación.
import { useState, useContext } from "react";

// Esta línea importa el AuthContext, que contiene las funciones de autenticación.
import { AuthContext } from "../context/AuthContext";

// Esta línea importa useNavigate y Link de react-router-dom.
// useNavigate permite redirigir programáticamente a otras páginas.
// Link permite crear enlaces de navegación.
import { useNavigate, Link } from "react-router-dom";

// Esta línea exporta el componente Registro.
// Es una función de React que devuelve el formulario de registro de usuarios.
export const Registro = () => {
  // Esta línea obtiene la función register del contexto de autenticación.
  // register es una función que crea una nueva cuenta de usuario.
  const { register } = useContext(AuthContext); // función para registrar

  // Esta línea crea una función navigate para redirigir a otras páginas.
  const navigate = useNavigate();

  // Estas líneas crean variables de estado para el nombre, email y contraseña.
  // useState("") inicializa cada variable con una cadena vacía.
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Esta función maneja el envío del formulario cuando el usuario hace clic en "Registrarse".
  // e: React.FormEvent es el tipo del evento del formulario.
  const handleSubmit = (e: React.FormEvent) => {
    // Esta línea previene el comportamiento por defecto del formulario (recargar la página).
    e.preventDefault();

    // Esta línea registra al usuario con el nombre, email y contraseña proporcionados.
    register(nombre, email, password);

    // Esta línea redirige al usuario a la página de login después del registro.
    navigate("/login");
  };

  // Esta parte devuelve el contenido visual del formulario de registro.
  return (
    // Este contenedor limita el ancho máximo del formulario para que se vea centrado.
    // className="container my-5" aplica márgenes verticales y centra horizontalmente.
    // style={{ maxWidth: "400px" }} limita el ancho máximo a 400 píxeles.
    <div className="container my-5" style={{ maxWidth: "400px" }}>
      {/* Este es el título principal de la página de registro. */}
      <h2 className="text-center text-primary mb-4">Crear Cuenta</h2>

      {/* El formulario maneja el envío de datos cuando el usuario hace clic en "Registrarse". */}
      <form onSubmit={handleSubmit}>
        {/* Campo para el nombre del usuario. */}
        <div className="mb-3">
          <label className="form-label">Nombre</label>
          <input
            type="text"
            className="form-control"
            value={nombre} // Muestra el valor actual del nombre.
            onChange={(e) => setNombre(e.target.value)} // Actualiza el estado cuando el usuario escribe.
            required // Hace que este campo sea obligatorio.
          />
        </div>

        {/* Campo para el correo electrónico del usuario. */}
        <div className="mb-3">
          <label className="form-label">Correo electrónico</label>
          <input
            type="email"
            className="form-control"
            value={email} // Muestra el valor actual del email.
            onChange={(e) => setEmail(e.target.value)} // Actualiza el estado cuando el usuario escribe.
            required // Hace que este campo sea obligatorio.
          />
        </div>

        {/* Campo para la contraseña del usuario. */}
        <div className="mb-3">
          <label className="form-label">Contraseña</label>
          <input
            type="password"
            className="form-control"
            value={password} // Muestra el valor actual de la contraseña.
            onChange={(e) => setPassword(e.target.value)} // Actualiza el estado cuando el usuario escribe.
            required // Hace que este campo sea obligatorio.
          />
        </div>

        {/* Botón para enviar el formulario y registrar al usuario. */}
        <button className="btn btn-success w-100" type="submit">
          Registrarse
        </button>
      </form>

      {/* Enlace para ir a la página de login si el usuario ya tiene cuenta. */}
      <p className="text-center mt-3">
        ¿Ya tienes cuenta?{" "}
        <Link to="/login" className="text-decoration-none text-warning">
          Inicia sesión
        </Link>
      </p>
    </div>
  );
};
