# Tareas de usuario, Servidor API Rest

Proyecto de Node en un entorno NEST, donde se creó la API cumpliendo con la arquitectura REST que se utiliza en la [aplicación de React](https://github.com/Leonardo-G/react-administrador-proyectos), para leer/crear/actualizar/eliminar proyectos, tareas y registrar nuevos usuarios estando autenticado a través de Json Web Token, actualmente desplegado en [DETA SPACE](https://deta.space/)

<br/>

### Documentación
Podemos acceder a la [documentacion a través del link](https://nodeapicliente-1-o2897855.deta.app/docs) hecho con el paquete Swagger
<br/>
<br/>
### Estructura de archivos

```
src
│__ main.ts                     # Archivo principal para la inicialización 
|                                 de la aplicación 
│__ app.module.ts               # Archivo de módulo principal de la aplicación
│__ ...
│   
├─ auth/
|   ├── constants/              # Carpeta para Data Transfer Objects (DTOs)
│   │   └── index.ts            # Contiene constantes utilizadas en la autenticación
│   ├── controller/             
│   │   ├── auth.controller.ts  # Maneja las solicitudes HTTP relacionadas
|   |   |                         con la autenticación.
│   │   └── ...
│   ├── dto/                    # Carpeta para Data Transfer Objects (DTOs)
│   │   ├── auth-return.dto.ts  # Respuesta de autenticación que se devuelve al 
|   |   |                         cliente. status OK
│   │   └── auth.dto.ts         # DTO que se envía desde el cliente al servidor.
│   ├── service/                # Maneja la lógica de autenticación y la interacción 
|   |   |                         con la base de datos.
│   │   ├── auth.service.ts     # Contiene el servicio de autenticación
│   │   └── ...
│   └── auth.module.ts          # Archivo de módulo principal para la autenticación.
│
├─ common/
|   ├── guards/              
│   │   ├── auth.guard.ts       # Guard que se utiliza para proteger las rutas 
|   |   |                         que requieren autenticación.
│   │   └── valid-user.guard.ts # Guard que se utiliza para asegurar sea 
|   |                             un usuario válido.
│   ├── interface/
│   │   └── auth-user.interface.ts  # Interfaz de usuario de autenticación
│   └── pipes/                    
│       ├── mongo-id-validation.pipe.ts  # Pipe que se utiliza para validar los 
|       |                                  ID de MongoDB.
│       └── ...
│
├─ database/
|   └── database.module.ts      # Modulo @Global para configurar la 
|                                 conexión con la base de datos.
│
├─ proyectos/
│   ├── controller/             
│   │   ├── proyectos.controller.ts  # Maneja las solicitudes HTTP relacionadas
|   |   |                              con los proyectos.
│   │   └── ...
│   ├── dto/                    
│   │   ├── proyecto-return.dto.ts  # Respuesta de proyecots que se devuelve 
|   |   |                             al cliente. status OK.
│   │   └── proyecto.dto.ts         # DTO que se envía desde el cliente al servidor.
│   ├── service/                
│   │   ├── proyecto.service.ts     # Contiene el servicio de proyectos.
│   │   └── ...
│   └── auth.module.ts         
│   │   └── proyecto.dto.ts         # DTO que se envía desde el cliente al servidor.
│   ├── schema/                
│   │   └── proyecto.schema.ts  # schema de Mongoose para el modelo "Proyecto".
│   ├── service/                
│   │   ├── proyecto.service.ts    # Contiene el servicio de proyectos.
│   │   └── ...
│   └── proyectos.module.ts        # Archivo de módulo principal para los proyectos.
│
├─ tareas/
│   ├── controller/             
│   │   ├── tarea.controller.ts  # Maneja las solicitudes HTTP relacionadas
|   |   |                          con las tareas.
│   │   └── ...
│   ├── dto/                    
│   │   ├── tarea-return.dto.ts  # Respuesta de tareas que se devuelve al 
|   |   |                          cliente. status OK.
│   │   └── tarea.dto.ts         # DTO que se envía desde el cliente al servidor.
│   ├── guard/                
│   │   ├── proyecto-exist.guard.ts  # Guard de si existe el proyecto en el 
|   |   |                              controlador de tareas.
│   │   └── tarea-exist-guard       # Guard de si existe la tarea en la peticion
│   ├── pipes/                
│   │   ├── tarea-id-validate.ts    # Pipe para validar la ID.
│   │   └── ...
│   ├── schema/
│   │   ├── tarea.schema.ts  # Schema de Mongoose para el modelo "Tarea".
│   │   └── ...
│   └── service/
│       ├── tarea.service.ts     # Contiene el servicio de tareas.
│       └── ...
|
├─ tareas/
│   ├── controller/             
│   │   ├── users.controller.ts  # Maneja las solicitudes HTTP relacionadas 
|   |   |                          con los usuarios.
│   │   └── ...
│   ├── schema/
│   │   ├── user.schema.ts  # Schema de Mongoose para el modelo "Tarea".
│   │   └── ...
│   ├── service/
│   │   ├── users.service.ts # Contiene el servicio de tareas.
│   │   └── ...
│   └── users.module.ts  # Archivo de módulo principal para los proyectos.
|
├─ app.controller.spec.ts
├─ app.controller.ts
├─ app.module.ts
├─ app.service.ts
└─ main.ts
```

### Herramientas

Herramientas que se utiliza en este proyecto

- Nestjs: Framework de Nodejs, para la creación de aplicaciones del lado del servidor
  - @nestjs/common: v9.0.0
  - @nestjs/config: v2.3.1
  - @nestjs/core: v9.0.0
  - @nestjs/jwt: v10.0.3
  - @nestjs/mongoose: v9.2.2
  - @nestjs/platform-express: v9.0.0
  - @nestjs/swagger: v6.3.0
- bcrypt: Paquete para hashear cadenas de texto: v5.1.0.
- class-validator: biblioteca de validación de datos. v0.12.0
- mongodb: Contrololador de mongodb: v5.2.0
- mongoose: ORM de mongoDB para node. v5.2.0 

