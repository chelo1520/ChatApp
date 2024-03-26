# App de Chat

Esta aplicación de chat está desarrollada con tecnologías como Node.js, React, MongoDB y Bootstrap. A continuación se detalla cómo se ha construido el proyecto y algunas de sus características clave:

## Backend

### Módulos Utilizados
- **Cors**: Para permitir la comunicación de datos entre el frontend y el backend sin problemas de dominio.
- **Express**: Facilita la creación y manipulación del servidor.
- **Jsonwebtoken**: Permite que los usuarios se manejen de manera segura mediante tokens.
- **bcrypt**: Se utiliza para encriptar contraseñas y garantizar su seguridad.
- **cookie-parser**: Para almacenar información del usuario en las cookies y utilizarla para verificaciones.
- **socket.io**: Aún no implementado, pero será utilizado para la comunicación en tiempo real.

### Registro e Inicio de Sesión del Usuario
- En el proceso de registro se validan los datos proporcionados, se verifica la contraseña con su confirmación y se comprueba que el nombre de usuario no esté en uso.
  - Se encripta la contraseña utilizando bcrypt.
  - Se genera una foto de perfil aleatoria utilizando Avatar Placeholder, basada en la elección de género en el formulario.
  - Se genera un token con el ID del usuario utilizando Jsonwebtoken para almacenarlo en las cookies.

- En el inicio de sesión se verifica la existencia de los datos, se comprueba si el usuario está registrado, se compara la contraseña almacenada con la ingresada (utilizando bcrypt.compare()) y se genera un token para almacenarlo en las cookies.

- En el logout se elimina la cookie del usuario y se redirige automáticamente al inicio de sesión.

### Esquemas para Mensajes
- Se ha creado un esquema de conversación para almacenar el ID del remitente y el receptor en el atributo "participantes", y un array "mensaje" para almacenar los mensajes enviados.
- También se ha creado un esquema de mensaje para almacenar mensajes individualmente y luego agregarlos al array "mensaje" del esquema de conversación. Incluye atributos "receptorId" y "remitenteId" para identificar el emisor y el receptor del mensaje.

### Manejo de Mensajes y Conversaciones
- Se verifica el token almacenado en las cookies para autenticar al usuario y obtener su ID.
- Para enviar mensajes, se toma el mensaje del cuerpo de la solicitud, el ID del remitente del token y el ID del receptor de los parámetros de la URL. Se verifica la existencia de la conversación y se crea un mensaje asociado a ella.
- Para obtener conversaciones, se obtienen los IDs de los usuarios de la solicitud y se buscan en la base de datos. En caso de no existir, se devuelve un array vacío.
- Al iniciar sesión, se obtienen todos los usuarios de la base de datos para facilitar la comunicación entre ellos.

## Frontend
- Se han creado tres secciones: login, registro y home.
  - En login y registro se utiliza useForm para el manejo de formularios y se extraen funciones del contexto de usuario para el envío de datos al backend y la gestión de errores.
  - En home se dividen en dos componentes principales: Sidebar y Mensajes. La Sidebar incluye un componente para buscar usuarios y otro para mostrar conversaciones, mientras que Mensajes muestra la conversación entre usuarios seleccionada.
