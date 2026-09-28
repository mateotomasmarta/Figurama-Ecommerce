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
- **ItemDetailContainer** — Obtiene un producto por su id y administra el estado.
- **ItemDetail** — Muestra la información completa del producto.
- **ItemCount** — Selector de cantidad con límites según el stock.

## Simulación de cargas de productos

Los productos se obtienen desde `src/mock/asyncMock.js`, que exporta la
función `getProducts`. Esta función devuelve una Promise que se resuelve
a los 2 segundos mediante `setTimeout`, simulando la latencia de una API real.

El componente `ItemListContainer` llama a esa promesa dentro de un `useEffect`
con array de dependencias vacío, para que la petición ocurra únicamente
al montarse el componente, y guarda el resultado en el estado `items`.

## Detalle de producto

La función `getProductById(productId)` en `src/mock/asyncMock.js` recibe un
identificador, busca el producto con `.find()` dentro del array y devuelve
una Promise. Resuelve con el producto encontrado o la rechaza con un error
si el id no existe. Al igual que `getProducts`, simula la latencia de una
API con un `setTimeout` de 2 segundos.

El componente `ItemDetailContainer` consume esa función dentro de un
`useEffect`, guarda el producto en estado y muestra un mensaje de carga
mientras la promesa está pendiente. La presentación se delega en
`ItemDetail`, que muestra la información completa del producto e incorpora
el componente `ItemCount`.

`ItemCount` recibe el stock del producto por props y controla la cantidad
seleccionada, impidiendo superar el stock disponible o bajar de una unidad.

## Navegación

La aplicación utiliza `react-router-dom` para el manejo de rutas.
`BrowserRouter` envuelve la aplicación en `App.jsx` y define cuatro rutas:

- `/` — listado completo de productos
- `/category/:id` — listado filtrado por categoría
- `/item/:id` — detalle de un producto
- `*` — página de error 404 (NotFound)

El `NavBar` queda fuera de `<Routes>`, por lo que permanece visible en todas
las vistas. La navegación se realiza con el componente `<Link>`, evitando
recargas completas de página.

`ItemListContainer` e `ItemDetailContainer` obtienen el parámetro de la URL
mediante `useParams()` y lo incluyen en el array de dependencias de su
`useEffect`, de modo que los datos se recargan al cambiar la ruta.

Desarrollado por Mateo Marta