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

// Esta línea exporta el componente Login.
// Es una función de React que devuelve el formulario de inicio de sesión.
export const Login = () => {
  // Esta línea obtiene la función login del contexto de autenticación.
  // login es una función que intenta iniciar sesión con email y contraseña.
  const { login } = useContext(AuthContext); // función de login

  // Esta línea crea una función navigate para redirigir a otras páginas.
  const navigate = useNavigate();

  // Estas líneas crean variables de estado para el email, contraseña y mensaje de error.
  // useState("") inicializa cada variable con una cadena vacía.
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  // Esta función maneja el envío del formulario cuando el usuario hace clic en "Ingresar".
  // e: React.FormEvent es el tipo del evento del formulario.
  const handleSubmit = (e: React.FormEvent) => {
    // Esta línea previene el comportamiento por defecto del formulario (recargar la página).
    e.preventDefault();

    // Esta línea intenta iniciar sesión con el email y contraseña proporcionados.
    // login devuelve true si es exitoso, false si falla.
    const success = login(email, password);

    // Esta condición verifica si el login fue exitoso.
    if (success) {
      // Si es exitoso, redirige al usuario a la página principal.
      navigate("/"); // redirige al inicio
    } else {
      // Si falla, muestra un mensaje de error.
      setError("❌ Correo o contraseña incorrectos");
    }
  };

  // Esta parte devuelve el contenido visual del formulario de inicio de sesión.
  return (
    // Este contenedor centra el formulario y limita su ancho máximo.
    <div className="container my-5" style={{ maxWidth: "400px" }}>
      {/* Este es el título principal del formulario. */}
      <h2 className="text-center text-primary mb-4">Iniciar Sesión</h2>

      {/* Esta sección muestra un mensaje de error si existe. */}
      {error && <div className="alert alert-danger text-center">{error}</div>}

      {/* Este formulario maneja el envío de datos de login. */}
      <form onSubmit={handleSubmit}>
        {/* Campo para ingresar el correo electrónico. */}
        <div className="mb-3">
          <label className="form-label">Correo electrónico</label>
          <input
            type="email"
            className="form-control"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        {/* Campo para ingresar la contraseña. */}
        <div className="mb-3">
          <label className="form-label">Contraseña</label>
          <input
            type="password"
            className="form-control"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        {/* Botón para enviar el formulario. */}
        <button className="btn btn-primary w-100" type="submit">
          Ingresar
        </button>
      </form>

      {/* Esta sección ofrece un enlace para registrarse si no se tiene cuenta. */}
      <p className="text-center mt-3">
        ¿No tienes cuenta?{" "}
        <Link to="/registro" className="text-decoration-none text-warning">
          Regístrate aquí
        </Link>
      </p>
    </div>
  );
};
