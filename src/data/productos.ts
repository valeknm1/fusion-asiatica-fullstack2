// Esta línea define una interfaz llamada Producto.
// Una interfaz es como una plantilla que describe qué propiedades debe tener cada plato.
// Es como decir: "Cada producto debe tener un id, nombre, precio, imagen, ingredientes, categoría y stock".
export interface Producto {
  id: number; // Identificador único de cada plato.
  name: string; // Nombre del plato (ej: "Sushi Variado").
  price: number; // Precio en pesos chilenos (ej: 9500).
  image: string; // Ruta de la imagen del plato (ej: "/img/sushi.jpeg").
  ingredients: string[]; // Lista de ingredientes (ej: ["Arroz", "Salmón"]).
  category: string; // Categoría del plato (ej: "Japonesa", "Coreana").
  stock: number; // Cantidad disponible en inventario (ej: 25).
}

// Esta línea declara una variable llamada productos que es una lista (array) de objetos Producto.
// Es la lista completa de todos los platos disponibles en el restaurante.
const productos: Producto[] = [
  // Cada objeto entre llaves {} representa un plato diferente.
  // Aquí están definidos 20 platos con sus detalles.
  {
    id: 1, // Identificador único.
    name: "Sushi Variado", // Nombre del plato.
    price: 9500, // Precio en pesos.
    image: "/img/sushi.jpeg", // Imagen del plato.
    ingredients: ["Arroz", "Salmón", "Atún", "Alga nori", "Queso crema", "Salsa de soya"], // Ingredientes.
    category: "Japonesa", // Categoría.
    stock: 25 // Cantidad en stock.
  },
  {
    id: 2,
    name: "Ramen Tonkotsu",
    price: 8000,
    image: "/img/ramen.webp",
    ingredients: ["Fideos de trigo", "Caldo de cerdo", "Chashu", "Huevo marinado", "Cebollín"],
    category: "Japonesa",
    stock: 15
  },
  {
    id: 3,
    name: "Pad Thai",
    price: 7800,
    image: "/img/pad thai.webp",
    ingredients: ["Fideos de arroz", "Camarones", "Tofu", "Huevo", "Cacahuates", "Brotes de soya"],
    category: "Tailandesa",
    stock: 20
  },
  {
    id: 4,
    name: "Bulgogi Coreano",
    price: 9000,
    image: "/img/bulgogi.jpeg",
    ingredients: ["Carne de res", "Salsa de soya", "Sésamo", "Ajo", "Cebolla", "Azúcar"],
    category: "Coreana",
    stock: 18
  },
  {
    id: 5,
    name: "Tteokbokki",
    price: 6800,
    image: "/img/tteokbokki.webp",
    ingredients: ["Pastel de arroz", "Salsa gochujang", "Cebollín", "Ajo", "Huevo duro"],
    category: "Coreana",
    stock: 22
  },
  {
    id: 6,
    name: "Helado de Té Verde",
    price: 3500,
    image: "/img/helado verde.webp",
    ingredients: ["Leche", "Nata", "Té verde matcha", "Azúcar"],
    category: "Japonesa",
    stock: 30
  },
  {
    id: 7,
    name: "Tempura de Camarón",
    price: 7200,
    image: "/img/tempura.webp",
    ingredients: ["Camarones", "Harina", "Huevo", "Aceite", "Salsa de soya"],
    category: "Japonesa",
    stock: 12
  },
  {
    id: 8,
    name: "Bibimbap",
    price: 8500,
    image: "/img/kimchi.webp",
    ingredients: ["Arroz", "Verduras", "Carne", "Huevo", "Salsa gochujang"],
    category: "Coreana",
    stock: 16
  },
  {
    id: 9,
    name: "Gyoza",
    price: 6500,
    image: "/img/gyoza.jpg",
    ingredients: ["Masa", "Carne de cerdo", "Repollo", "Jengibre", "Ajo"],
    category: "Japonesa",
    stock: 14
  },
  {
    id: 10,
    name: "Katsu Curry",
    price: 9200,
    image: "/img/kungpao.jpg",
    ingredients: ["Pollo empanizado", "Curry", "Arroz", "Verduras"],
    category: "Japonesa",
    stock: 10
  },
  {
    id: 11,
    name: "Mochi",
    price: 4200,
    image: "/img/helado verde.webp",
    ingredients: ["Arroz glutinoso", "Azúcar", "Relleno de frutas"],
    category: "Japonesa",
    stock: 28
  },
  {
    id: 12,
    name: "Sashimi de Salmón",
    price: 10500,
    image: "/img/sushi.jpeg",
    ingredients: ["Salmón fresco", "Salsa de soya", "Wasabi", "Jengibre"],
    category: "Japonesa",
    stock: 8
  },
  {
    id: 13,
    name: "Udon",
    price: 7500,
    image: "/img/sopa.avif",
    ingredients: ["Fideos udon", "Caldo", "Tempura", "Cebollín"],
    category: "Japonesa",
    stock: 17
  },
  {
    id: 14,
    name: "Kimchi Jjigae",
    price: 8800,
    image: "/img/kimchi.webp",
    ingredients: ["Kimchi", "Tofu", "Carne de cerdo", "Cebolla", "Ajo"],
    category: "Coreana",
    stock: 13
  },
  {
    id: 15,
    name: "Baozi",
    price: 5800,
    image: "/img/baozi.jpeg",
    ingredients: ["Masa de harina", "Carne", "Verduras", "Salsa"],
    category: "China",
    stock: 19
  },
  {
    id: 16,
    name: "Onigiri",
    price: 4500,
    image: "/img/sushi.jpeg",
    ingredients: ["Arroz", "Alga nori", "Relleno de salmón"],
    category: "Japonesa",
    stock: 24
  },
  {
    id: 17,
    name: "Takoyaki",
    price: 6200,
    image: "/img/tempura.webp",
    ingredients: ["Pulpo", "Masa", "Salsa takoyaki", "Bonito"],
    category: "Japonesa",
    stock: 11
  },
  {
    id: 18,
    name: "Pho Vietnamita",
    price: 8200,
    image: "/img/pho.jpg",
    ingredients: ["Fideos de arroz", "Caldo", "Carne", "Hierbas", "Lima"],
    category: "Vietnamita",
    stock: 21
  },
  {
    id: 19,
    name: "Dumplings Chinos",
    price: 7000,
    image: "/img/gyoza.jpg",
    ingredients: ["Masa", "Carne", "Verduras", "Salsa de soya"],
    category: "China",
    stock: 23
  },
  {
    id: 20,
    name: "Matcha Latte",
    price: 4800,
    image: "/img/helado verde.webp",
    ingredients: ["Té matcha", "Leche", "Azúcar"],
    category: "Japonesa",
    stock: 26
  }
];

// Esta línea exporta la lista de productos para que pueda ser usada en otras partes de la aplicación.
// "export default" significa que esta es la exportación principal del archivo.
export default productos;
