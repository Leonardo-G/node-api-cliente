Próximamente se cambiara
```
src/
├── auth/
│   ├── dto/                 # Carpeta para Data Transfer Objects (DTOs)
│   │   ├── login.dto.ts    # DTO para el inicio de sesión
│   │   ├── register.dto.ts # DTO para el registro de usuarios
│   │   └── ...
│   ├── guards/              # Carpeta para Guards de autenticación
│   │   ├── jwt-auth.guard.ts# Guard para autenticación JWT
│   │   └── ...
│   ├── strategies/          # Carpeta para estrategias de autenticación
│   │   ├── jwt.strategy.ts # Estrategia para autenticación JWT
│   │   └── ...
│   ├── auth.module.ts       # Archivo de módulo principal para la autenticación
│   └── ...
├── users/
│   ├── controllers/         # Carpeta para controladores de usuario
│   │   ├── user.controller.ts # Controlador para manejar solicitudes de usuario
│   │   └── ...
│   ├── dto/                 # Carpeta para Data Transfer Objects (DTOs)
│   │   ├── create-user.dto.ts # DTO para crear usuario
│   │   ├── update-user.dto.ts # DTO para actualizar usuario
│   │   └── ...
│   ├── services/            # Carpeta para servicios de usuario
│   │   ├── user.service.ts # Servicio para manejar operaciones de usuario
│   │   └── ...
│   ├── entities/            # Carpeta para entidades de usuario
│   │   ├── user.entity.ts  # Entidad de usuario
│   │   └── ...
│   ├── users.module.ts      # Archivo de módulo principal para usuarios
│   └── ...
├── app.module.ts            # Archivo de módulo principal de la aplicación
└── main.ts                  # Archivo principal para la inicialización de la aplicación
```

