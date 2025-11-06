// Esta línea importa herramientas necesarias de React.
// createContext: Crea un espacio compartido para datos en la aplicación.
// useState: Permite guardar y cambiar información dentro del componente.
// ReactNode: Tipo para elementos React (como componentes).
// useEffect: Ejecuta código cuando algo cambia.
import { createContext, useState, ReactNode, useEffect } from "react";

// Esta interfaz define cómo se ve un mensaje de contacto enviado por un usuario.
// Cada mensaje tiene un ID único, nombre, correo, categoría, mensaje y fecha.
interface ContactSubmission {
  id: number; // Identificador único del mensaje.
  nombre: string; // Nombre de quien envió el mensaje.
  correo: string; // Correo electrónico del remitente.
  categoria: string; // Categoría del mensaje (ej: queja, sugerencia).
  mensaje: string; // Contenido del mensaje.
  fecha: string; // Fecha y hora cuando se envió el mensaje.
}

// Esta interfaz define qué funciones y datos estarán disponibles en el contexto de contacto.
// submissions: La lista de mensajes de contacto.
// addSubmission: Función para agregar un nuevo mensaje.
// removeSubmission: Función para eliminar un mensaje por su ID.
interface ContactContextType {
  submissions: ContactSubmission[]; // Lista de mensajes de contacto.
  addSubmission: (submission: Omit<ContactSubmission, 'id' | 'fecha'>) => void; // Agrega un mensaje (sin ID ni fecha, se generan automáticamente).
  removeSubmission: (id: number) => void; // Elimina un mensaje por su ID.
}

// Esta línea crea el contexto de contacto con valores por defecto vacíos.
// Es como crear un almacén vacío que luego se llenará.
export const ContactContext = createContext<ContactContextType>({
  submissions: [], // Lista vacía por defecto.
  addSubmission: () => {}, // Función vacía por defecto.
  removeSubmission: () => {}, // Función vacía por defecto.
});

// Esta línea define el componente ContactProvider, que envuelve a otros componentes.
// Proporciona el contexto de contacto a todos los componentes hijos.
export const ContactProvider = ({ children }: { children: ReactNode }) => {
  // Esta línea crea una variable de estado para guardar la lista de mensajes de contacto.
  // Inicialmente, intenta cargar mensajes guardados en el navegador, o usa una lista vacía.
  const [submissions, setSubmissions] = useState<ContactSubmission[]>(() => {
    const saved = localStorage.getItem('contactSubmissions'); // Busca mensajes guardados en el navegador.
    return saved ? JSON.parse(saved) : []; // Si hay guardados, los usa; si no, lista vacía.
  });

  // Este efecto se ejecuta cada vez que cambia la lista de mensajes.
  // Guarda la lista actual en el navegador para que no se pierda al recargar la página.
  useEffect(() => {
    localStorage.setItem('contactSubmissions', JSON.stringify(submissions));
  }, [submissions]);

  // Esta función agrega un nuevo mensaje de contacto a la lista.
  const addSubmission = (submission: Omit<ContactSubmission, 'id' | 'fecha'>) => {
    const newSubmission: ContactSubmission = {
      ...submission, // Copia toda la información del mensaje.
      id: Date.now(), // Genera un ID único usando la fecha actual en milisegundos.
      fecha: new Date().toLocaleString(), // Genera la fecha y hora actual en formato legible.
    };
    setSubmissions(prev => [...prev, newSubmission]); // Agrega el nuevo mensaje a la lista.
  };

  // Esta función elimina un mensaje de contacto por su ID.
  const removeSubmission = (id: number) => {
    setSubmissions(prev => prev.filter(s => s.id !== id)); // Filtra la lista, quitando el mensaje con ese ID.
  };

  // Esta parte devuelve el proveedor del contexto, que envuelve a los componentes hijos.
  // Los hijos pueden acceder a la lista de mensajes y a las funciones para manejarlos.
  return (
    <ContactContext.Provider value={{ submissions, addSubmission, removeSubmission }}>
      {children} {/* Los componentes hijos van aquí. */}
    </ContactContext.Provider>
  );
};
