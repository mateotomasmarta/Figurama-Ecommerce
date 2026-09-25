# Figurama

E-commerce de figuras de acción y coleccionables de películas y videojuegos.

## Descripción

Figurama es una tienda online que ermite explorar un catálogo de figuras coleccionables, filtrar por categoría, ver el detalle de cada producto y agregar items al carrito de compras.

## Tecnologías utilizadas

- **React** — librería principal para la construcción de la interfaz
- **Vite** — herramienta de build y servidor de desarrollo
- **JavaScript**
- **CSS** — estilos de la aplicación
- **ESLint** — análisis estático de código
- **Git / GitHub** — control de versiones
- - **Claude** — asistente IA

## Instalación y ejecución

Requisitos previos: tener instalado y npm.

1. Clonar el repositorio:

```bash
git clone https://github.com/mateotomasmarta/Figurama-Ecommerce.git
```

2. Ingresar a la carpeta del proyecto:

```bash
cd Figurama-Ecommerce
```

3. Instalar las dependencias:

```bash
npm install
```

4. Levantar el servidor de desarrollo:

```bash
npm run dev
```

5. Abrir el navegador en la URL que muestra la consola (por defecto `http://localhost:5173/`).


## Componentes

- **NavBar** — Barra de navegación superior con el logo de la tienda, las categorías de productos y el carrito.
- **CartWidget** — Ícono de carrito con contador de items
- **ItemListContainer** — Contenedor principal que da mensaje de bienvenida.
- 
## Simulación de cargas de productos

Los productos se obtienen desde `src/mock/asyncMock.js`, que exporta la
función `getProducts`. Esta función devuelve una Promise que se resuelve
a los 2 segundos mediante `setTimeout`, simulando la latencia de una API real.

El componente `ItemListContainer` llama a esa promesa dentro de un `useEffect`
con array de dependencias vacío, para que la petición ocurra únicamente
al montarse el componente, y guarda el resultado en el estado `items`.

Desarrollado por Mateo Marta