# 🚀 React + Firebase Boilerplate

Este proyecto sirve como base para aplicaciones web construidas con React y Firebase, incluyendo autenticación, base de datos en tiempo real, y almacenamiento.

## 📋 Requisitos Previos

- Node.js (v14.0.0 o superior)
- npm o yarn
- Cuenta de Firebase
- Git

## 🛠 Tecnologías Utilizadas

- React 18
- Firebase 9
- React Router v6
- React Context (para manejo de estado)
- Environment Variables
- CSS Modules

## 🚀 Configuración Inicial

1. **Clonar el repositorio**
```bash
git clone <url-del-repositorio>
cd firebase-prueba
```

2. **Instalar dependencias**
```bash
npm install
# o
yarn install
```

3. **Configurar Firebase**
   - Crear un nuevo proyecto en [Firebase Console](https://console.firebase.google.com)
   - Obtener las credenciales de configuración
   - Actualizar el archivo src/firebase.js:

```env
REACT_APP_FIREBASE_API_KEY=tu-api-key
REACT_APP_FIREBASE_AUTH_DOMAIN=tu-auth-domain
REACT_APP_FIREBASE_PROJECT_ID=tu-project-id
REACT_APP_FIREBASE_STORAGE_BUCKET=tu-storage-bucket
REACT_APP_FIREBASE_MESSAGING_SENDER_ID=tu-sender-id
REACT_APP_FIREBASE_APP_ID=tu-app-id
```

## 📁 Estructura del Proyecto

/
├── node_modules/      # Dependencias del proyecto
├── public/           # Archivos públicos estáticos
├── src/              # Código fuente
│   ├── assets/       # Imágenes, fuentes y otros recursos
│   ├── components/   # Componentes de React
│   │   ├── ProductsContainer.jsx
│   │   ├── ProductsContainer.css
│   │   ├── SearchComponent.jsx
│   ├── App.css      # Estilos principales
│   ├── App.jsx      # Componente principal
│   ├── index.css    # Estilos globales
│   ├── main.jsx     # Punto de entrada
│   └── firebase.js  # Configuración de Firebase
├── .gitignore       # Archivos ignorados por Git
├── eslint.config.js # Configuración de ESLint
├── index.html       # HTML principal
├── package-lock.json # Versiones exactas de dependencias
├── package.json     # Dependencias y scripts
├── README.md        # Documentación del proyecto
└── vite.config.js   # Configuración de Vite

## 🔥 Características de Firebase Implementadas


- **Firestore**
  - Consultas en tiempo real


- **Storage**
  - Gestión de archivos


## 🚀 Scripts Disponibles

```bash
# Iniciar en modo desarrollo
npm run start

# Construir para producción
npm run build

# Ejecutar tests
npm run test

# Desplegar a Firebase Hosting
npm run deploy
```

## 📚 Guías de Uso

### Autenticación

```javascript
import { auth } from '../firebase/config';

// Login con email
const loginWithEmail = async (email, password) => {
  try {
    await signInWithEmailAndPassword(auth, email, password);
  } catch (error) {
    console.error(error);
  }
};

// Login con Google
const loginWithGoogle = async () => {
  const provider = new GoogleAuthProvider();
  try {
    await signInWithPopup(auth, provider);
  } catch (error) {
    console.error(error);
  }
};
```

### Firestore

```javascript
import { db } from '../firebase/config';

// Añadir documento
const addDocument = async (collection, data) => {
  try {
    await addDoc(collection(db, collection), data);
  } catch (error) {
    console.error(error);
  }
};

// Obtener documentos en tiempo real
const getRealtimeData = (collection, callback) => {
  onSnapshot(collection(db, collection), (snapshot) => {
    const data = snapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    }));
    callback(data);
  });
};
```

## 🔒 Seguridad

- Implementar reglas de seguridad en Firebase Console
- Sanitizar datos antes de enviarlos a Firestore
- Utilizar variables de entorno para las credenciales
- Implementar manejo de errores robusto

## 📝 Buenas Prácticas

1. Mantener la lógica de Firebase separada en servicios
2. Usar custom hooks para la lógica de Firebase
3. Implementar manejo de errores consistente
4. Seguir principios de diseño responsivo
5. Mantener el código limpio y documentado

## 🤝 Contribución

1. Fork del repositorio
2. Crear rama feature (`git checkout -b feature/AmazingFeature`)
3. Commit de cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abrir Pull Request

## 📄 Licencia

Este proyecto está bajo la Licencia MIT - ver el archivo [LICENSE.md](LICENSE.md) para más detalles.

## 📧 Contacto

Tu Nombre - [@tutwitter](https://twitter.com/tutwitter) - email@ejemplo.com

Link del proyecto: [https://github.com/tuusuario/turepo](https://github.com/tuusuario/turepo)