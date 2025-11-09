## API de Productos - Parcial 2 (Web II)

Descripción
---------
Pequeña API REST para gestionar productos (crear, listar y obtener por ID). Este repositorio contiene el backend del Parcial 2 de la materia Programación Web 2.

Estructura principal
-------------------
- `index.js` - arranca la aplicación y se conecta a la base de datos.
- `app.js` - configuración de Express y montaje de rutas.
- `routes/products.routes.js` - define los endpoints relacionados con productos.
- `controllers/product.controller.js` - lógica de los endpoints.
- `models/product.model.js` - esquema de Mongoose para productos.

Requisitos
----------
- Node.js (v14+ recomendado)
- npm
- MongoDB

Variables de entorno
--------------------
Crea un archivo `.env` en la raíz del proyecto con al menos estas variables:

```
MONGO_URL=<tu_mongo_uri_aqui>
SERVER_PORT=3000
```

Instalación y ejecución
-----------------------
Desde PowerShell en la raíz del proyecto:

```powershell
# Instalar dependencias
npm install

# Iniciar en modo desarrollo (usa nodemon según package.json)
npm start

# Alternativa si no tienes nodemon: 
node index.js
```

Resumen del modelo `Product`
----------------------------
Campos principales (definidos en `models/product.model.js`):

- `name` (String, required, minLength 3, maxLength 100)
- `price` (Number, required, min 0)
- `category` (String, enum: Armas, Armaduras, Accesorios, Consumibles, Varios)
- `level` (Number, required, min 1, max 100)
- `stock` (Number, required, min 0)
- `rarity` (String, enum: Común, Poco Común, Raro, Épico, Legendario)
- `isKeyItem` (Boolean)
- `createdAt` (Date, default: Date.now)

Autor
-----
Matías Candia
