# 🌐 Red Social Demo
## 📖 Descripción

Es una aplicación web completa que simula las funcionalidades principales de una red social moderna. Desarrollada como proyecto de aprendizaje durante un curso Full Stack, esta aplicación permite a los usuarios registrarse, crear contenido, interactuar con otros usuarios y gestionar su perfil personal.

El proyecto demuestra la implementación de patrones de desarrollo web modernos, arquitectura MVC, y las mejores prácticas en desarrollo con Laravel.

## ✨ Características

### 🔐 **Autenticación y Autorización**
- Registro de usuarios con validación
- Login/Logout seguro
- Recuperación de contraseñas
- Middleware de protección de rutas

### 👤 **Gestión de Perfiles**
- Perfiles personalizables
- Subida de foto de perfil
- Edición de información personal
- Visualización de perfiles públicos

### 📝 **Sistema de Posts**
- Crear, editar y eliminar posts
- Subida de imágenes en posts
- Feed de noticias personalizado
- Ordenamiento cronológico

### 💬 **Interacciones Sociales**
- Sistema de likes en posts
- Comentarios en tiempo real
- Seguir/No seguir usuarios
- Notificaciones de actividad

### 🎨 **Interfaz de Usuario**
- Diseño responsive para móviles y desktop
- Interfaz intuitiva y moderna
- Navegación fluida
- Experiencia de usuario optimizada

## 🛠️ Tecnologías Utilizadas

### **Backend**
- **PHP 8.x** - Lenguaje de programación
- **Laravel 9.x** - Framework web PHP
- **MySQL** - Base de datos relacional
- **Eloquent ORM** - Mapeo objeto-relacional

### **Frontend**
- **HTML5** - Estructura y marcado semántico
- **CSS3** - Estilos y animaciones
- **JavaScript ES6+** - Interactividad del cliente
- **Bootstrap 5** - Framework CSS responsive
- **jQuery** - Manipulación del DOM

### **Herramientas y Servicios**
- **Composer** - Gestor de dependencias PHP
- **npm/Yarn** - Gestor de paquetes frontend
- **Laravel Mix** - Compilación de assets
- **Git** - Control de versiones

## 📋 Requisitos Previos

Antes de instalar, asegúrate de tener instalado:

- **PHP >= 8.0**
- **Composer**
- **Node.js >= 14.x**
- **MySQL >= 5.7**
- **Apache/Nginx**

## 🚀 Instalación

### 1. **Clonar el repositorio**
```bash
git clone https://github.com/DFacundoBarrios/red-social-demo.git
cd red-social-demo
```

### 2. **Instalar dependencias PHP**
```bash
composer install
```

### 3. **Instalar dependencias JavaScript**
```bash
npm install
# o usando Yarn
yarn install
```

### 4. **Configurar variables de entorno**
```bash
cp .env.example .env
php artisan key:generate
```

### 5. **Configurar base de datos**
Edita el archivo `.env` con tus credenciales de base de datos:
```env
DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_PORT=3306
DB_DATABASE=red_social_demo
DB_USERNAME=tu_usuario
DB_PASSWORD=tu_contraseña
```

### 6. **Ejecutar migraciones**
```bash
php artisan migrate
```

### 7. **Generar datos de prueba (opcional)**
```bash
php artisan db:seed
```

### 8. **Compilar assets**
```bash
npm run dev
# Para producción: npm run production
```

## ⚙️ Configuración

### **Configuración de Almacenamiento**
```bash
php artisan storage:link
```

### **Permisos de Directorio**
```bash
chmod -R 775 storage/
chmod -R 775 bootstrap/cache/
```

### **Configuración de Email (opcional)**
Configura el servicio de email en `.env`:
```env
MAIL_MAILER=smtp
MAIL_HOST=smtp.mailtrap.io
MAIL_PORT=2525
MAIL_USERNAME=tu_username
MAIL_PASSWORD=tu_password
```

## 🎮 Uso

### **Iniciar el servidor de desarrollo**
```bash
php artisan serve
```

La aplicación estará disponible en `http://localhost:8000`

### **Credenciales de prueba**
Si ejecutaste los seeders, puedes usar:
- **Email:** admin@redsocial.com
- **Contraseña:** password

### **Funcionalidades principales**

1. **Registro/Login**: Crea una cuenta o inicia sesión
2. **Crear Post**: Comparte contenido con texto e imágenes
3. **Interactuar**: Dale like y comenta en posts de otros usuarios
4. **Perfil**: Personaliza tu información y foto de perfil
5. **Seguir**: Conecta con otros usuarios de la plataforma

## 🔌 API Endpoints

### **Autenticación**
- `POST /api/register` - Registrar usuario
- `POST /api/login` - Iniciar sesión
- `POST /api/logout` - Cerrar sesión

### **Posts**
- `GET /api/posts` - Obtener todos los posts
- `POST /api/posts` - Crear nuevo post
- `PUT /api/posts/{id}` - Actualizar post
- `DELETE /api/posts/{id}` - Eliminar post

### **Usuarios**
- `GET /api/users/{id}` - Obtener perfil de usuario
- `PUT /api/users/{id}` - Actualizar perfil
- `POST /api/users/{id}/follow` - Seguir usuario

## 📁 Estructura del Proyecto

```
red-social-demo/
├── app/
│   ├── Http/Controllers/
│   ├── Models/
│   └── Middleware/
├── database/
│   ├── migrations/
│   └── seeders/
├── public/
│   ├── css/
│   ├── js/
│   └── images/
├── resources/
│   ├── views/
│   ├── css/
│   └── js/
├── routes/
│   ├── web.php
│   └── api.php
└── storage/
```

## 🤝 Contribuir

¡Las contribuciones son bienvenidas! Para contribuir:

1. **Fork** el proyecto
2. **Crea** tu rama de características (`git checkout -b feature/AmazingFeature`)
3. **Commit** tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. **Push** a la rama (`git push origin feature/AmazingFeature`)
5. **Abre** un Pull Request

## 👨‍💻 Contacto

**Facundo Barrios** - Desarrollador Full Stack Jr

- 📧 Email: [tu-email@ejemplo.com](mailto:faqbarrios23@gmail.com)
- 💼 LinkedIn: [linkedin.com/in/tu-perfil]([https://linkedin.com/in/tu-perfil](https://www.linkedin.com/in/facundobarrios27/))
- 🐙 GitHub: [@DFacundoBarrios](https://github.com/DFacundoBarrios)

