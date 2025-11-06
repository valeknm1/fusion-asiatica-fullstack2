// Esta línea importa herramientas necesarias de la biblioteca React para crear el contexto y manejar el estado.
// createContext: Crea un espacio compartido para datos en la aplicación.
// useState: Permite guardar y cambiar información dentro del componente.
// ReactNode: Es un tipo que representa cualquier cosa que se pueda renderizar en React (como componentes o texto).
// useEffect: Ejecuta código cuando algo cambia, como guardar datos automáticamente.
import { createContext, useState, ReactNode, useEffect } from "react";

// Esta es una definición de tipo (interface) que describe cómo se ve un usuario.
// Un usuario tiene un nombre (texto), un email (texto) y un rol (como "admin" o "user").
interface User {
  name: string;
  email: string;
  role: string;
}

// Esta interface define qué funciones y datos estarán disponibles en el contexto de autenticación.
// user: Puede ser un usuario o nada (null si no hay nadie logueado).
// login: Una función que intenta iniciar sesión con email y contraseña, devuelve true si funciona.
// register: Una función para registrar un nuevo usuario.
// logout: Una función para cerrar sesión.
interface AuthContextType {
  user: User | null;
  login: (email: string, password: string) => boolean;
  register: (name: string, email: string, password: string) => void;
  logout: () => void;
}

// Aquí se crea el contexto de autenticación.
// Se le da un valor por defecto: user es null, y las funciones no hacen nada inicialmente.
// Este contexto se usará para compartir el estado de autenticación en toda la aplicación.
export const AuthContext = createContext<AuthContextType>({
  user: null,
  login: () => false,
  register: () => {},
  logout: () => {},
});

// Este es el componente proveedor (AuthProvider) que envuelve a otros componentes para darles acceso al contexto.
// Recibe "children" que son los componentes hijos que estarán dentro de este proveedor.
export const AuthProvider = ({ children }: { children: ReactNode }) => {
  // Esta línea crea un estado llamado "user" que guarda el usuario actual.
  // Inicialmente, intenta cargar el usuario guardado en el navegador (localStorage).
  // Si hay un usuario guardado, lo convierte de texto a objeto; si no, es null.
  const [user, setUser] = useState<User | null>(() => {
    const savedUser = localStorage.getItem('user');
    return savedUser ? JSON.parse(savedUser) : null;
  });

  // Esta línea crea un estado para guardar todos los usuarios registrados.
  // Es un objeto donde la clave es el email y el valor es la información del usuario (nombre, contraseña, rol).
  // Inicialmente, carga usuarios guardados o usa unos por defecto (como admin y un usuario de ejemplo).
  const [registeredUsers, setRegisteredUsers] = useState<{ [email: string]: { name: string; password: string; role: string } }>(() => {
    const savedUsers = localStorage.getItem('registeredUsers');
    return savedUsers ? JSON.parse(savedUsers) : {
      "admin@fusionasiatica.com": { name: "Admin", password: "admin123", role: "admin" },
      "user@example.com": { name: "Usuario", password: "user123", role: "user" }
    };
  });

  // Este efecto se ejecuta cada vez que el estado "user" cambia.
  // Si hay un usuario, lo guarda en el navegador (localStorage) como texto.
  // Si no hay usuario, borra el dato guardado.
  useEffect(() => {
    if (user) {
      localStorage.setItem('user', JSON.stringify(user));
    } else {
      localStorage.removeItem('user');
    }
  }, [user]);

  // Este efecto se ejecuta cada vez que cambia la lista de usuarios registrados.
  // Guarda la lista completa en el navegador para que no se pierda al recargar la página.
  useEffect(() => {
    localStorage.setItem('registeredUsers', JSON.stringify(registeredUsers));
  }, [registeredUsers]);

  // Esta es la función para iniciar sesión.
  // Recibe email y contraseña.
  // Busca si el email existe en los usuarios registrados y si la contraseña coincide.
  // Si sí, establece al usuario actual y devuelve true (éxito).
  // Si no, devuelve false (fallo).
  const login = (email: string, password: string): boolean => {
    const registeredUser = registeredUsers[email];
    if (registeredUser && registeredUser.password === password) {
      setUser({ name: registeredUser.name, email, role: registeredUser.role });
      return true;
    }
    return false;
  };

  // Esta es la función para registrar un nuevo usuario.
  // Recibe nombre, email y contraseña.
  // Nota: Esto es una simulación; en un sitio real, se usaría un servidor para guardar los datos.
  // Si el email ya existe, muestra una alerta y no hace nada.
  // Si no, crea un nuevo usuario con rol "user", lo agrega a la lista y lo establece como usuario actual.
  const register = (name: string, email: string, password: string) => {
    // Simulación de registro
    if (registeredUsers[email]) {
      alert("El usuario ya existe");
      return;
    }
    const newUser = { name, password, role: "user" };
    setRegisteredUsers({ ...registeredUsers, [email]: newUser });
    setUser({ name, email, role: "user" });
  };

  // Esta función cierra la sesión.
  // Simplemente pone el usuario actual en null (nadie logueado).
  const logout = () => {
    setUser(null);
  };

  // Aquí se devuelve el proveedor del contexto.
  // Envuelve a los componentes hijos y les pasa el valor: el usuario actual y las funciones.
  // Esto permite que cualquier componente dentro acceda a estos datos y funciones.
  return (
    <AuthContext.Provider value={{ user, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
