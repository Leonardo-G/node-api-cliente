# Tareas de usuario, Servidor API

Proyecto de Node, donde se creó la api que se utiliza, en la [aplicación de React](https://github.com/Leonardo-G/react-administrador-proyectos), para leer/crear/actualizar/eliminar proyectos, tareas y registrar nuevos usuarios intercambiando informacion a través de Json Web Token, actualmente desplegado en [DETA SPACE](https://deta.space/)

Peticiones disponible:

```
<link>/api/auth

 - GET: Para obtener información del usuario.
 - POST: Para autenticar usuario, comprobando que los datos enviados o el usuario exista en la base de datos
```

```
<link>/api/usuarios

 - POST: Para crear un nuevo usuario en la base de datos en caso de que no exista. 
```


```
<link>/api/proyectos

 - GET: Para obtener los proyectos del usuario.
 - POST: Para crear nuevos proyectos
 - PUT: Para actualizar los proyectos
 - DELETE: Para eliminar los proyectos del usuario.  
```


```
<link>/api/tareas

 - GET: Para obtener las tareas del usuario.
 - POST: Para crear nuevos tareas
 - PUT: Para actualizar las tareas
 - DELETE: Para eliminar las tareas del usuario.  
```

### Herramientas

Herramientas que se utiliza en este proyecto
 - express: Framework de Node.Js.
 - express-validator: Usado para válidar resultados desde el lado del servidor con express
 - bcryptjs: Se utiliza para hashear las contraseñas.
 - cors: Para habilitar y configurar los permisos para acceder al servidor.
 - dotenv: Para manejar variables de entorno.
 - jsonwebtoken: para crear un token al momento de que el usuario se registre con sus credenciales.
 - moongose: ORM de MongoDb que nos permite escribir consultas a la base de datos

