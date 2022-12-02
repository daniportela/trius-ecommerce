# Trius e-commerce

## Descripción
Esta aplicación es una plataforma e-commerce creada utilizando el stack MERN. Mediante llamadas a la base de datos en MongoDB, trae información de productos y los muestra para que el usuario pueda "comprarlos", navegando por categorías y visualizando el detalle de cada uno de ellos.

## Tecnologías utilizadas

### Frontend

* [react-hot-toast](https://react-hot-toast.com/) (^2.4.0): React Hot Toast es una librería que permite generar y mostrar notficaciones en pantalla de una forma altamente customizable, simple y eficiente.

* [React Router](https://www.npmjs.com/package/react-router): Paquete para implementar routing dentro de la aplicación.

### Backend

* [MongoDB Atlas](https://www.mongodb.com/atlas/database): Servicio de base de datos implementado para almacenar la información de productos.

* [Mongoose](https://www.npmjs.com/package//mongoose): Paquete que facilita la comunicación entre una app y la base de datos mediante funciones que permiten operaciones CRUD (Create, Read, Update, Delete).

* [Express](https://www.npmjs.com/package/express): Framework rápido y eficiente para Node.js.

* [body-parser](https://www.npmjs.com/package/body-parser): Middleware para Node.js que facilita obtener los valores dentro del cuerpo de una request.

## ¿Cómo lo pruebo?
1. Clona el repositorio
```
git clone https://github.com/daniportela/trius-ecommerce.git
```
2. Ubicarse en la carpeta correspondiente desde la consola
```
cd backend / frontend
```
3. Ejecutar el instalador de todas las dependencias necesarias para correr la aplicación
```
npm install
```
4. Una vez instaladas todas las dependencias, ejecutar el script de inicialización de la aplicación
```
npm start
```
Si desea ejecutar todo el programa con un solo comando (es decir, backend y frontend simultáneamente), puede optar también por correr el comando 'npm install' en la carpeta root. Esto instalará concurrently como una devDependency.

Una vez hecho esto, ejecutar el programa con el siguiente comando
```
npm run dev
```
5. Para terminar el proceso, ejecutar el siguiente comando en consola (Ctrl + C en Windows | Cmd + C en Mac):
```
^C
```
