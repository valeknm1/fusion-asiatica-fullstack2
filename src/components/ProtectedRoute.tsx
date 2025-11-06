// Esta línea importa useContext de React, que permite acceder a contextos.
// useContext se usa para obtener datos del AuthContext.
import { useContext } from "react";

// Esta línea importa el AuthContext, que contiene la información del usuario logueado.
import { AuthContext } from "../context/AuthContext";

// Esta línea importa Navigate de react-router-dom, que permite redirigir a otras páginas.
import { Navigate } from "react-router-dom";

// Esta línea exporta el componente ProtectedRoute.
// Es una función que recibe children (los componentes hijos que quiere proteger).
// children: JSX.Element significa que recibe elementos JSX (componentes React).
export const ProtectedRoute = ({ children }: { children: JSX.Element }) => {
  // Esta línea obtiene el usuario actual del contexto de autenticación.
  // useContext(AuthContext) devuelve el objeto { user, login, register, logout }.
  // Aquí solo necesitamos user, así que lo extraemos con destructuring.
  const { user } = useContext(AuthContext);

  // Esta línea verifica si no hay usuario logueado.
  // Si user es null o undefined, significa que el usuario no está autenticado.
  // En ese caso, redirige a la página de login usando Navigate.
  if (!user) return <Navigate to="/login" />; // Redirige si no hay usuario

  // Si hay usuario logueado, devuelve los children (los componentes protegidos).
  return children;
};

// Este comentario explica cómo crear rutas solo para administradores.
// Para rutas solo de admin, usar: if (user.role !== "admin") return <Navigate to="/" />;
// Esto verificaría si el rol del usuario es "admin", y si no, redirigiría al inicio.
