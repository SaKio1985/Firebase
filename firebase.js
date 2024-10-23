// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  getFirestore,
  getDocs,
  collection,
  doc,
  getDoc,
} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_APP_ID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

//obtener un producto
export async function getSingleProduct(id) {
  const documentRef = doc(db, "Inventario", id);

  try {
    const snapshot = await getDoc(documentRef);
    console.log(snapshot);
    console.log(id);
    if (snapshot.exists()) {
      return snapshot.data();
    } else {
      console.log("El documento no existe!");
    }
  } catch (error) {
    console.error("Error al obtener el documento: ", error);
  }
}

//obtener toda una coleccion
export async function getInventario() {
  try {
    const querySnapshot = await getDocs(collection(db, "Inventario"));
    if (querySnapshot.size !== 0) {
      const productsList = querySnapshot.docs.map((docu) => {
        return {
          id: docu.id,
          // Transformacion para que este correcto con la base de datos, minusculas con mayusculas
          nombre: docu.data().Nombre,
          precio: docu.data().Precio,
          color: docu.data().Color,
          imagen: docu.data().Foto,
        };
      });
      return productsList;
    } else {
      console.log("Coleccion vacía !");
    }
  } catch (error) {
    console.error("Error al obtener la coleccion: ", error);
  }
}
